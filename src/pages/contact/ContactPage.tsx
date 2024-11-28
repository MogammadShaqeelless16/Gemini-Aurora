import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = { name: '', email: '', message: '' };
    let isValid = true;

    // Name Validation
    if (!formData.name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      errors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Message Validation
    if (!formData.message) {
      errors.message = 'Message cannot be empty';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would normally handle the form submission (e.g., make an API request)
      console.log('Form Data Submitted:', formData);

      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Clear the form fields
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      {formSubmitted && <p className="success-message">Thank you for your message! We'll get back to you soon.</p>}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {formErrors.name && <p className="error-message">{formErrors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {formErrors.email && <p className="error-message">{formErrors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
          {formErrors.message && <p className="error-message">{formErrors.message}</p>}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
