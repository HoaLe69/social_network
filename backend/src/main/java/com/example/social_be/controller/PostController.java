package com.example.social_be.controller;

import com.example.social_be.model.collection.PostCollection;
import com.example.social_be.model.response.MessageResponse;
import com.example.social_be.repository.PostRepository;
import com.example.social_be.service.CloudinaryServiceImpl;
import com.example.social_be.util.Utilties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.awt.print.PageFormat;
import java.awt.print.Pageable;
import java.awt.print.Printable;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping(value = "/api/post")
public class PostController {
    @Autowired
    private CloudinaryServiceImpl cloudinary;
    @Autowired
    private PostRepository postRepository;

    //create post
    @PostMapping(value = "/upload",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> upload(@RequestPart(value = "thumbnail", required = false) MultipartFile multipartFile, @RequestPart("formData") PostCollection postRequest) throws IOException {
        if (multipartFile == null) {
            PostCollection _post = new PostCollection();
            _post.setUserId(postRequest.getUserId());
            _post.setDisplayName(postRequest.getDisplayName());
            _post.setPhotoUrl(postRequest.getPhotoUrl());
            _post.setLike(new ArrayList<>());
            _post.setDescription(postRequest.getDescription());
            _post.setComments(0);
            postRepository.save(_post);
            return ResponseEntity.ok(new MessageResponse("create successfully!!"));
        } else {
            Map<String, String> thumbnail = cloudinary.uploadFile(multipartFile);
            PostCollection _post = new PostCollection(postRequest.getUserId(), postRequest.getPhotoUrl(), postRequest.getDisplayName(), thumbnail.get("url"), thumbnail.get("public_id"), postRequest.getDescription());
            postRepository.save(_post);
            return ResponseEntity.ok(_post);
        }
    }

    //get all post
    @GetMapping("/all-post")
    public ResponseEntity<?> getAllPost() {
        return ResponseEntity.ok(postRepository.findAll());
    }

    //get all post of user
    @GetMapping("/all-post-user/{id}")
    public ResponseEntity<?> getAllPostUser(@PathVariable String id) {
        return ResponseEntity.ok(postRepository.findAllByUserId(id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPostById(@PathVariable String id) {
        return ResponseEntity.ok(postRepository.findPostCollectionById(id));
    }

    //delete post
    @DeleteMapping("/delete/{id}/{cloudId}")
    public ResponseEntity<?> deletePost(@PathVariable String id, @PathVariable String cloudId) throws IOException {
        cloudinary.destroy(cloudId);
        postRepository.deleteById(id);
        return ResponseEntity.ok(new MessageResponse("Delete Successfully"));
    }

}