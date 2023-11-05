package com.example.social_be.model.collection;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(value = "posts")
@Data
@AllArgsConstructor
@Builder
@Jacksonized
public class PostCollection {
    private String id;
    private String userId;
    private String cloudinaryId;
    private String photoUrl;
    private String displayName;
    private String thumbnail;
    private List<String> like;
    private String description;
    private long comments;
    private Date createAt;

    public PostCollection(String userId, String photoUrl, String displayName, String thumbnail, String cloudinaryId, List<String> like, String description, long comments) {
        this.userId = userId;
        this.photoUrl = photoUrl;
        this.displayName = displayName;
        this.thumbnail = thumbnail;
        this.cloudinaryId = cloudinaryId;
        this.like = like;
        this.description = description;
        this.comments = comments;
        this.createAt = new Date();
    }

    public PostCollection() {
        this.createAt = new Date();
    }
}
