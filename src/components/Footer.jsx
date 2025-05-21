import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#3a3a3a', color: '#fff', padding: '3rem 1rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Support & Policy */}
        <div>
          <h4>SUPPORT & POLICY</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>CSR Policies</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Our World */}
        <div>
          <h4>OUR WORLD</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Featured Watches</li>
            <li>Men’s Watches</li>
            <li>Women’s Watches</li>
            <li>New Arrivals</li>
            <li>Store Locator</li>
            <li>Service Center</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Brands */}
        <div>
          <h4>BRANDS</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Rolex</li>
            <li>Breitling</li>
            <li>Bvlgari</li>
            <li>Cartier</li>
            <li>Chopard</li>
            <li>Franck Muller</li>
            <li>Hublot</li>
            <li>IWC Schaffhausen</li>
            <li>Longines</li>
            <li>Omega</li>
            <li>Panerai</li>
            <li>Ger Dubuis</li>
            <li>Seven Friday</li>
            <li>Tag Heuer</li>
            <li>Tissot</li>
            <li>Tudor</li>
          </ul>
        </div>

        {/* Newsletter + Contact */}
        <div>
          <div style={{ marginBottom: '2rem' }}>
            <input
              type="email"
              placeholder="Please Enter Email"
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #fff',
                background: 'transparent',
                color: '#fff',
                width: '100%',
                marginBottom: '1rem',
              }}
            />
            <button
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#fff',
                color: '#000',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Subscribe
            </button>
          </div>

          <div>
            <h4>CONTACT DETAILS</h4>
            <p>D-10, South Extension-II</p>
            <p>Pune-4110001</p>
            <p>+91-0000000000</p>
            <p>enquiry@watch.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
