package com.example.social_be.controller;

import com.example.social_be.model.collection.MessageCollection;
import com.example.social_be.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/message")
public class MessageController {
  @Autowired
  private MessageRepository messageRepository;

  @GetMapping("/all/{id}")
  public ResponseEntity<?> getAllMess(@PathVariable String id) {
    // Pageable pageable = PageRequest.of(Integer.parseInt(page), 10,
    // Sort.by(Sort.Direction.DESC, "createAt"));
    // return ResponseEntity.ok(messageRepository.findAllByConversationId(id,
    // pageable));
    return ResponseEntity.ok(messageRepository.findAllByConversationId(id));

  }

  @PatchMapping("/recall/{id}")
  public ResponseEntity<?> recallMessage(@PathVariable String id) {
    MessageCollection mess = messageRepository.findMessageCollectionById(id);
    if (mess != null) {
      mess.setContent(null);
      messageRepository.save(mess);
      return ResponseEntity.ok("ok");
    }
    return ResponseEntity.badRequest().body("message not found");
  }
}
