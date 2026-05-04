package com.example.social_be.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.example.social_be.interfaces.FileUpload;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CloudinaryServiceImpl implements FileUpload {
  @Autowired
  private Cloudinary cloudinary;

  @Override
  public Map uploadFile(MultipartFile multipartFile) throws IOException {
    String publicId = UUID.randomUUID().toString();
    // Determine the resource type based on the file's content type
    String contentType = multipartFile.getContentType();
    String resourceType;

    if (contentType != null && contentType.startsWith("video")) {
      resourceType = "video";
    } else if (contentType != null && contentType.startsWith("image")) {
      resourceType = "image";
    } else {
      throw new IllegalArgumentException("Unsupported file type: " + contentType);
    }

    Map uploadResult = cloudinary.uploader().upload(multipartFile.getBytes(),
        ObjectUtils.asMap("public_id", publicId, "resource_type", resourceType));
    // return cloudinary.uploader().upload(multipartFile.getBytes(),
    // Map.of("public_id", UUID.randomUUID().toString()));
    return uploadResult;
  }

  public String destroy(String publicId, String resourceType) throws IOException {
    // Validate resource type
    if (!"image".equals(resourceType) && !"video".equals(resourceType)) {
      throw new IllegalArgumentException("Resource type must be 'image'or 'video");
    }

    // Destroy the resource with the specified resource_type
    Map result = cloudinary.uploader().destroy(publicId, ObjectUtils.asMap("resource_type", resourceType));

    return result.toString();
  }
}
