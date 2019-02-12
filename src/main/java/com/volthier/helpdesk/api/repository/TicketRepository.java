package com.volthier.helpdesk.api.repository;

import com.volthier.helpdesk.api.entity.Ticket;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TicketRepository extends MongoRepository<Ticket, String> {

    Page<Ticket> findByUserIdOrderByDateDesc(Pageable pages, String userId);

    Page<Ticket> findByTitleIgnoreCaseContainingAndStatusAndPriorityOrderByDateDesc(String title, String status, String priority, Pageable pages);

    Page<Ticket> findByTitleIgnoreCaseContainingAndStatusAndUserIdAndPriorityOrderByDateDesc(String title, String status, String priority, Pageable pages);

    Page<Ticket> findByTitleIgnoreCaseContainingAndStatusAndAssignedUserIdAndPriorityOrderByDateDesc(String title, String status, String priority, Pageable pages);

    Page<Ticket> findByNumber(Integer number, Pageable pages);
}
