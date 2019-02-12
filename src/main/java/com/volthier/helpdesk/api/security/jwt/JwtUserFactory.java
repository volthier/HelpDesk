package com.volthier.helpdesk.api.security.jwt;

import com.volthier.helpdesk.api.entity.User;
import com.volthier.helpdesk.api.enums.ProfileEnum;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;

public class JwtUserFactory {

    private JwtUserFactory() {
    }

    //CONVERTE E GERA UM JWT USER COM BASE NOS DADOS DO USUARIO
    public static JwtUser create(User user) {
        return new JwtUser(user.getId(),
                user.getEmail(),
                user.getPassword(),
                mapToGrantedAuthorities(user.getProfile()));
    }
    // CONVERTE PARA O FORMATO UTILIZADO PELO SPRING SECURITY
    private static List<GrantedAuthority> mapToGrantedAuthorities(ProfileEnum profileEnum) {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority(profileEnum.toString()));
        return authorities;
    }
}
