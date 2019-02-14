package com.volthier.helpdesk.api.controllers;

import com.volthier.helpdesk.api.entity.User;
import com.volthier.helpdesk.api.response.Response;
import com.volthier.helpdesk.api.service.UserService;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*")
public class UserController {

    private UserService userService;

    private PasswordEncoder passwordEncoder;

    public UserController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<Response<User>> create(HttpServletRequest request, @RequestBody User user, BindingResult result) {

        Response<User> response = new Response<User>();
        try {
            validateCreateUser(user, result);
            if(result.hasErrors()){
                result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
                return ResponseEntity.badRequest().body(response);
            }

            user.setPassword(passwordEncoder.encode(user.getPassword()));
            User userPresisted = (User) userService.createOrUpdate(user);
            response.setData(userPresisted);
        } catch (DuplicateKeyException dE) {
            response.getErrors().add("E-mail already registred" );
            return ResponseEntity.badRequest().body(response);
        } catch (Exception ex) {
            response.getErrors().add(ex.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
        return ResponseEntity.ok(response);
    }

    private void validateCreateUser(User user, BindingResult result){
        if (user.getEmail() == null) {
            result.addError(new ObjectError("User", "Email não informado"));
        }
    }

    @PutMapping
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<Response<User>> update(HttpServletRequest request, @RequestBody User user, BindingResult result) {
        Response<User> response = new Response<User>();
        try {
            validateUpdateUser(user, result);
            if(result.hasErrors()) {
                result.getAllErrors().forEach( error -> response.getErrors().add(error.getDefaultMessage()) );
                return ResponseEntity.badRequest().body(response);
            }
        } catch (Exception ex) {
            response.getErrors().add(ex.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User userPresisted = (User) userService.createOrUpdate(user);
        response.setData(userPresisted);
        return ResponseEntity.ok(response);
    }



    private void validateUpdateUser(User user, BindingResult result){
        if (user.getId() == null) {
            result.addError(new ObjectError("User", "Id não informado"));
        }
        if (user.getEmail() == null) {
            result.addError(new ObjectError("User", "Email não informado"));
        }
    }

    @GetMapping(value = "{id}")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<Response<User>> findById(@PathVariable("id") String id) {
        Response<User> response = new Response<User>();
        Optional<User> userOptional = userService.findById(id);
        User user = userOptional.get();
        if (user == null) {
            response.getErrors().add("Register not found id: "+id);
            return ResponseEntity.badRequest().body(response);
        } else {
            response.setData(user);
        }

        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping(value = "{id}")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<Response<String>> delete(@PathVariable("id") String id) {
        Response<String> response = new Response<String>();
        Optional<User> userOptional = userService.findById(id);
        User user = userOptional.get();
        if (user == null) {
            response.getErrors().add("Register not found id: "+id);
            return ResponseEntity.badRequest().body(response);
        }
        userService.delete(id);
        return ResponseEntity.ok(new Response<String>());
    }

    @GetMapping(value = "{page}/{count}")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<Response<Page<User>>> findAll(@PathVariable int page, @PathVariable int count) {
        Response<Page<User>> response = new Response<Page<User>>();
        Page<User> userPage = userService.findAll(page,count);
        response.setData(userPage);
        return ResponseEntity.ok().body(response);
    }

}
