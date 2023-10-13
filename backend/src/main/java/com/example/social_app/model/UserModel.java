package com.example.social_app.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
@Data
@NoArgsConstructor
@Getter
@Setter
public class UserModel {
    private String id;
    private String userName;
    private String address;
    private String password;  
}
