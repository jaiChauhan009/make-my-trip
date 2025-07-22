package com.example.trip.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Number of persons for this booking
    private int numberOfPersons;

    // Stores all person IDs associated with this booking
    @ElementCollection
    private List<Long> personIds;

    private String destination;
    private String location;
    private double expenditure;

    // Foreign key: booking made by this user
    private Long userId;

    // Getters and setters...
}

