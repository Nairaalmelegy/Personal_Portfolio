import { useState } from 'react';
import emailjs from 'emailjs-com';
import { CONTACT } from '../constants/index.js';
import Alert from './Alert.jsx';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_myz0qwn', 'template_w0lopyd', formData, 'gKAbcEnpJNzPDG9xZ')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setAlert({ message: 'Message sent successfully!', type: 'success' });
      }, (error) => {
        console.log('FAILED...', error);
        setAlert({ message: 'Failed to send message. Please try again later.', type: 'error' });
      });

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <main id='contact-section'>
      <h1 className='font-playwrite text-gray-100 text-center text-2xl pt-5'>Get in touch with me</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center p-8 gap-10 text-cyan-300">
        <div className="flex flex-col items-start mb-8 lg:mb-0 lg:mr-8">
          <h2 className="text-2xl text-cyan-300 font-bold mb-4">Contact Information</h2>
          <p className="mb-2 ml-2 text-gray-100"><strong>Address:</strong> {CONTACT.address}</p>
          <p className="mb-2 ml-2 text-gray-100"><strong>Email:</strong> {CONTACT.email}</p>
          <p className="mb-2 ml-2 text-gray-100"><strong>Phone:</strong> {CONTACT.phoneNo}</p>
        </div>
        <div className="text-2xl font-bold mb-8 lg:mb-0 lg:mx-8 text-gray-100">OR</div>
        <form onSubmit={handleSubmit} className="flex flex-col items-start w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <label className="mb-2 w-full text-gray-100">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-300 text-gray-900"
              placeholder='Enter your name'
              required
            />
          </label>
          <label className="mb-2 w-full text-gray-100">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-300 text-gray-900"
              placeholder='Enter your email'
              required
            />
          </label>
          <label className="mb-4 w-full text-gray-100">
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-300 text-gray-900"
              placeholder='Enter your message'
              rows="4"
              required
            />
          </label>
          <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-800 transition">
            Submit
          </button>
        </form>
      </div>
      {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
    </main>
  );
};