import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">About WonderScan</h3>
            <p className="text-lg text-gray-400">
              WonderScan is a free platform for Home students and children to explore
              3D images of various educational subjects. No signup or login required. Just scan the QR code
              and dive into the world of 3D learning.
            </p>
          </div>

          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-lg text-gray-300 hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-lg text-gray-300 hover:text-primary">Contact</a></li>
              <li><a href="#" className="text-lg text-gray-300 hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@wonderscan.com" className="text-lg text-gray-300 hover:text-primary">
                  <i className="fas fa-envelope mr-2"></i> info@wonderscan.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-lg text-gray-300 hover:text-primary">
                  <i className="fas fa-phone mr-2"></i> +1 234 567 890
                </a>
              </li>
              <li className="flex space-x-6">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300">&copy; 2023 WonderScan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
