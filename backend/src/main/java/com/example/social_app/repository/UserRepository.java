package com.example.social_app.repository;

import com.example.social_app.model.UserModel;
import com.example.social_app.model.collection.UserCollection;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories
public interface UserRepository  extends MongoRepository<UserCollection, String> {
     UserCollection findUserModelByUserName (String username);
}
