package com.example.social_be.model.response;

import com.example.social_be.model.collection.UserCollection;
import lombok.Data;

@Data
public class UserResponse extends UserCollection {
    public UserResponse(UserCollection user) {
        this.id = user.getId();
        this.userName = user.getUserName();
        this.email = user.getEmail();
        this.displayName = user.getDisplayName();
        this.avatar = user.getAvatar();
        this.about = user.getAbout();
        this.isOnline = user.isOnline();
        this.follower = user.getFollower();
        this.following = user.getFollowing();
        this.createAt = user.getCreateAt();
    }
}
