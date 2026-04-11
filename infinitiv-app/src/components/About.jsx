import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src="/hero-bg.png" alt="Himalayan expedition" loading="lazy" />
            <div className="about-experience-badge">
              <div className="number">15+</div>
              <div className="label">Years Experience</div>
            </div>
          </div>

          <div className="about-text">
            <div className="section-label">About Us</div>
            <h2 className="section-title">
              Your Gateway to <span>Himalayan Glory</span>
            </h2>
            <p>
              InfinitiV Adventure is a premier Himalayan expedition company specialising in 
              peak climbing, trekking, and mountaineering across the Indian Himalayas. Founded 
              by passionate mountaineers, we bring together expertise, safety, and the spirit 
              of adventure to create life-changing experiences.
            </p>
            <p>
              From the barren landscapes of Ladakh to the lush valleys of Sikkim, from the 
              towering peaks of Uttarakhand to the pristine ranges of Himachal Pradesh — we 
              organise expeditions for all levels. Whether you're a beginner looking to summit 
              your first 5,000m peak or a seasoned climber targeting a challenging 7,000m+ 
              giant, InfinitiV Adventure is your trusted partner.
            </p>
            <p>
              Our team of certified mountaineering instructors and local guides ensure that 
              every expedition is conducted with the highest standards of safety, environmental 
              responsibility, and cultural sensitivity.
            </p>

            <div className="about-counters">
              <div className="about-counter">
                <div className="value"><AnimatedCounter target={500} suffix="+" /></div>
                <div className="label">Expeditions</div>
              </div>
              <div className="about-counter">
                <div className="value"><AnimatedCounter target={50} suffix="+" /></div>
                <div className="label">Peaks</div>
              </div>
              <div className="about-counter">
                <div className="value"><AnimatedCounter target={10000} suffix="+" /></div>
                <div className="label">Adventurers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
