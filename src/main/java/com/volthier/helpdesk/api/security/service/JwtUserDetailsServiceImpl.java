package com.volthier.helpdesk.api.security.service;

import com.volthier.helpdesk.api.entity.User;
import com.volthier.helpdesk.api.security.jwt.JwtUserFactory;
import com.volthier.helpdesk.api.service.UserService;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsServiceImpl implements UserDetailsService {

    private UserService userService;

    public JwtUserDetailsServiceImpl(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userService.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException(String.format("Usuario nã encontrado '%s'", email));
        } else {
            return JwtUserFactory.create(user);
        }
    }
}
