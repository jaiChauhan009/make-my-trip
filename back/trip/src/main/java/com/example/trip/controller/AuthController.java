package com.example.trip.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.trip.service.UserService;
import com.example.trip.dto.AuthRequest;
import com.example.trip.dto.AuthResponse;
import com.example.trip.model.User;
import com.example.trip.security.JwtTokenProvider; 


@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired private UserService userService;
    @Autowired private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        userService.saveUser(user);
        return ResponseEntity.ok("User registered");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        User user = userService.authenticate(request.getUsername(), request.getPassword());
        String token = jwtTokenProvider.createToken(user.getUsername());
        return ResponseEntity.ok(new AuthResponse(token));
    }
}

