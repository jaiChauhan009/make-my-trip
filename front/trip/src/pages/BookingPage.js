import React, { useState, useEffect } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import { getBookings, createBooking } from '../api/api';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchBookings = async () => {
    try {
      const response = await getBookings();
      setBookings(response.data);
    } catch (e) {
      if (e.response?.status === 401) {
        navigate('/login');
      } else {
        setError('Failed to load bookings');
      }
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCreateBooking = async (bookingData) => {
    try {
      await createBooking(bookingData);
      fetchBookings();
    } catch (e) {
      setError('Failed to add booking');
    }
  };

  return (
    <div>
      <h1 style={{textAlign:"center", marginTop:"2rem"}}>Trip Bookings</h1>
      {error && <p className="error-message">{error}</p>}
      <BookingForm onSubmit={handleCreateBooking} />
      <BookingList bookings={bookings} />
    </div>
  );
};

export default BookingPage;
