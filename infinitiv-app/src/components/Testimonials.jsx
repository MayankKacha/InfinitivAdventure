import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "The Stok Kangri expedition with InfinitiV was absolutely incredible. The guides were professional, the itinerary was well-planned, and reaching the summit was a life-changing moment. Highly recommended for anyone seeking a Himalayan adventure!",
    author: 'Rajesh Mehta',
    location: 'Mumbai, India',
    initials: 'RM',
    rating: 5,
  },
  {
    text: "As a beginner, I was nervous about my first peak climbing experience. The team at InfinitiV made me feel safe and supported throughout the Friendship Peak expedition. The training, acclimatization schedule, and gear were top-notch.",
    author: 'Sarah Mitchell',
    location: 'London, UK',
    initials: 'SM',
    rating: 5,
  },
  {
    text: "We did the Frey Peak expedition in Sikkim and it was magical. The rhododendron forests, the views of Kanchenjunga, and the sense of accomplishment at the summit — all made possible by the wonderful InfinitiV team.",
    author: 'Priya Sharma',
    location: 'Delhi, India',
    initials: 'PS',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">
            What Our <span>Adventurers</span> Say
          </h2>
          <p className="section-subtitle">
            Real stories from real adventurers who conquered the Himalayas with InfinitiV.
          </p>
        </div>

        <div className="testimonials-slider">
          {testimonials.map((t, i) => (
            <div className="glass-card testimonial-card" key={i}>
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={18} />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-author-info">
                  <h4>{t.author}</h4>
                  <p>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
