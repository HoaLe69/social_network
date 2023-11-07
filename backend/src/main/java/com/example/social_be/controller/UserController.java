package com.example.social_be.controller;

import com.example.social_be.model.collection.PostCollection;
import com.example.social_be.model.collection.UserCollection;
import com.example.social_be.model.request.FollowingRequest;
import com.example.social_be.model.request.UserUpdateRequest;
import com.example.social_be.model.response.MessageResponse;
import com.example.social_be.model.response.UserResponse;
import com.example.social_be.repository.PostRepository;
import com.example.social_be.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping(value = "/api/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    // get user by id
    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private PostRepository postRepository;


    @GetMapping("/search")
    public ResponseEntity<?> searchUser(@RequestParam String name) {
        return ResponseEntity.ok(userRepository.findByLikeUserName(name).stream().limit(3));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable String id) {
        try {
            UserCollection userCollection = userRepository.findUserCollectionById(id);
            return ResponseEntity.ok(new UserResponse(userCollection));
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/getUserFollow")
    public ResponseEntity<?> getUserFollowing(@RequestBody FollowingRequest following) {
        if (following.getFollow() != null) {
            List<UserCollection> userFollowing = new ArrayList<>();
            for (int i = 0; i < following.getFollow().size(); i++) {
                userFollowing.add(userRepository.findUserCollectionById((String) following.getFollow().get(i)));
            }
            return ResponseEntity.ok(userFollowing);
        }
        return ResponseEntity.badRequest().body(following);
    }

    // update user by id
    @PatchMapping("/update/{id}")
    public ResponseEntity<?> updateUser(@RequestBody UserUpdateRequest update, @PathVariable String id) {
        try {
            UserCollection user = userRepository.findUserCollectionById(id);
            List<PostCollection> posts = postRepository.findAllByUserId(id);
            if (user != null) {
                if (!posts.isEmpty()) {
                    for (PostCollection post : posts) {
                        post.setDisplayName(update.getDisplayName() != null ? update.getDisplayName() : user.getDisplayName());
                        post.setPhotoUrl(update.getAvatar() != null ? update.getAvatar() : user.getAvatar());
                        postRepository.save(post);
                    }
                }
                String pass = null;
                if (update.getPassword() != null) {
                    pass = encoder.encode(update.getPassword());
                }
                user.setDisplayName(update.getDisplayName() != null ? update.getDisplayName() : user.getDisplayName());
                user.setAbout(update.getAbout() != null ? update.getAbout() : user.getAbout());
                user.setAvatar(update.getAvatar() != null ? update.getAvatar() : user.getAvatar());
                user.setPassword(pass != null ? pass : user.getPassword());
                userRepository.save(user);
                return ResponseEntity.ok(new MessageResponse("Update successfully"));
            } else {
                return ResponseEntity.badRequest().body(new MessageResponse("Something wrong"));
            }
        } catch (Exception ex) {
            return ResponseEntity.badRequest().body(new MessageResponse("Something wrong"));
        }
    }

    //delete user by id
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable String id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok(new MessageResponse("Delete Successfully !!"));
    }

    //follow and unfollow
    @PatchMapping("/interactive/{id}")
    public ResponseEntity<?> interactiveUser(@RequestBody UserCollection userId, @PathVariable String id) {
        String currentId = userId.getId();
        if (!currentId.equals(id)) {
            UserCollection currentUser = userRepository.findUserCollectionById(currentId);
            UserCollection userFollow = userRepository.findUserCollectionById(id);

            List<String> listFollowing = currentUser.getFollowing();
            List<String> listFollower = userFollow.getFollower();
            try {
                if (!listFollowing.contains(id)) {
                    listFollowing.add(id);
                    currentUser.setFollowing(listFollowing);
                    userRepository.save(currentUser);
                    listFollower.add(currentId);
                    userFollow.setFollower(listFollower);
                    userRepository.save(userFollow);
                    return ResponseEntity.ok(currentUser);
                } else {
                    listFollowing.remove(id);
                    currentUser.setFollowing(listFollowing);
                    userRepository.save(currentUser);
                    listFollower.remove(currentId);
                    userFollow.setFollower(listFollower);
                    userRepository.save(userFollow);
                    return ResponseEntity.ok(userFollow);
                }
            } catch (Exception ex) {
                throw new RuntimeException("fail to perform follow!!", ex);
            }
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse("You can't not follow yourself!!!"));
        }
    }
}
