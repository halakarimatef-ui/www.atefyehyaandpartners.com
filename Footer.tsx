
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pearl dark:bg-background-dark pt-32 pb-16 border-t border-slate-100 dark:border-slate-800" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="mb-10">
              <Logo className="h-24" variant="full" />
            </div>
            <h3 className="text-3xl font-display text-primary dark:text-white mb-8 max-w-sm">Partnering in your financial future.</h3>
            <p className="max-w-md font-light text-accent text-lg mb-10 leading-relaxed">
              Experience the difference of working with a firm that values integrity as much as performance. Established 1982.
            </p>
            <div className="flex space-x-6">
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Atef Yehya & Partners',
                      text: 'Professional accounting and auditing services in Egypt.',
                      url: window.location.href,
                    });
                  }
                }}
                className="w-12 h-12 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 hover:border-primary transition-all text-primary dark:text-white"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </button>
              <a 
                href="mailto:mail@atefyehya.com" 
                className="w-12 h-12 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 hover:border-primary transition-all text-primary dark:text-white"
              >
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-primary dark:text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-10">Contact Us</h4>
            <ul className="space-y-6 text-sm text-accent font-light">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary dark:text-accent text-xl mr-4">location_on</span>
                <a href="https://maps.app.goo.gl/yi7aVz4BXRDt5HpL7">1 Refaa St, Manshiett El-Bakry<br/>Heliopolis, Cairo, Egypt</a>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-primary dark:text-accent text-xl mr-4">phone</span>
                <a href="tel:+20227950000" className="hover:text-primary dark:hover:text-white transition-colors">+20 2 24530751</a>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-primary dark:text-accent text-xl mr-4">mail</span>
                <a href="mailto:mail@atefyehya.com" className="hover:text-primary dark:hover:text-white transition-colors">mail@atefyehya.com</a>
                 </li>
                 <li className="flex items-start">
                <span className="material-symbols-outlined text-primary dark:text-accent text-xl mr-4">ⓕ</span>
                <a href="https://www.facebook.com/AtefYehyaOffice/"> follow us on facebook </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary dark:text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-10">Office Hours</h4>
            <ul className="space-y-4 text-sm text-accent font-light">
              <li className="font-semibold text-primary dark:text-white">Sunday - Thursday</li>
              <li>9:00 AM - 5:00 PM</li>
              <li className="pt-6 text-accent/60 italic text-xs">By Appointment Only</li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase text-accent font-bold">
          <p>© 2026 Atef Yehya &amp; Partners. All rights reserved. Registered Chartered Accountants &amp; Auditors.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
