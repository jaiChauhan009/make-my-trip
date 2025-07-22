package com.example.trip.dto;


public class AuthRequest {
    private String username;
    private String password;

    // Default constructor (needed for Spring to bind JSON)
    public AuthRequest() {
    }

    // Optional: All-args constructor
    public AuthRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getters
    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    // Optional: Setters (if needed)
    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}


