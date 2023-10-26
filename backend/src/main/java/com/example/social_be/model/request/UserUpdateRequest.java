package com.example.social_be.model.request;

import lombok.Data;

@Data
public class UserUpdateRequest {
    private String password;
    private String displayName;
    private String avatar;
    private String about;
}
