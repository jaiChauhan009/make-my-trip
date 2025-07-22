package com.example.trip.dto;


public class AuthResponse {
    private String token;

    public AuthResponse(String token) {
        this.token = token;
    }

    // Getter
    public String getToken() {
        return token;
    }

    // Optional: Setter (if needed)
    public void setToken(String token) {
        this.token = token;
    }
}


