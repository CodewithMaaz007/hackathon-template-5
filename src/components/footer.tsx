import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#FFFFFF', padding: '40px 20px', fontFamily: 'Montserrat, sans-serif' }}>
      <div style={{ maxWidth: '1440px', maxHeight: '142px', margin: '0 auto' }}>
        {/* Top Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#F5F5F5', // Light grey container
            padding: '0 20px', // Some padding to separate text and icons
            height: '142px', // Height set to 142px
          }}
        >
          {/* Logo and Name */}
          <div>
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '32px',
                color: '#252B42',
                letterSpacing: '0.1px',
              }}
            >
              Bandage
            </h3>
          </div>

          {/* Social Media Icons */}
          <div style={{ display: 'flex', gap: '15px', marginLeft: '10px', width: '112px', height: '24px' }}>
            <a href="#" style={{ color: '#0066FF', fontSize: '20px' }}>
              <FaFacebook />
            </a>
            <a href="#" style={{ color: '#0066FF', fontSize: '20px' }}>
              <FaInstagram />
            </a>
            <a href="#" style={{ color: '#0066FF', fontSize: '20px' }}>
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#E5E5E5',
            marginBottom: '40px',
          }}
        ></div>

        {/* Middle Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          {/* Company Info */}
          <div>
            <h4
              style={{
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '16px',
                color: '#252B42',
              }}
            >
              Company Info
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#737373', lineHeight: '24px', fontWeight: 700 }}>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '16px',
                color: '#252B42',
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#737373', lineHeight: '24px', fontWeight: 700 }}>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4
              style={{
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '16px',
                color: '#252B42',
              }}
            >
              Features
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#737373', lineHeight: '24px', fontWeight: 700 }}>
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              style={{
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '16px',
                color: '#252B42',
              }}
            >
              Resources
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#737373', lineHeight: '24px', fontWeight: 700 }}>
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4
              style={{
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '16px',
                color: '#252B42',
              }}
            >
              Get in Touch
            </h4>
            <form style={{ display: 'flex', alignItems: 'center'
        
             }}>
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  padding: '15px',
                  width: '200px',
                  border: '1px solid #E5E5E5',
                  borderRadius: '2px',
                  fontWeight: 700,
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#0066FF',
                  color: '#FFFFFF',
                  padding: '15px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  width: '120px', // Fixed width for button
                  fontWeight: 700,
                }}
              >
                Subscribe
              </button>
            </form>
            <p style={{ fontSize: '14px', color: '#737373', marginTop: '10px', fontWeight: 700 }}>
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ textAlign: 'left', color: '#737373', fontSize: '14px', fontWeight: 700 }}>
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;