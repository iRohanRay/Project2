import React from 'react';

function About() {
 return (
   <div className="max-w-screen-xl mx-auto p-8">
     <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
       Discover the World in 3D with WonderScan!
     </h1>
     <p className="text-lg text-gray-600 mb-12 text-center">
       WonderScan is an innovative platform designed to inspire curiosity and
       learning in children. By providing free, interactive cards with QR codes,
       we enable young minds to explore the world through immersive 3D models
       right from their phones or tablets.
     </p>
     
     <h2 className="text-3xl font-semibold text-gray-800 mb-8">How It Works:</h2>
     
     <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
       
       <div className="flex flex-col items-center hover:shadow-[0px_4px_15px_rgba(128,0,128,0.5)] hover:scale-105 transition-transform duration-300 ease-in-out">
         <div className="w-full h-64 bg-gray-200 mb-6 rounded-lg overflow-hidden">
           
           <video
             className="w-full h-full object-cover rounded-lg"
             controls
             muted
           >
             <source
               src="/v2.mp4"
               type="video/mp4"
             />
             Your browser does not support the video tag.
           </video>
         </div>
         <p className="text-xl font-medium text-gray-700">Step 1: Pick up a WonderScan Card</p>
       </div>
       
       
       <div className="flex flex-col items-center hover:shadow-[0px_4px_15px_rgba(128,0,128,0.5)] hover:scale-105 transition-transform duration-300 ease-in-out">
         <div className="w-full h-64 bg-gray-200 mb-6 rounded-lg overflow-hidden">
           
           <video
             className="w-full h-full object-cover rounded-lg"
             controls
             muted
           >
             <source
               src="/v3.mp4"
               type="video/mp4"
             />
             Your browser does not support the video tag.
           </video>
         </div>
         <p className="text-xl font-medium text-gray-700">Step 2: Scan the QR Code</p>
       </div>

       
       <div className="flex flex-col items-center hover:shadow-[0px_4px_15px_rgba(128,0,128,0.5)] hover:scale-105 transition-transform duration-300 ease-in-out">
         <div className="w-full h-64 bg-gray-200 mb-6 rounded-lg overflow-hidden">
           
           <video
             className="w-full h-full object-cover rounded-lg rotate-"
             controls
             muted
             loop
           >
             <source
               src="/video.mp4"
               type="video/mp4"
             />
             Your browser does not support the video tag.
           </video>
         </div>
         <p className="text-xl font-medium text-gray-700">Step 3: Explore in 3D</p>
       </div>
     </div>
     
     <h2 className="text-3xl font-semibold text-gray-800 mt-16 mb-8">Benefits for Children:</h2>
     <p className="text-lg text-gray-600 mb-12">
       WonderScan fosters creativity, imagination, and learning by giving children
       access to a world of interactive 3D models. Whether it's a wild animal, a
       famous landmark, or a space object, WonderScan allows children to see these
       objects come to life in 3D. This unique experience enhances their
       understanding and engagement with the world around them.
     </p>
     
     <h2 className="text-3xl font-semibold text-gray-800 mb-8">Get Started:</h2>
     <p className="text-lg text-gray-600 mb-12">
       Join us on this exciting journey! Download the WonderScan app today and
       start exploring the world in 3D.
     </p>

     <div className="mt-16">
       <h2 className="text-3xl font-semibold text-gray-800 mb-8">Why Choose WonderScan?</h2>
       <ul className="list-disc list-inside text-lg text-gray-600 mb-12">
         <li>Interactive Learning: Engage with 3D models that captivate children's attention.</li>
         <li>Accessibility: Free cards and easy-to-use app make learning fun and accessible.</li>
         <li>Safe Environment: Designed with children's safety and privacy in mind.</li>
       </ul>
     </div>

     <div className="mt-16">
       <h2 className="text-3xl font-semibold text-gray-800 mb-8">Testimonials:</h2>
       <blockquote className="border-l-4 border-gray-500 pl-6 italic text-lg text-gray-600 mb-8">
         "WonderScan has transformed the way my kids learn about the world. They love exploring new things!" - A Happy Parent
       </blockquote>
       <blockquote className="border-l-4 border-gray-500 pl-6 italic text-lg text-gray-600 mb-8">
         "The 3D models are amazing! My students are more engaged than ever." - A Teacher
       </blockquote>
     </div>

     <div className="mt-16">
       <h2 className="text-3xl font-semibold text-gray-800 mb-8">Stay Updated:</h2>
       <p className="text-lg text-gray-600 mb-6">Subscribe to our newsletter for the latest updates and features!</p>
       <form className="flex flex-col md:flex-row">
         <input
           type="email"
           placeholder="Enter your email"
           className="p-4 border border-gray-300 rounded-md mb-6 md:mb-0 md:mr-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
         <button className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 transition duration-300">
           Subscribe
         </button>
       </form>
     </div>
   </div>
 );
}

export default About;
