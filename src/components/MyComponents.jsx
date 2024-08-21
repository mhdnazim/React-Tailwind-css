import React from 'react';
import ServiceSection from './ServiceSection';

const MyComponent = () => {
  return (
    <div>
      <header
        className="bg-gray-800 text-white h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://ecloudsoftware.in/blog/wp-content/uploads/2022/08/website-development-process-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Website</h1>
          <p className="mt-4 text-lg">Your success is our mission.</p>
          <button className="mt-8 px-6 py-3 bg-blue-500 rounded-full text-white hover:bg-blue-700 transition-colors">Get Started</button>
        </div>
      </header>
      <ServiceSection />
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2024 Muhammed Nasim. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MyComponent;
