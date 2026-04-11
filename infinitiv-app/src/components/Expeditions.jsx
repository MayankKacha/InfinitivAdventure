import { useState } from 'react';
import { Mountain, Clock, ChevronDown, MapPin } from 'lucide-react';

const expeditions = [
  {
    id: 1,
    name: 'Stok Kangri Peak',
    altitude: '6,153m',
    region: 'Ladakh',
    difficulty: 'moderate',
    duration: '9 Days',
    image: '/ladakh.png',
    description: 'One of the most popular trekking peaks in India, Stok Kangri offers breathtaking views of the Indus Valley and the Karakoram range.',
    itinerary: [
      { day: 'Day 1', desc: 'Arrive in Leh (3,500m). Acclimatization and rest. Explore Leh market and monasteries.' },
      { day: 'Day 2', desc: 'Acclimatization day. Visit Shanti Stupa, Leh Palace, and local sightseeing.' },
      { day: 'Day 3', desc: 'Drive to Zingchen (3,400m). Trek to Rumbak Village (3,960m). 4-5 hours walk.' },
      { day: 'Day 4', desc: 'Rumbak to Stok Kangri Base Camp (5,000m). Gradual ascent through valleys. 6 hours.' },
      { day: 'Day 5', desc: 'Rest and acclimatization at Base Camp. Equipment check and practice session.' },
      { day: 'Day 6', desc: 'Base Camp to Advanced Camp (5,500m). Technical training and preparation.' },
      { day: 'Day 7', desc: 'Summit push! Advanced Camp to Summit (6,153m) and back to Base Camp. 10-12 hours.' },
      { day: 'Day 8', desc: 'Base Camp to Stok Village (3,600m). Descend through scenic valley. Drive to Leh.' },
      { day: 'Day 9', desc: 'Departure from Leh. Transfer to airport with memories of a lifetime.' },
    ],
  },
  {
    id: 2,
    name: 'Friendship Peak',
    altitude: '5,289m',
    region: 'Himachal',
    difficulty: 'easy',
    duration: '7 Days',
    image: '/himachal.png',
    description: 'Perfect for beginners, Friendship Peak near Manali offers an excellent introduction to peak climbing with stunning views of Pir Panjal range.',
    itinerary: [
      { day: 'Day 1', desc: 'Arrive in Manali (2,050m). Briefing and gear check. Overnight at hotel.' },
      { day: 'Day 2', desc: 'Drive to Solang Valley. Trek to Bakerthach (3,300m). 5-6 hours through forests.' },
      { day: 'Day 3', desc: 'Bakerthach to Lady Leg Base (3,900m). Alpine meadows and river crossings. 5 hours.' },
      { day: 'Day 4', desc: 'Lady Leg Base to Friendship Peak Base Camp (4,500m). Snow fields begin. 4-5 hours.' },
      { day: 'Day 5', desc: 'Summit push to Friendship Peak (5,289m). Stunning 360° panoramic views. Return to Base Camp.' },
      { day: 'Day 6', desc: 'Descend from Base Camp to Bakerthach. Celebrate the successful summit.' },
      { day: 'Day 7', desc: 'Trek down to Solang Valley. Drive back to Manali. Departure.' },
    ],
  },
  {
    id: 3,
    name: 'Nun Kun Peak',
    altitude: '7,135m',
    region: 'Ladakh',
    difficulty: 'difficult',
    duration: '25 Days',
    image: '/ladakh.png',
    description: 'The twin peaks Nun (7,135m) and Kun (7,077m) are the highest mountains in Ladakh. A challenging expedition for experienced mountaineers.',
    itinerary: [
      { day: 'Day 1-2', desc: 'Arrive in Srinagar. Drive to Panikhar via Kargil (2 days). Permits and logistics.' },
      { day: 'Day 3-4', desc: 'Trek from Panikhar to Shafat Glacier area. Establish Camp 1 (4,200m).' },
      { day: 'Day 5-7', desc: 'Acclimatization climbs. Establish Base Camp at Nun Kun col (4,800m).' },
      { day: 'Day 8-10', desc: 'Carry loads to Camp 1 (5,400m). Technical ice and snow training.' },
      { day: 'Day 11-14', desc: 'Establish Camp 2 (5,900m). Acclimatization rotations between camps.' },
      { day: 'Day 15-18', desc: 'Establish Camp 3 (6,400m). Weather window monitoring.' },
      { day: 'Day 19-21', desc: 'Summit push to Nun Peak (7,135m). Return to Camp 2. Celebration!' },
      { day: 'Day 22-23', desc: 'Descend to Base Camp. Pack up and trek to Panikhar.' },
      { day: 'Day 24-25', desc: 'Drive back to Srinagar via Kargil. Departure.' },
    ],
  },
  {
    id: 4,
    name: 'Kedarnath Peak',
    altitude: '6,940m',
    region: 'Uttarakhand',
    difficulty: 'difficult',
    duration: '21 Days',
    image: '/uttarakhand.png',
    description: 'A challenging ascent in the Garhwal Himalayas, Kedarnath Peak offers technical climbing with stunning views of Chaukhamba massif.',
    itinerary: [
      { day: 'Day 1-2', desc: 'Arrive in Dehradun. Drive to Uttarkashi (1,150m). Equipment and briefing.' },
      { day: 'Day 3-4', desc: 'Drive to Rambara. Trek to Kedarnath Temple area (3,580m).' },
      { day: 'Day 5-7', desc: 'Trek to Base Camp (4,400m) near Chorabari Bamak glacier.' },
      { day: 'Day 8-10', desc: 'Acclimatization. Establish Camp 1 (5,200m). Load carries.' },
      { day: 'Day 11-14', desc: 'Establish Camp 2 (5,800m). Technical ice and rock climbing practice.' },
      { day: 'Day 15-17', desc: 'Summit Camp (6,300m). Weather window assessment.' },
      { day: 'Day 18', desc: 'Summit push to Kedarnath Peak (6,940m). Panoramic Himalayan views.' },
      { day: 'Day 19-20', desc: 'Descend to Base Camp. Trek back to road head.' },
      { day: 'Day 21', desc: 'Drive back to Dehradun. Departure.' },
    ],
  },
  {
    id: 5,
    name: 'Mt. Deo Tibba',
    altitude: '6,001m',
    region: 'Himachal',
    difficulty: 'moderate',
    duration: '12 Days',
    image: '/himachal.png',
    description: 'Called the "Peak of the Gods", Deo Tibba is a stunning climb in the Kullu Valley with diverse terrain from forests to glaciers.',
    itinerary: [
      { day: 'Day 1', desc: 'Arrive in Manali (2,050m). Briefing, gear check, and acclimatization walk.' },
      { day: 'Day 2', desc: 'Drive to Khanol. Trek to Chikha via Hamta Pass trail (3,100m). 5 hours.' },
      { day: 'Day 3', desc: 'Trek to Seri (3,600m). Beautiful alpine meadows and stream crossings.' },
      { day: 'Day 4', desc: 'Seri to Tenta (4,000m). Gradual ascent with glacier views.' },
      { day: 'Day 5', desc: 'Tenta to Base Camp (4,480m). Establish camp near Deo Tibba glacier.' },
      { day: 'Day 6-7', desc: 'Acclimatization days. Technical training on ice and snow. Load carries.' },
      { day: 'Day 8', desc: 'Base Camp to Camp 1 (5,100m). Cross glacier moraines.' },
      { day: 'Day 9', desc: 'Camp 1 to Summit Camp (5,500m). Prepare for summit push.' },
      { day: 'Day 10', desc: 'Summit Day! Climb to Deo Tibba (6,001m). Descend to Camp 1.' },
      { day: 'Day 11', desc: 'Descend to Seri. Celebrate successful summit.' },
      { day: 'Day 12', desc: 'Trek to Khanol. Drive to Manali. Departure.' },
    ],
  },
  {
    id: 6,
    name: 'Frey Peak',
    altitude: '5,830m',
    region: 'Sikkim',
    difficulty: 'moderate',
    duration: '14 Days',
    image: '/sikkim.png',
    description: 'A scenic adventure in Sikkim passing through Yuksom and Tshoka, offering incredible views of Mt. Kanchenjunga and surrounding peaks.',
    itinerary: [
      { day: 'Day 1', desc: 'Arrive in Bagdogra. Drive to Gangtok (1,650m). 5 hours.' },
      { day: 'Day 2', desc: 'Gangtok sightseeing. Permit processing and gear check.' },
      { day: 'Day 3', desc: 'Drive to Yuksom (1,780m). 6 hours scenic drive. Briefing.' },
      { day: 'Day 4', desc: 'Trek from Yuksom to Tshoka (3,050m). Through rhododendron forests. 6 hours.' },
      { day: 'Day 5', desc: 'Tshoka to Dzongri (4,020m). Stunning views of Kanchenjunga. 5 hours.' },
      { day: 'Day 6', desc: 'Acclimatization day at Dzongri. Hike to Dzongri Top (4,170m) for views.' },
      { day: 'Day 7', desc: 'Dzongri to Frey Peak Base Camp (4,600m). Alpine terrain. 5 hours.' },
      { day: 'Day 8-9', desc: 'Acclimatization and technical preparation at Base Camp.' },
      { day: 'Day 10', desc: 'Base Camp to High Camp (5,200m). Cross moraine and glacier.' },
      { day: 'Day 11', desc: 'Summit push to Frey Peak (5,830m). Descend to Base Camp.' },
      { day: 'Day 12', desc: 'Descend from Base Camp to Tshoka.' },
      { day: 'Day 13', desc: 'Tshoka to Yuksom. Celebration dinner.' },
      { day: 'Day 14', desc: 'Drive to Bagdogra. Departure.' },
    ],
  },
];

const regions = ['All', 'Ladakh', 'Uttarakhand', 'Himachal', 'Sikkim'];

export default function Expeditions() {
  const [activeRegion, setActiveRegion] = useState('All');
  const [openItinerary, setOpenItinerary] = useState(null);

  const filtered = activeRegion === 'All'
    ? expeditions
    : expeditions.filter(e => e.region === activeRegion);

  const toggleItinerary = (id) => {
    setOpenItinerary(openItinerary === id ? null : id);
  };

  const getBadgeClass = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'badge-easy';
      case 'moderate': return 'badge-moderate';
      case 'difficult': return 'badge-difficult';
      default: return '';
    }
  };

  return (
    <section className="expeditions section-padding" id="expeditions">
      <div className="container">
        <div className="expeditions-header">
          <div className="section-label">Our Expeditions</div>
          <h2 className="section-title">
            Peak Climbing <span>Packages</span>
          </h2>
          <p className="section-subtitle">
            Choose from our curated expedition packages across the Indian Himalayas.
            Each package includes expert guides, equipment, and comprehensive support.
          </p>
        </div>

        <div className="expedition-tabs">
          {regions.map(region => (
            <button
              key={region}
              className={`expedition-tab ${activeRegion === region ? 'active' : ''}`}
              onClick={() => { setActiveRegion(region); setOpenItinerary(null); }}
            >
              {region}
            </button>
          ))}
        </div>

        <div className="expeditions-grid">
          {filtered.map(exp => (
            <div className="expedition-card" key={exp.id}>
              <div className="expedition-image">
                <img src={exp.image} alt={exp.name} loading="lazy" />
                <div className={`expedition-badge ${getBadgeClass(exp.difficulty)}`}>
                  {exp.difficulty}
                </div>
              </div>
              <div className="expedition-info">
                <h3 className="expedition-name">{exp.name}</h3>
                <div className="expedition-meta">
                  <div className="expedition-meta-item">
                    <Mountain size={16} />
                    {exp.altitude}
                  </div>
                  <div className="expedition-meta-item">
                    <Clock size={16} />
                    {exp.duration}
                  </div>
                  <div className="expedition-meta-item">
                    <MapPin size={16} />
                    {exp.region}
                  </div>
                </div>
                <p className="expedition-description">{exp.description}</p>

                <button
                  className={`expedition-itinerary-toggle ${openItinerary === exp.id ? 'open' : ''}`}
                  onClick={() => toggleItinerary(exp.id)}
                >
                  View Itinerary
                  <ChevronDown size={18} />
                </button>

                <div className={`expedition-itinerary ${openItinerary === exp.id ? 'open' : ''}`}>
                  <div className="itinerary-list">
                    {exp.itinerary.map((item, i) => (
                      <div className="itinerary-day" key={i}>
                        <div className="itinerary-day-num">{item.day}</div>
                        <div className="itinerary-day-desc">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
