import { ChevronDown, Mountain, MapPin, Compass } from 'lucide-react';

export default function Hero() {
  const handleScroll = (e) => {
    e.preventDefault();
    const el = document.getElementById('destinations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="/hero-bg.png" alt="Himalayan Mountains" loading="eager" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Mountain size={14} />
            Himalayan Peak Expeditions
          </div>

          <h1 className="hero-title">
            Conquer the{' '}
            <span className="gradient-text">Himalayas</span>
            <br />
            with InfinitiV
          </h1>

          <p className="hero-description">
            Embark on extraordinary peak climbing expeditions across Ladakh, Uttarakhand,
            Himachal Pradesh, and Sikkim. From 5,000m peaks to challenging 7,000m+ summits —
            your Himalayan adventure begins here.
          </p>

          <div className="hero-buttons">
            <a href="#expeditions" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('expeditions')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Compass size={18} />
              Explore Expeditions
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <MapPin size={18} />
              Plan Your Trip
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">500+</div>
              <div className="hero-stat-label">Expeditions Completed</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">50+</div>
              <div className="hero-stat-label">Peaks Conquered</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">10K+</div>
              <div className="hero-stat-label">Happy Adventurers</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">15+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={handleScroll}>
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
