package com.example.social_app.controller;
import com.example.social_app.model.AuthRequestLogin;
import com.example.social_app.model.JwtResponseModel;
import com.example.social_app.model.UserModel;
import com.example.social_app.model.collection.UserCollection;
import com.example.social_app.repository.UserRepository;
import com.example.social_app.util.JwtTokenUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthenticationManager authenticationManager;
    @PostMapping("/login")
    public JwtResponseModel login(@RequestBody AuthRequestLogin authRequestLogin) throws Exception {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequestLogin.getUserName() , authRequestLogin.getPassword()));
        if (authentication.isAuthenticated()){
            final String accessToken = jwtTokenUtil.generateJwtToken(authRequestLogin.getUserName());
            final String refreshToken = jwtTokenUtil.generateRefreshJwtToken(authRequestLogin.getUserName());
            return new JwtResponseModel(accessToken , refreshToken);
        }
        else {
            throw new UsernameNotFoundException("User name not found");
        }
    }
    @PostMapping("/register")
    public UserCollection resgister(@RequestBody UserCollection userCollection){
        UserCollection userCollectionCheck = userRepository.findUserModelByUserName(userCollection.getUserName());
        if (userCollectionCheck != null) {
        }
        String pass = encoder.encode(userCollection.getPassword());
        userCollection.setPassword(pass);
        userRepository.save(userCollection);
        return userCollection;
    }
    @PostMapping("/refreshToken")
    public String refreshToken(HttpServletRequest request){
        String token = request.getHeader("Authorization");
       return token;
    }

}
