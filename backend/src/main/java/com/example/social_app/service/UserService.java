package com.example.social_app.service;

import com.example.social_app.model.CustomUserDetail;
import com.example.social_app.model.UserModel;
import com.example.social_app.model.collection.UserCollection;
import com.example.social_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserCollection userCollection = userRepository.findUserModelByUserName(username);
        if (userCollection == null) {
            throw new UsernameNotFoundException(username);
        }

        return new CustomUserDetail(userCollection);
    }
}
