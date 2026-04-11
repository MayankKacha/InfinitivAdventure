import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="contact-header">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">
            Plan Your <span>Adventure</span>
          </h2>
          <p className="section-subtitle">
            Ready to conquer the Himalayas? Reach out to us and we'll craft 
            the perfect expedition for you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-cards">
            <div className="glass-card contact-info-card">
              <div className="contact-info-icon">
                <Phone size={22} />
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+91-9212553109</p>
                <p>Mon - Sat, 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="glass-card contact-info-card">
              <div className="contact-info-icon">
                <Mail size={22} />
              </div>
              <div>
                <h4>Email Us</h4>
                <p>info@infinitivadventure.com</p>
                <p>We reply within 24 hours</p>
              </div>
            </div>

            <div className="glass-card contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h4>Visit Us</h4>
                <p>InfinitiV Adventure HQ</p>
                <p>New Delhi, India</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+91-XXXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-destination">Preferred Destination</label>
                  <select
                    id="contact-destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                  >
                    <option value="">Select a destination</option>
                    <option value="ladakh">Ladakh</option>
                    <option value="uttarakhand">Uttarakhand</option>
                    <option value="himachal">Himachal Pradesh</option>
                    <option value="sikkim">Sikkim</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your dream expedition..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                <Send size={18} />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
