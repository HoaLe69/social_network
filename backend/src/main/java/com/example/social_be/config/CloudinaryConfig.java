package com.example.social_be.config;

import com.cloudinary.Cloudinary;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class CloudinaryConfig {
    private final String CLOUD_NAME = "diu2t7xwt";
    private final String API_KEY = "238761215516355";
    private final String SECRET_KEY = "gcrMeCevplqkXzibw5Oh5Hlls9o";

    @Bean
    public Cloudinary cloudinary() {
        Map<String, String> config = new HashMap<>();
        config.put("cloud_name", CLOUD_NAME);
        config.put("api_key", API_KEY);
        config.put("api_secret", SECRET_KEY);
        return new Cloudinary(config);
    }
}
