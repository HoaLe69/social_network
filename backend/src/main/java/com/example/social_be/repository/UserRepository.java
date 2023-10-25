package com.example.social_be.repository;

import com.example.social_be.model.collection.UserCollection;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserCollection , String> {
    UserCollection findUserCollectionByUserName(String userName);
}
