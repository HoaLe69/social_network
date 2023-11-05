package com.example.social_be.model.collection;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "messages")
@Data
@AllArgsConstructor
public class MessageCollection {
    private String from;
    private String text;
}
