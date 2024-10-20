// src/components/SubmissionSection.js
import React, { useState } from 'react';
import axios from 'axios';

function SubmissionSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    file: null,
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      setMessage('Please upload a file.');
      return;
    }

    const uploadData = new FormData();
    uploadData.append('name', formData.name);
    uploadData.append('email', formData.email);
    uploadData.append('file', formData.file);

    try {
      const response = await axios.post(
        '/upload',
        uploadData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setMessage('Submission successful!');
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Submission failed. Please try again.');
    }
  };

  const testServer = async () => {
    try {
      const response = await axios.get('http://localhost:5001/test');
      console.log(response.data.message);
    } catch (error) {
      console.error('Error testing server:', error);
    }
  };

  return (
    <section id="submission" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-8">Submit Your Demo</h2>
        <p className="mb-8 text-center">
          Please submit the following:
          <ul className="list-disc list-inside">
            <li>A song file</li>
            <li>A contract</li>
            <li>An image</li>
          </ul>
        </p>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          {message && <p className="mb-4 text-center text-red-500">{message}</p>}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border px-3 py-2 rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border px-3 py-2 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Upload Zip File</label>
            <input
              type="file"
              name="file"
              accept=".zip"
              className="w-full"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <button onClick={testServer} className="mt-4 w-full bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
          Test Server
        </button>
      </div>
    </section>
  );
}

export default SubmissionSection;