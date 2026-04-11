import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is the best time for a peak climbing expedition in the Indian Himalayas?',
    answer: 'The best time for a peak climbing expedition in the Indian Himalayas is generally from late May to early October. This period avoids the harsh winter and the monsoon season, providing more stable weather conditions and clearer skies. However, specific peaks may have different optimal windows.',
  },
  {
    question: 'What permits are required for climbing peaks in India?',
    answer: 'For climbing peaks in India, you typically need permits like the Indian Mountaineering Foundation (IMF) Permit for peaks above 6,000 meters, Inner Line Permit (ILP) for certain restricted areas especially near international borders, and some additional permits depending on the specific region and peak. InfinitiV Adventure handles all permit logistics for you.',
  },
  {
    question: 'Do I need prior climbing experience?',
    answer: 'Yes, prior climbing experience is highly recommended, especially for peaks above 6,000 meters. Basic mountaineering skills, including ice and rock climbing, as well as knowledge of high-altitude acclimatization, are essential. However, basic training is generally provided before commencing the climbs, and we have beginner-friendly peaks like Friendship Peak (5,289m).',
  },
  {
    question: 'What are the main challenges of climbing in the Indian Himalayas?',
    answer: 'Altitude sickness due to high elevations, unpredictable weather, requirement of technical climbing skills, and limited accessibility in remote regions are a few of the major challenges you will face during peak climbing in India. Our experienced guides and carefully planned acclimatization schedules help mitigate these risks.',
  },
  {
    question: 'Which are the most popular peaks for beginners?',
    answer: 'Stok Kangri (6,153m) in Ladakh, Friendship Peak (5,289m) in Himachal Pradesh, Mt. Kiagar Ri in Ladakh, Mt. Frey (5,830m) in Sikkim, and Mount Ladakhi in Himachal Pradesh are excellent choices for beginners looking to start their mountaineering journey.',
  },
  {
    question: 'What is the recommended acclimatization schedule?',
    answer: 'The recommended acclimatization schedule includes 1-2 days of rest or light activity upon arrival at altitude, followed by 1-2 days of gradual ascent to higher elevations. We follow the "climb high, sleep low" principle and ensure adequate rest days in our itineraries to prevent altitude sickness.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq section-padding" id="faq">
      <div className="container">
        <div className="faq-header">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our Himalayan expeditions.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)}>
                {faq.question}
                <ChevronDown size={20} />
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
