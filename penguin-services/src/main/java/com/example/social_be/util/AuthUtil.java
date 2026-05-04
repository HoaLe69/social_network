package com.example.social_be.util;

import jakarta.servlet.http.Cookie;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;

public class AuthUtil {
  public void attachTokenInCookieResponse(HttpServletResponse response, String accessToken, String refreshToken) {
    // accessToken
    Cookie accessTokenCookie = new Cookie("token", accessToken);
    accessTokenCookie.setHttpOnly(true); // Prevent JavaScript access to the cookie
    // accessTokenCookie.setSecure(true); // Only send the cookie over HTTPS
    accessTokenCookie.setMaxAge(60 * 60 * 24 * 7); // 7 days
    accessTokenCookie.setPath("/"); // Cookie is available for all paths

    // refresh token
    Cookie refreshTokenCookie = new Cookie("refreshToken", refreshToken);
    refreshTokenCookie.setHttpOnly(true); // Prevent JavaScript access to the cookie
    // refreshTokenCookie.setSecure(true); // Only send the cookie over HTTPS
    refreshTokenCookie.setMaxAge(60 * 60 * 24 * 7); // 7 days
    refreshTokenCookie.setPath("/"); // Cookie is available for all paths

    ResponseCookie accessTokenResponseCookie = ResponseCookie
        .from(accessTokenCookie.getName(), accessTokenCookie.getValue())
        .sameSite("None")
        .httpOnly(true)
        .secure(true)
        .path(accessTokenCookie.getPath())
        .maxAge(accessTokenCookie.getMaxAge())
        .build();

    ResponseCookie refreshTokenResponseCookie = ResponseCookie
        .from(refreshTokenCookie.getName(), refreshTokenCookie.getValue())
        .sameSite("None")
        .httpOnly(true)
        .secure(true)
        .path(refreshTokenCookie.getPath())
        .maxAge(refreshTokenCookie.getMaxAge())
        .build();

    response.addHeader(HttpHeaders.SET_COOKIE, accessTokenResponseCookie.toString());
    response.addHeader(HttpHeaders.SET_COOKIE, refreshTokenResponseCookie.toString());

    // Add cookies to the response
    // response.addCookie(accessTokenCookie);
    // response.addCookie(refreshTokenCookie);
  }
}
