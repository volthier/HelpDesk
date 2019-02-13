package com.volthier.helpdesk.api.service;

import com.volthier.helpdesk.api.entity.ChangeStatus;
import com.volthier.helpdesk.api.entity.Ticket;
import com.volthier.helpdesk.api.repository.ChangeStatusRepository;
import com.volthier.helpdesk.api.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TicketServiceImpl implements TicketService{

    @Autowired
    private TicketRepository ticketRepository;
    @Autowired
    private ChangeStatusRepository changeStatusRepository;

    @Override
    public Ticket createOrUpdate(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public Optional<Ticket> findById(String id) {
        return ticketRepository.findById(id);
    }

    @Override
    public void delete(String id) {
        ticketRepository.deleteById(id);
    }

    @Override
    public Page<Ticket> findAll(int page, int count) {
        Pageable pages = new PageRequest(page,count);
        return ticketRepository.findAll(pages);
    }

    @Override
    public ChangeStatus createChangeStatus(ChangeStatus changeStatus) {
        return changeStatusRepository.save(changeStatus);
    }

    @Override
    public Iterable<ChangeStatus> listChangeStatus(String id) {
        return changeStatusRepository.findByTicketIdOrderByDateChangeStatusDesc(id);
    }

    @Override
    public Page<Ticket> findByCurrentUser(int page, int count, String userId) {
        Pageable pages = new PageRequest(page,count);
        return ticketRepository.findByUserIdOrderByDateDesc(pages, userId);
    }

    @Override
    public Page<Ticket> findByParameters(int page, int count, String title, String status, String priority) {
        Pageable pages = new PageRequest(page,count);
        return ticketRepository.findByTitleIgnoreCaseContainingAndStatusAndPriorityOrderByDateDesc(title, status, priority, pages);
    }

    @Override
    public Page<Ticket> findByParametersAndCurentUser(int page, int count, String title, String status, String priority, String userId) {
        Pageable pages = new PageRequest(page,count);
        return ticketRepository.findByTitleIgnoreCaseContainingAndStatusAndUserIdAndPriorityOrderByDateDesc(title, status, priority, userId, pages);
    }

    @Override
    public Page<Ticket> findByNumber(int page, int count, Integer number) {
        Pageable pages = new PageRequest(page,count);
        return ticketRepository.findByNumber(number, pages);
    }

    @Override
    public Iterable<Ticket> findAll() {
        return ticketRepository.findAll();
    }

    @Override
    public Page<Ticket> findByParametersAndAssignedUser(int page, int count, String title, String status, String priority, String assignedUser) {
        Pageable pages = new PageRequest(page,count);
        return ticketRepository.findByTitleIgnoreCaseContainingAndStatusAndAssignedUserIdAndPriorityOrderByDateDesc(title, status, priority, assignedUser, pages);
    }
}
