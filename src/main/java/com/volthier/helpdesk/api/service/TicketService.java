package com.volthier.helpdesk.api.service;

import com.volthier.helpdesk.api.entity.ChangeStatus;
import com.volthier.helpdesk.api.entity.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public interface TicketService {

    Ticket createOrUpdate(Ticket ticket);

    Optional<Ticket> findById(String id);

    void delete(String id);

    Page<Ticket> findAll(int page, int count);

    ChangeStatus createChangeStatus(ChangeStatus changeStatus);

    Iterable<ChangeStatus> listChangeStatus(String id);

    Page<Ticket> findByCurrentUser(int page, int count, String userId);

    Page<Ticket> findByParameters(int page, int count, String title, String status, String priority);

    Page<Ticket> findByParametersAndCurentUser(int page, int count, String title, String status, String priority, String userId);

    Page<Ticket> findByNumber(int page, int count, Integer number);

    Iterable<Ticket> findAll();

    Page<Ticket> findByParametersAndAssignedUser(int page, int count, String title, String status, String priority, String assignedUser);
}
