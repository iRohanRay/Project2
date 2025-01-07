import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/*hero section  */}
      <header className="relative bg-white parallax">
        <div className="parallax__layer parallax__layer--back">
          
          <img src="/1.png" alt="Background" className="w-full h-96 object-cover" />
        </div>
        <div className="parallax__layer parallax__layer--base">
          <div className="container mx-auto px-6 py-12 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Explore the World in 3D with WonderScan!
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Scan free cards and watch amazing 3D models come to life right from your device.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-block bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Section 1 */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            
            <img src="/2.png" alt="Transform Learning" className="w-full h-72 object-cover rounded-lg shadow-lg hover:shadow-[0_4px_20px_#d1b3ff] hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 bg-yellow-100 p-4 rounded-lg">
              Transform Learning with WonderScan
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Scan, Explore, and Learn: Let curiosity guide the way.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-block bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
            >
              See it in Action
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2*/}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          <div className="w-full md:w-1/2">
            
            <img src="/3.png" alt="Bring Learning to Life" className="w-full h-72 object-cover rounded-lg shadow-lg hover:shadow-[0_4px_20px_#d1b3ff] hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 bg-blue-100 p-4 rounded-lg">
              Bring Learning to Life with WonderScan
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Scan cards to unlock immersive 3D experiences and foster learning.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-block bg-red-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3*/}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
           
            <img src="/4.png" alt="Imagination Soar" className="w-full h-72 object-cover rounded-lg shadow-lg hover:shadow-[0_4px_20px_#d1b3ff] hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 bg-green-100 p-4 rounded-lg">
              Let Your Imagination Soar with WonderScan
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Engage with interactive 3D models to discover the world around you.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-block bg-yellow-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
            >
              Start Scanning
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4*/}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          <div className="w-full md:w-1/2">
           
            <img src="/5.png" alt="Scan Discover Learn" className="w-full h-72 object-cover rounded-lg shadow-lg hover:shadow-[0_4px_20px_#d1b3ff] hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 bg-purple-100 p-4 rounded-lg">
              Scan. Discover. Learn.
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Interactive 3D learning experiences for curious minds.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-block bg-purple-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5*/}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            
            <img src="/6.png" alt="Unlock 3D Possibilities" className="w-full h-72 object-cover rounded-lg shadow-lg hover:shadow-[0_4px_20px_#d1b3ff] hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 bg-teal-100 p-4 rounded-lg">
              Unlock a World of 3D Possibilities with WonderScan
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Scan a card, and watch it come to life with 3D models.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-block bg-teal-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6*/}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          <div className="w-full md:w-1/2">
          
            <img src="/7.png" alt="Inspire Curiosity" className="w-full h-72 object-cover rounded-lg shadow-lg hover:shadow-[0_4px_20px_#d1b3ff] hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 bg-pink-100 p-4 rounded-lg">
              Inspire Curiosity and Creativity with WonderScan
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Bring educational content to life in an immersive 3D experience.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-block bg-pink-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-600 transition duration-300"
            >
              Start Exploring
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
