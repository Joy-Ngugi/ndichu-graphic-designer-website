import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const socials = [
    { href: 'https://www.facebook.com/share/1Zksnw8c12/', icon: FaFacebookF, label: 'Facebook', color: '#1877f2' },
    { href: 'https://x.com/IAmTheKamau', icon: FaTwitter, label: 'Twitter', color: '#1da1f2' },
    { href: 'https://www.instagram.com/n.d.i.c.h.u1?igsh=dzJncTQxbGxjYmtw', icon: FaInstagram, label: 'Instagram', color: '#e4405f' },
    { href: 'https://www.linkedin.com/in/francis-ndichu-591166261/', icon: FaLinkedinIn, label: 'LinkedIn', color: '#0a66c2' },
  ];

  return (
    <section className="min-h-screen bg-neutral-50 text-neutral-900 py-16 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: '#ff9d00' }}
          >
            Let's work together
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Contact Me
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: '#ff9d00' }}
          />
          <p className="text-neutral-600 max-w-lg mx-auto">
            Interested in collaborating? Feel free to reach out for freelance
            projects, consultations, or just to say hello.
          </p>
        </div>

        {/* Details cards */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 mb-8">
          <h3
            className="text-xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Contact Details
          </h3>

          <div className="space-y-4">
            <a
              href="mailto:francisndichu2020@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-orange-50 transition-colors group"
            >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full text-white shrink-0"
                style={{ backgroundColor: '#ff9d00' }}
              >
                <FaEnvelope />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Email</p>
                <p className="font-medium text-neutral-900 group-hover:text-orange-600 transition-colors">
                  francisndichu2020@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+254769123694"
              className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-orange-50 transition-colors group"
            >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full text-white shrink-0"
                style={{ backgroundColor: '#ff9d00' }}
              >
                <FaPhone />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Phone</p>
                <p className="font-medium text-neutral-900 group-hover:text-orange-600 transition-colors">
                  +254 769 123 694
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50">
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full text-white shrink-0"
                style={{ backgroundColor: '#ff9d00' }}
              >
                <FaMapMarkerAlt />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Location</p>
                <p className="font-medium text-neutral-900">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="text-center">
          <h3
            className="text-xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Follow Me
          </h3>

          <div className="flex justify-center gap-4 flex-wrap">
            {socials.map(({ href, icon: Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-neutral-200 text-neutral-600 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = color;
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.color = '';
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;