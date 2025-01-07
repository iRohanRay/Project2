import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('access_key', 'a11f925d-452d-4cd6-a44b-9bb8f960ea49');
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());
    if (res.success) {
      Swal.fire({
        title: 'Success!',
        text: 'Your response has been submitted.',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
    }
  };

  return (
    <section className="
    mt-8 max-w-lg mx-auto p-8 pt-24 pb-12 bg-white rounded-lg shadow-lg transform transition duration-700 ease-in-out animate__animated animate__fadeIn hover:shadow-xl hover:shadow-purple-500">
      <form onSubmit={onSubmit} className="space-y-8 animate__animated animate__fadeIn animate__delay-1s">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>

        <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1s">
          <label htmlFor="fullName" className="block text-lg text-gray-700">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter Your Name"
            required
            className="w-full p-4 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1.5s">
          <label htmlFor="email" className="block text-lg text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Your Email"
            required
            className="w-full p-4 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div className="space-y-4 animate__animated animate__fadeIn animate__delay-2s">
          <label htmlFor="message" className="block text-lg text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Your message"
            className="w-full p-4 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
