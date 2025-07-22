import React from 'react';

const BookingList = ({ bookings }) => {
  return (
    <div className="booking-list">
      <h2>All Bookings</h2>
      {bookings.length === 0 && <p>No bookings found.</p>}
      {bookings.map(booking => (
        <div key={booking.id} className="booking-item">
          <img src="https://via.placeholder.com/150x100.png?text=Booking" alt="Booking" />
          <div>
            <p><strong>Booking ID:</strong> {booking.id}</p>
            <p><strong>Number of Persons: </strong>{booking.numberOfPersons}</p>
            <p><strong>Person IDs:</strong> {booking.personIds.join(', ')}</p>
            <p><strong>Destination:</strong> {booking.destination}</p>
            <p><strong>Location:</strong> {booking.location}</p>
            <p><strong>Expenditure:</strong> ${booking.expenditure.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
