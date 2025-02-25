import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen flex flex-col">
      <header className="p-6">
        <button className="text-gray-400 hover:text-white">
          <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.25" y="0.25" width="31.5" height="25.5" rx="12.75" stroke="#757575" strokeWidth="0.5"/>
            <path d="M13.2167 13.6667L16.95 17.4L16 18.3333L10.6667 13L16 7.66667L16.95 8.6L13.2167 12.3333H21.3333V13.6667H13.2167Z" fill="#757575"/>
          </svg>
        </button>
      </header>
      
      <main className="flex-grow container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Privacy Policy</h1>
        
        <div className="mb-8">
          <p className="text-gray-400 mb-6">
            We are committed to protecting your privacy. This privacy policy explains how we 
            collect, use, and disclose personal information.
          </p>
          
          <ol className="space-y-6">
            <li>
              <div className="flex gap-2">
                <span className="font-bold text-white">1.</span>
                <div>
                  <h2 className="font-bold text-white inline">Information We Collect.</h2>
                  <span className="text-gray-400"> We may collect personal information such as your name, 
                  email address, and IP address. We may also collect information about your use of 
                  our website, such as the pages you visit and the links you click.</span>
                </div>
              </div>
            </li>
            
            <li>
              <div className="flex gap-2">
                <span className="font-bold text-white">2.</span>
                <div>
                  <h2 className="font-bold text-white inline">Use of Information.</h2>
                  <span className="text-gray-400"> We use the information we collect to provide and improve our 
                  website, to communicate with you, and to personalize your experience. We may 
                  also use your information to comply with legal obligations.</span>
                </div>
              </div>
            </li>
            
            <li>
              <div className="flex gap-2">
                <span className="font-bold text-white">3.</span>
                <div>
                  <h2 className="font-bold text-white inline">Cookies and Similar Technologies.</h2>
                  <span className="text-gray-400"> We may use cookies and similar technologies 
                  to collect information about your use of our website. You can control cookies 
                  through your browser settings.</span>
                </div>
              </div>
            </li>
            
            <li>
              <div className="flex gap-2">
                <span className="font-bold text-white">4.</span>
                <div>
                  <h2 className="font-bold text-white inline">Sharing of Information.</h2>
                  <span className="text-gray-400"> We may share your information with third-party service 
                  providers who assist us in providing and improving our website. We may also 
                  disclose your information if required by law.</span>
                </div>
              </div>
            </li>
            
            <li>
              <div className="flex gap-2">
                <span className="font-bold text-white">5.</span>
                <div>
                  <h2 className="font-bold text-white inline">Security.</h2>
                  <span className="text-gray-400"> We take reasonable measures to protect your personal information from 
                  unauthorized access, disclosure, and use.</span>
                </div>
              </div>
            </li>
            
            <li>
              <div className="flex gap-2">
                <span className="font-bold text-white">6.</span>
                <div>
                  <h2 className="font-bold text-white inline">Your Rights.</h2>
                  <span className="text-gray-400"> You have the right to access, correct, and delete your personal 
                  information. You may also have the right to object to certain processing of your 
                  personal information.</span>
                </div>
              </div>
            </li>
            
            <li>
              <div className="flex gap-2">
                <span className="font-bold text-white">7.</span>
                <div>
                  <h2 className="font-bold text-white inline">Changes to this Policy.</h2>
                  <span className="text-gray-400"> We may update this privacy policy from time to time. The 
                  most current version will be posted on our website.</span>
                </div>
              </div>
            </li>
            
            <li>
              <div className="flex gap-2">
                <span className="font-bold text-white">8.</span>
                <div>
                  <h2 className="font-bold text-white inline">Contact Us.</h2>
                  <span className="text-gray-400"> If you have any questions or concerns about our privacy policy, please 
                  contact us at team@govertx.com or vertx.esf.ai@gmail.com.</span>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </main>
      
      <footer className="border-t border-gray-800 mt-12 pt-6 pb-8 px-6">
  <div className="max-w-3xl ml-0"> 
    <div className="text-left">
      <div className="flex flex-wrap gap-4 mb-4">
        <a href="#" className="text-white-400 hover:text-white">Whatsapp</a>
        <a href="#" className="text-white-400 hover:text-white">Discord</a>
        <a href="#" className="text-white-400 hover:text-white">LinkedIn</a>
        <a href="#" className="text-white-400 hover:text-white">Twitter</a>
      </div>
      <div className="flex flex-wrap gap-4 mb-6">
        <a href="#" className="text-white-400 hover:text-white">Newsletter</a>
        <a href="#" className="text-white-400 hover:text-white">About</a>
        <a href="#" className="text-white-400 hover:text-white">Terms of use</a>
        <a href="#" className="text-white-400 hover:text-white">Privacy policy</a>
      </div>
      <div className="flex items-center mt-6">
        <div className="text-white font-bold mr-2">VERTX</div>
        <div className="text-gray-500 text-sm">2025 Vertxlabs, Inc. All rights reserved</div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default PrivacyPolicy;