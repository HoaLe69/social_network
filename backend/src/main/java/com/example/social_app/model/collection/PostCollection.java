package com.example.social_app.model.collection;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.joda.time.DateTime;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "posts")
public class PostCollection {
    private String id;
    private String userId;
    private String displayName;
    private String avatar;
    private List<String> images;
    private String description;
    private List<String> likes;
    private List<String> dislike;
    @CreatedDate
    private DateTime createOn;
}
