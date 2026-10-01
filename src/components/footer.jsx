import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  const socials = [
    { href: 'https://www.facebook.com/share/1Zksnw8c12/', icon: FaFacebookF, label: 'Facebook' },
    { href: 'https://x.com/IAmTheKamau', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://www.instagram.com/n.d.i.c.h.u1?igsh=dzJncTQxbGxjYmtw', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/francis-ndichu-591166261/', icon: FaLinkedinIn, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3
              className="text-xl font-bold text-white mb-3 tracking-wider"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              N.D.I.C.H.U
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-5 max-w-xs">
              Graphic Designer & Video Editor based in Nairobi, Kenya.
              Bringing ideas to life through stunning visuals and compelling videos.
            </p>

            <div className="flex gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-800 text-neutral-400 hover:bg-[#e4560f] hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  Creative Designs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>Graphic Design</li>
              <li>Video Editing</li>
              <li>Brand Identity</li>
              <li>Social Media Content</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:francisndichu2020@gmail.com"
                  className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  <FaEnvelope className="text-[#e4560f] shrink-0" />
                  <span className="truncate">francisndichu2020@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+254769123694"
                  className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  <FaPhone className="text-[#e4560f] shrink-0" />
                  <span>+254 769 123 694</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-neutral-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Francis Ndichu Kamau. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500 text-center sm:text-right">
            Designed & built with care in Nairobi.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;