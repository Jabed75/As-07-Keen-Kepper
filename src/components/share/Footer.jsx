import React from 'react';
// Image gulo import kora holo
import facebookImg from './assets/facebook.png';
import twitterImg from './assets/twitter.png'; // Apnar 'teiter.png' name-e thakle ekhane 'teiter.png' likhben
import instagramImg from './assets/instagram.png';

const Footer = () => {
  return (
    <footer className="bg-[#1F4D36] text-white p-10 font-sans flex flex-col items-center">
      {/* Upper Section */}
      <div className="flex flex-col items-center text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">KeenKeeper</h1>
        <p className="text-gray-300 text-sm mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="flex flex-col items-center mb-10">
          <h6 className="text-lg font-medium mb-4">Social Links</h6>
          <div className="flex gap-4">
            
            {/* Instagram */}
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm">
              <img src={instagramImg} alt="Instagram" className="w-5 h-5 object-contain" />
            </a>
            
            {/* Facebook */}
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm">
              <img src={facebookImg} alt="Facebook" className="w-5 h-5 object-contain" />
            </a>

            {/* Twitter */}
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm">
              <img src={twitterImg} alt="Twitter" className="w-5 h-5 object-contain" />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-6xl border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-400 gap-4">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;