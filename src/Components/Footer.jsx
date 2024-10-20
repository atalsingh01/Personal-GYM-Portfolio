import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    query: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Facebook</Link>
              <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</Link>
              <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">Instagram</Link>
              <Link to="https://www.yt.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">youtube</Link>
           
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Have a Question?</h2>
            <form className="mt-2" onsubmit={handleSubmit}>
              <input type="text" onChange={handleChange} placeholder="Your Name" className="w-full p-2 mb-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              <input type="email" onChange={handleChange} placeholder="Your Email" className="w-full p-2 mb-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              <textarea  placeholder="Your Query" className="w-full p-2 mb-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
              <button type="submit" className="w-full p-2 bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;