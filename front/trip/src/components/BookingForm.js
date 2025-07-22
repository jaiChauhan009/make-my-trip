import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    numberOfPersons: '',
    personIds: '',
    destination: '',
    location: '',
    expenditure: '',
  });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const submit = e => {
    e.preventDefault();
    // Convert personIds string "1,2,3" to array of numbers
    const bookingData = {
      ...formData,
      numberOfPersons: parseInt(formData.numberOfPersons, 10),
      personIds: formData.personIds.split(',').map(id => Number(id.trim())),
      expenditure: parseFloat(formData.expenditure),
    };
    onSubmit(bookingData);
  };

  return (
    <div className="form-container">
      <h2>Make a Booking</h2>
      <form onSubmit={submit}>
        <input
          type="number"
          name="numberOfPersons"
          placeholder="Number of Persons"
          value={formData.numberOfPersons}
          onChange={handleChange}
          min={1}
          required
        />
        <input
          type="text"
          name="personIds"
          placeholder="Person IDs (comma separated)"
          value={formData.personIds}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="expenditure"
          placeholder="Expenditure"
          value={formData.expenditure}
          onChange={handleChange}
          min={0}
          step="0.01"
          required
        />
        <button type="submit">Book Trip</button>
      </form>
    </div>
  );
};

export default BookingForm;
