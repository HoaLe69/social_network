package com.example.social_app.model.collection;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.joda.time.DateTime;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.SimpleDateFormat;
import java.util.List;

@Document(collection = "users")
@Builder
@Data
@AllArgsConstructor
public class UserCollection {
    private String id;
    private String userName;
    private String displayName ;
    private String avatar;
    private String about;
    private List<String> follower;
    private List<String> following;
    private String password;
    private String email;
    public UserCollection(){
        this.displayName = "New user";
    }
}
