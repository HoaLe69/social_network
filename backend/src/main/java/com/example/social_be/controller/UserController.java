package com.example.social_be.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {
    @GetMapping("/greet")
    public String greetNewUser(){
        return "Hello new User,WelCome to our Community asdasldlasjd";
    }
}
