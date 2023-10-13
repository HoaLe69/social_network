package com.example.social_app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
    @Autowired
    public JwtRequestFilter jwtRequestFilter;
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
       httpSecurity
               .cors(httpSecurityCorsConfigurer -> httpSecurityCorsConfigurer.disable())
               .csrf(AbstractHttpConfigurer::disable)
               .authorizeHttpRequests(
                       auth -> auth.requestMatchers("api/auth/**").permitAll()
                               .anyRequest().authenticated()
               )

               .exceptionHandling(
                       httpSecurityExceptionHandlingConfigurer -> httpSecurityExceptionHandlingConfigurer
                               .authenticationEntryPoint(jwtAuthenticationEntryPoint)
               )
               .sessionManagement(
                       httpSecuritySessionManagementConfigurer -> httpSecuritySessionManagementConfigurer
                               .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
               );
       httpSecurity.addFilterBefore(jwtRequestFilter , UsernamePasswordAuthenticationFilter.class);
       return  httpSecurity.build();
    }
}
