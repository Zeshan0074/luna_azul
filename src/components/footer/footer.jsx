import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    // <footer className="py-8 bg-gray-800 text-white/90">
      <div className="container px-2 md:px-6 py-4 mx-auto bg-gray-100 mt-12">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold py-2 text-[#0dd67f]">LUNA AZUL</h2>
            <p className="mt-2">Discover unparalleled luxury and comfort with our meticulously designed spaces</p>
          </div>
          <div className="flex space-x-6 py-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between mt-2 border-t py-2 border-gray-700 md:flex-row">
          <p className="text-gray-400">&copy; 2024 LUNA AZUL. All rights reserved.</p>
          <div className="flex flex-col md:flex-row mt-5 gap-5">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
          </div>
        </div>
      </div>    
    // </footer>
  );
}

export default Footer;
