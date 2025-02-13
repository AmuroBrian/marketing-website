"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = 'service_hymqbti';
    const templateId = 'template_i7sn93g';
    const publicKey = '8nV8GppQ82RWajpEo';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Inspire',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(() => setSuccess(false))
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center mb-4">Contact Us</h2>
      {success !== null && (
        <p className={`text-center text-sm ${success ? 'text-green-500' : 'text-red-500'}`}>
          {success ? 'Email sent successfully!' : 'Error sending email. Try again later.'}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white focus:ring focus:ring-blue-300"
          required
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white focus:ring focus:ring-blue-300"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Email'}
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
