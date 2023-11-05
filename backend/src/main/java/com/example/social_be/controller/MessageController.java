package com.example.social_be.controller;

import com.example.social_be.model.collection.MessageCollection;
import com.example.social_be.model.response.MessageResponse;
import com.example.social_be.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000/")
public class MessageController {
    @Autowired
    private MessageRepository messageRepository;

    // Handles messages from /app/messages. (Note the Spring adds the /app prefix for us).
    @MessageMapping("/messages")
    // Sends the return value of this method to /topic/messages
    @SendTo("/topic/messages")
    public ResponseEntity<?> addMessage(MessageCollection mess) {
        return ResponseEntity.ok(mess);
    }
}
