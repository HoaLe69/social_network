package com.example.social_be.controller;

import com.example.social_be.model.collection.UserCollection;
import com.example.social_be.model.request.AuthLoginRequest;
import com.example.social_be.model.request.AuthSignUpRequest;
import com.example.social_be.model.response.JwtResponse;
import com.example.social_be.model.response.MessageResponse;
import com.example.social_be.model.response.UserResponse;
import com.example.social_be.repository.UserRepository;
import com.example.social_be.util.JwtTokenUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(value = "/api/auth")
public class AuthController {
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthLoginRequest authLoginRequest, HttpServletResponse response) {
        UserCollection userCheck = userRepository.findUserCollectionByUserName(authLoginRequest.getUserName());
        if (userCheck == null)
            return ResponseEntity.badRequest().body(new MessageResponse("Username không tồn tại!!!"));
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                authLoginRequest.getUserName(), authLoginRequest.getPassword()
        ));
        if (authentication.isAuthenticated()) {
            String accessToken = jwtTokenUtil.generateJwtAccessToken(authLoginRequest.getUserName());
            String refreshToken = jwtTokenUtil.generateJwtRefreshToken(authLoginRequest.getUserName());
            Cookie cookie = new Cookie("refreshToken", refreshToken);
            response.addCookie(cookie);
            UserResponse currentUserLogin = new UserResponse(userCheck, accessToken);
            return ResponseEntity.ok(currentUserLogin);
        }
        return ResponseEntity.badRequest().body(new MessageResponse("fails to authenticated"));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthSignUpRequest authSignUpRequest) {
        UserCollection user = userRepository.findUserCollectionByUserName(authSignUpRequest.getUserName());
        if (user == null) {
            String pass = encoder.encode(authSignUpRequest.getPassword());
            authSignUpRequest.setPassword(pass);
            UserCollection userCollection = new UserCollection(authSignUpRequest);

            userRepository.save(userCollection);
            return ResponseEntity.ok(new MessageResponse("Register successfully"));
        }
        return ResponseEntity.badRequest().body(new MessageResponse("Username is exiting"));
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(@CookieValue("refreshToken") String token, HttpServletResponse response) {
//        return ResponseEntity.badRequest().body(new MessageResponse(token));
        if (StringUtils.hasText(token)) {
            String userName = jwtTokenUtil.getUserNameFromRefreshToken(token);
            UserCollection userCollection = userRepository.findUserCollectionByUserName(userName);
            if (userCollection != null && jwtTokenUtil.validateJwtRefreshToken(token, userName)) {
                String accessToken = jwtTokenUtil.generateJwtAccessToken(userName);
                String refreshToken = jwtTokenUtil.generateJwtRefreshToken(userName);
                Cookie cookie = new Cookie("refreshToken", refreshToken);
                response.addCookie(cookie);
                return ResponseEntity.ok(new JwtResponse(accessToken, refreshToken));
            }
            return ResponseEntity.badRequest().body(new MessageResponse("You are not authenticated"));
        }
        return ResponseEntity.badRequest().body(new MessageResponse("You are not Authenticated"));
    }
}
