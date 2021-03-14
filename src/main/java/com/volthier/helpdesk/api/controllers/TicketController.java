package com.volthier.helpdesk.api.controllers;

import com.volthier.helpdesk.api.dto.Summary;
import com.volthier.helpdesk.api.entity.ChangeStatus;
import com.volthier.helpdesk.api.entity.Ticket;
import com.volthier.helpdesk.api.entity.User;
import com.volthier.helpdesk.api.enums.ProfileEnum;
import com.volthier.helpdesk.api.enums.StatusEnum;
import com.volthier.helpdesk.api.response.Response;
import com.volthier.helpdesk.api.security.jwt.JwtTokenUtil;
import com.volthier.helpdesk.api.service.TicketService;
import com.volthier.helpdesk.api.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@RestController
@RequestMapping("/api/ticket")
@CrossOrigin(origins = "*")
public class TicketController {

    private TicketService ticketService;

    protected JwtTokenUtil jwtTokenUtil;

    private UserService userService;

    public TicketController(TicketService ticketService, JwtTokenUtil jwtTokenUtil, UserService userService) {
        this.ticketService = ticketService;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userService = userService;
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('CUSTOMER')")
    public ResponseEntity<Response<Ticket>> createOrUpdate(HttpServletRequest request, @RequestBody Ticket ticket, BindingResult result) {

        Response<Ticket> response = new Response<Ticket>();

        try {
            validateCreateTicket(ticket, result);
            if (result.hasErrors()) {
                result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
                return ResponseEntity.badRequest().body(response);
            }
            ticket.setStatus(StatusEnum.getStatus("New"));
            ticket.setUser(userFromRequest(request));
            ticket.setDate(new Date());
            ticket.setNumber(generateNumber());
            Ticket ticketPersisted = (Ticket) ticketService.createOrUpdate(ticket);

            response.setData(ticketPersisted);

        } catch (Exception e) {
            response.getErrors().add(e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }

        return ResponseEntity.ok(response);
    }

    private void validateCreateTicket(Ticket ticket, BindingResult result) {
        if (ticket.getTitle() == null) {
            result.addError(new ObjectError("Ticket", "Title must be informe"));
        }
    }

    public User userFromRequest(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        String email = jwtTokenUtil.getUserNameFromToken(token);
        return userService.findByEmail(email);
    }

    private Integer generateNumber() {
        Random random = new Random();
        return random.nextInt(999999);
    }

    @PutMapping
    @PreAuthorize("hasAnyRole('CUSTOMER')")
    public ResponseEntity<Response<Ticket>> update(HttpServletRequest request, @RequestBody Ticket ticket, BindingResult result) {

        Response<Ticket> response = new Response<Ticket>();
        try {
            validateUpdateTicket(ticket, result);
            if (result.hasErrors()) {
                result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
                return ResponseEntity.badRequest().body(response);
            }
            Optional<Ticket> ticketCurrent = ticketService.findById(ticket.getId());
            ticket.setStatus(ticketCurrent.get().getStatus());
            ticket.setUser(ticketCurrent.get().getUser());
            ticket.setDate(ticketCurrent.get().getDate());
            ticket.setNumber(ticketCurrent.get().getNumber());

            if (ticketCurrent.get().getAssignedUser() != null) {
                ticket.setAssignedUser(ticketCurrent.get().getAssignedUser());
            }

            Ticket ticketPersisted = (Ticket) ticketService.createOrUpdate(ticket);
            response.setData(ticketPersisted);

        } catch (Exception e) {
            response.getErrors().add(e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }

        return ResponseEntity.ok(response);
    }

    private void validateUpdateTicket(Ticket ticket, BindingResult result) {
        if (ticket.getId() == null) {
            result.addError(new ObjectError("Ticket", "Ticket ID must be informe"));
        }

        if (ticket.getTitle() == null) {
            result.addError(new ObjectError("Ticket", "Title must be informe"));
        }
    }

    @GetMapping(value = "{id}")
    @PreAuthorize("hasAnyRole('CUSTOMER','TECHNICIAN')")
    public ResponseEntity<Response<Ticket>> findById(@PathVariable("id") String id) {
        Response<Ticket> response = new Response<Ticket>();
        Optional<Ticket> ticket = ticketService.findById(id);
        if (ticket.get() == null) {
            response.getErrors().add("Register not fund id: " + ticket.get().getId());
            return ResponseEntity.badRequest().body(response);
        }

        List<ChangeStatus> changes = new ArrayList<ChangeStatus>();
        Iterable<ChangeStatus> changesCurrent = ticketService.listChangeStatus(ticket.get().getId());
        for (Iterator<ChangeStatus> iterator = changesCurrent.iterator(); iterator.hasNext(); ) {
            ChangeStatus changeStatus = (ChangeStatus) iterator.next();
            changeStatus.setTicket(null);
            changes.add(changeStatus);
        }
        ticket.get().setChanges(changes);
        response.setData(ticket.get());

        return ResponseEntity.ok(response);
    }

    @DeleteMapping(value = "{id}")
    @PreAuthorize("hasAnyRole('CUSTOMER','ADMIN')")
    public ResponseEntity<Response<String>> delete(@PathVariable("id") String id) {
        Response<String> response = new Response<String>();
        Optional<Ticket> ticket = ticketService.findById(id);
        if (ticket.get() == null) {
            response.getErrors().add("Register not fund id: " + ticket.get().getId());
            return ResponseEntity.badRequest().body(response);
        }
        ticketService.delete(ticket.get().getId());
        return ResponseEntity.ok(new Response<String>());
    }

    @GetMapping(value = "{page}/{count}")
    @PreAuthorize("hasAnyRole('CUSTOMER','TECHNICIAN')")
    public ResponseEntity<Response<Page<Ticket>>> findAll(HttpServletRequest request, @PathVariable("page") int page, @PathVariable("count") int count) {
        Response<Page<Ticket>> response = new Response<Page<Ticket>>();
        Page<Ticket> ticketPage = null;
        User userResquest = userFromRequest(request);
        if (userResquest.getProfile().equals(ProfileEnum.ROLE_CUSTOMER)) {
            ticketPage = ticketService.findByCurrentUser(page, count, userResquest.getId());
        } else if (userResquest.getProfile().equals(ProfileEnum.ROLE_TECHNICIAN)) {
            ticketPage = ticketService.findAll(page, count);
        }

        response.setData(ticketPage);
        return ResponseEntity.ok(response);
    }

    @GetMapping(value = "{page}/{count}/{number}/{title}/{status}/{priority}/{assigned}")
    @PreAuthorize("hasAnyRole('CUSTOMER','TECHNICIAN')")
    public ResponseEntity<Response<Page<Ticket>>> findByParams(
            HttpServletRequest request,
            @PathVariable("page") int page,
            @PathVariable("count") int count,
            @PathVariable("number") Integer number,
            @PathVariable("title") String title,
            @PathVariable("status") String status,
            @PathVariable("priority") String priority,
            @PathVariable("assigned") boolean assigned
            ) {

        title = title.equals("uninformed") ? "" : title;
        status = status.equals("uninformed") ? "" : status;
        priority = priority.equals("uninformed") ? "" : priority;

        Response<Page<Ticket>> response = new Response<Page<Ticket>>();
        Page<Ticket> ticketPage = null;

        if(number > 0 ) {
            ticketPage = ticketService.findByNumber(page, count, number);
        } else {
            User userRequest = userFromRequest(request);
            if (userRequest.getProfile().equals(ProfileEnum.ROLE_CUSTOMER)) {
                    ticketPage =ticketService.findByParametersAndCurentUser(page,count, title, status, priority , userRequest.getId());
            } else if (userRequest.getProfile().equals(ProfileEnum.ROLE_TECHNICIAN)) {
                if(assigned) {
                    ticketPage = ticketService.findByParametersAndAssignedUser(page, count, title, status , priority, userRequest.getId());
                } else {
                    ticketPage =ticketService.findByParameters(page, count, title, status, priority);
                }
            }
        }

        response.setData(ticketPage);
        return ResponseEntity.ok(response);
    }

    @PutMapping(value = "{id}/{status}")
    @PreAuthorize("hasAnyRole('CUSTOMER','TECHNICIAN')")
    public ResponseEntity<Response<Ticket>> changeStatus(
            @PathVariable("id") String id,
            @PathVariable("status") String status,
            @RequestBody Ticket ticket,
            HttpServletRequest request,
            BindingResult result
    ) {
        Response<Ticket> response = new Response<Ticket>();

        try{
            validateChangeStatus(id, status, result);
            if (result.hasErrors()) {
                result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
                return ResponseEntity.badRequest().body(response);
            }
            Optional<Ticket> ticketCurrent = ticketService.findById(id);
            Ticket ticketRecovered = ticketCurrent.get();
            ticketRecovered.setStatus(StatusEnum.getStatus(status));

            if(status.equals("Assigned")) {
                ticketRecovered.setAssignedUser(userFromRequest(request));
            }

            Ticket ticketPersisted = (Ticket) ticketService.createOrUpdate(ticketRecovered);
            ChangeStatus changeStatus = new ChangeStatus();
            changeStatus.setUserChange(userFromRequest(request));
            changeStatus.setDateChangeStatus(new Date());
            changeStatus.setStatus(StatusEnum.getStatus(status));
            changeStatus.setTicket(ticketPersisted);
            ticketService.createChangeStatus(changeStatus);
            response.setData(ticketPersisted);
        } catch (Exception e) {
            response.getErrors().add(e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }

        return ResponseEntity.ok(response);
    }

    private void validateChangeStatus(String id, String status, BindingResult result) {
        if (id == null || id.equals("")) {
            result.addError(new ObjectError("Ticket", "Ticket ID hasn't be informed"));
        }

        if (status == null || status.equals("")) {
            result.addError(new ObjectError("Ticket", "Status hasn't be informed"));
        }
    }

    @GetMapping(value = "/summary")
    public ResponseEntity<Response<Summary>> findSummary() {
        Response<Summary> response = new Response<Summary>();
        Summary summary = new Summary();

        int amountNew = 0;
        int amountResolved = 0;
        int amountApproved = 0;
        int amountDisapproved = 0;
        int amountAssigned = 0;
        int amountClosed = 0;

        Iterable<Ticket> tickets = ticketService.findAll();

        if (tickets != null) {
            for (Iterator<Ticket> iterator = tickets.iterator(); iterator.hasNext();) {
                Ticket ticket = (Ticket) iterator.next();
                if (ticket.getStatus().equals(StatusEnum.New)) {
                    amountNew++;
                }
                if (ticket.getStatus().equals(StatusEnum.Resolved)) {
                    amountResolved++;
                }
                if (ticket.getStatus().equals(StatusEnum.Approved)) {
                    amountApproved++;
                }
                if (ticket.getStatus().equals(StatusEnum.Assigned)) {
                    amountAssigned++;
                }
                if (ticket.getStatus().equals(StatusEnum.Disapproved)) {
                    amountDisapproved++;
                }
                if (ticket.getStatus().equals(StatusEnum.Closed)) {
                    amountClosed++;
                }
            }
        }

        summary.setAmountNew(amountNew);
        summary.setAmountResolved(amountResolved);
        summary.setAmountApproved(amountApproved);
        summary.setAmountAssigned(amountAssigned);
        summary.setAmountDisapproved(amountDisapproved);
        summary.setAmountClosed(amountClosed);
        response.setData(summary);
        return ResponseEntity.ok(response);
    }
}

