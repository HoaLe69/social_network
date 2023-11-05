package com.example.social_be.model.collection;

import com.example.social_be.model.request.AuthSignUpRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document(collection = "users")
@Data
@Builder
@AllArgsConstructor
public class UserCollection {
    protected String id;
    protected String userName;
    private String password;
    protected String email;
    protected String displayName;
    protected String avatar;
    protected String about;
    protected boolean isOnline;
    protected List<String> follower;
    protected List<String> following;
    protected Date createAt;

    public UserCollection() {
        this.displayName = null;
        this.avatar = null;
        this.about = null;
        this.follower = new ArrayList<>();
        this.following = new ArrayList<>();
    }

    public UserCollection(AuthSignUpRequest authSignUpRequest) {
        this.userName = authSignUpRequest.getUserName();
        this.email = authSignUpRequest.getEmail();
        this.password = authSignUpRequest.getPassword();
        this.displayName = authSignUpRequest.getUserName();
        this.avatar = null;
        this.about = null;
        this.follower = new ArrayList<>();
        this.following = new ArrayList<>();
        this.createAt = new Date();
    }
}
