package com.volthier.helpdesk.api.service;

import com.volthier.helpdesk.api.entity.User;
import com.volthier.helpdesk.api.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User createOrUpdate(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> findById(String id) {
        return userRepository.findById(id);
    }

    @Override
    public void delete(String id) {
        userRepository.delete(id);

    }

    @Override
    public Page<User> findAll(int page, int count) {
        Pageable pages = new PageRequest(page, count);
        return userRepository.findAll(pages);
    }
}
