import { Shield, Users, Compass, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Users size={28} />,
    title: 'Expert Guides',
    description: 'Our certified mountaineering guides have years of Himalayan experience, ensuring your safety and success on every expedition.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Safety First',
    description: 'Comprehensive safety protocols, high-altitude medical kits, satellite phones, and emergency evacuation plans on every trip.',
  },
  {
    icon: <Compass size={28} />,
    title: 'Custom Itineraries',
    description: 'Tailored expedition plans that match your experience level, fitness, and preferences. Every adventure is personalised.',
  },
  {
    icon: <Headphones size={28} />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance from trip planning to post-expedition support. We are with you at every step of the journey.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose section-padding" id="why-choose">
      <div className="container">
        <div className="why-choose-header">
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">
            Your Adventure, <span>Our Expertise</span>
          </h2>
          <p className="section-subtitle">
            With over 15 years of Himalayan expedition experience, we deliver 
            unmatched safety, expertise, and unforgettable adventures.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature, i) => (
            <div className="glass-card why-card" key={i}>
              <div className="why-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
