package com.example.social_be.repository;

import com.example.social_be.model.collection.MessageCollection;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MessageRepository extends MongoRepository<MessageCollection, String> {
}
