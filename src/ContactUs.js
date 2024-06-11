import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    contactNumber: ''
  });

  const [formErrors, setFormErrors] = useState({
    emailError: '',
    passwordError: '',
    contactNumberError: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error message for the field being updated
    setFormErrors({ ...formErrors, [`${name}Error`]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic
    let isValid = true;
    const errors = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.emailError = 'Please enter a valid email address';
      isValid = false;
    }

    if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/.test(formData.password)) {
      errors.passwordError = 'Password must be at least 6 characters with 1 special character and 1 number';
      isValid = false;
    }

    if (formData.contactNumber.length !== 10 || isNaN(formData.contactNumber)) {
      errors.contactNumberError = 'Contact number must be 10 digits long';
      isValid = false;
    }

    if (isValid) {
      // Set the submitted data to display it
      setSubmittedData(formData);
      alert('Form submitted successfully!');
    } else {
      setFormErrors(errors);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      address: '',
      contactNumber: ''
    });
    setFormErrors({
      emailError: '',
      passwordError: '',
      contactNumberError: ''
    });
    setSubmittedData(null);
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <p className="error-message">{formErrors.emailError}</p>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            <p className="error-message">{formErrors.passwordError}</p>
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
            <p className="error-message">{formErrors.contactNumberError}</p>
          </div>
          <div className="form-group buttons">
           
            <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Contact Number:</strong> {submittedData.contactNumber}</p>
        </div>
      )}
      <div className="contact-us-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> info@company.com</p>
        <p><strong>Phone:</strong> +1234567890</p>
        <p><strong>Timings:</strong> Mon-Fri, 9:00 AM - 5:00 PM</p>
        <a href="https://www.company.com" target="_blank" rel="noopener noreferrer">Visit our website</a>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.935594139104!2d-122.41941548468225!3d37.77492927975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c9d50f7e7%3A0x4aa532bd9ab44a74!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1625257596108!5m2!1sen!2sus"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            title="Company Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
