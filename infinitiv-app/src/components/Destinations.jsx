import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: 'Ladakh',
    image: '/ladakh.png',
    peaks: '20+ Peaks • 3,500m - 7,135m',
    description: 'Between the Himalayas, Zanskar & Karakoram ranges',
  },
  {
    name: 'Uttarakhand',
    image: '/uttarakhand.png',
    peaks: '120+ Peaks • 5,000m - 7,816m',
    description: 'Home to Nanda Devi, Trishul & Kamet',
  },
  {
    name: 'Himachal Pradesh',
    image: '/himachal.png',
    peaks: '40+ Peaks • 5,000m - 6,816m',
    description: 'Dhauladhar, Pir Panjal & Greater Himalaya',
  },
  {
    name: 'Sikkim',
    image: '/sikkim.png',
    peaks: '30+ Peaks • 5,603m - 8,586m',
    description: 'Home to mighty Kanchenjunga',
  },
];

export default function Destinations() {
  return (
    <section className="destinations section-padding" id="destinations">
      <div className="container">
        <div className="destinations-header">
          <div className="section-label">Explore Regions</div>
          <h2 className="section-title">
            Peak Climbing <span>Destinations</span>
          </h2>
          <p className="section-subtitle">
            Discover the most breathtaking peak climbing regions across the Indian Himalayas,
            each offering unique challenges and unforgettable experiences.
          </p>
        </div>

        <div className="destinations-grid">
          {destinations.map((dest, i) => (
            <div
              className="destination-card"
              key={dest.name}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <img src={dest.image} alt={dest.name} loading="lazy" />
              <div className="destination-overlay">
                <div className="destination-region">{dest.name}</div>
                <div className="destination-peaks">{dest.peaks}</div>
                <div className="destination-explore">
                  Explore Peaks <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
