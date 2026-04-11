import { Mountain, Camera, Globe, MessageCircle, Play } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="InfinitiV" />
              <span>InfinitiV Adventure</span>
            </div>
            <p>
              Your trusted partner for Himalayan peak climbing expeditions.
              Conquer the highest peaks with expert guidance, unmatched safety,
              and unforgettable memories.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><Camera size={18} /></a>
              <a href="#" aria-label="Facebook"><Globe size={18} /></a>
              <a href="#" aria-label="Twitter"><MessageCircle size={18} /></a>
              <a href="#" aria-label="YouTube"><Play size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#expeditions">Expeditions</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Destinations</h4>
            <ul>
              <li><a href="#destinations">Peak Climbing Ladakh</a></li>
              <li><a href="#destinations">Peak Climbing Uttarakhand</a></li>
              <li><a href="#destinations">Peak Climbing Himachal</a></li>
              <li><a href="#destinations">Peak Climbing Sikkim</a></li>
              <li><a href="#destinations">Trekking in Himalayas</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Newsletter</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.7' }}>
              Subscribe for expedition updates, travel tips, and exclusive offers.
            </p>
            <div className="footer-newsletter">
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="your@email.com" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 InfinitiV Adventure. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
