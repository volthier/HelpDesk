package com.volthier.helpdesk.api.repository;

import com.volthier.helpdesk.api.entity.ChangeStatus;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ChangeStatusRepository extends MongoRepository<ChangeStatus, String> {

    Iterable<ChangeStatus> findByTicketIdOrderByDateChangeStatusDesc(String ticketId);
}
