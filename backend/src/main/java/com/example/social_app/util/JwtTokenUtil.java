package com.example.social_app.util;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.io.Serializable;
import java.util.Date;

@Component
public class JwtTokenUtil implements Serializable {
    @Value("${social_app.secret}")
    private  String jwtSecretKey;
    @Value("${social_app.secretRefresh}")
    private  String jwtSecretKeyRefresh;
    @Value("${social_app.exprireTime}")
    private  long TOKEN_VALIDITY;
    @Value("${sociall_app.exprireTimeRefresh}")
    private  long TOKEN_VALIDITY_REFRESH;
    public String generateJwtToken(String name){
        return Jwts.builder().setSubject(name).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + TOKEN_VALIDITY * 1000)).signWith(SignatureAlgorithm.HS512 , jwtSecretKey)
                .compact();
    }
    public String generateRefreshJwtToken(String name){
        return Jwts.builder().setSubject(name).setExpiration(new Date(System.currentTimeMillis() + TOKEN_VALIDITY_REFRESH * 1000))
                .signWith(SignatureAlgorithm.HS512 , jwtSecretKeyRefresh).compact();
    }
    public boolean validateJwtToken(String token ,String userName) {
        String username = getUserNameFromToken(token);
        Claims claims = Jwts.parser().setSigningKey(jwtSecretKey).parseClaimsJws(token).getBody();
        boolean isTokenExpired = claims.getExpiration().before(new Date());
        return (username.equals(userName) && !isTokenExpired);
    }
    public String getUserNameFromToken(String token) {
        final Claims claims = Jwts.parser().setSigningKey(jwtSecretKey).parseClaimsJws(token).getBody();
        return claims.getSubject();
    }

}