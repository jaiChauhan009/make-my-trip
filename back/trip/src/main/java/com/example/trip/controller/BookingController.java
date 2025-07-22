package com.example.trip.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.trip.model.Booking;
import com.example.trip.service.BookingService;

@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired private BookingService bookingService;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        // Save booking details as per your business logic
        return bookingService.saveBooking(booking);
    }

    @GetMapping("/{id}")
    public Booking getBooking(@PathVariable Long id) {
        return bookingService.findBookingById(id);
    }
}

