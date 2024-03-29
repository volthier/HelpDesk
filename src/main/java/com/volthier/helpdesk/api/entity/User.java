package com.volthier.helpdesk.api.entity;

import com.volthier.helpdesk.api.enums.ProfileEnum;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Size;

@Document
public class User {

    @Id
    @NotBlank
    private String id;
    @Indexed(unique = true)
    @NotBlank(message = "Email requerido")
    @Email(message = "Email invalido")
    private String email;

    @NotBlank(message = "Password requerido")
    @Size(min = 6)
    private String password;
    private ProfileEnum profile;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ProfileEnum getProfile() {
        return profile;
    }

    public void setProfile(ProfileEnum profile) {
        this.profile = profile;
    }


}
