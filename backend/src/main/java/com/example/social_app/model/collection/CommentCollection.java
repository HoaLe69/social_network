package com.example.social_app.model.collection;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.joda.time.DateTime;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "comments")
public class CommentCollection {
    private String id;
    private String postId;
    private String userId;
    private String displayName;
    private String avatar;
    private String content;
    @CreatedDate
    private DateTime createOn;
}
