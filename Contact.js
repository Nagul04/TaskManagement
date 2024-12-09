import React from 'react';
import './ContactPage.css'; // Import the CSS file for styling

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us using the contact information below:</p>
      <h2>Email</h2>
      <p><a href="mailto:pragadeeshwar246@example.com">pragadeeshwar246@gmail.com</a></p>
      <p><a href="mailto:naguljayakumar04@gmail.com">naguljayakumar04@gmail.com</a></p>
      <p><a href="mailto:Mithileshkumaresan@outlook.com">Mithileshkumaresan@outlook.com</a></p>
      <h2>Phone</h2>
      <p><a href="tel:+919080981551">+91 9080981551</a></p>
      <h2>Address</h2>
      <p>Kovaipudur,Coimbatore.</p>
    </div>
  );
}

export default Contact;