package com.example.social_be;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class SocialBeApplication {

  public static void main(String[] args) {
    SpringApplication.run(SocialBeApplication.class, args);
  }

}
