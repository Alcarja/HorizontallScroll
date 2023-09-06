import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Carousel2 = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);
  //This controlls how much space there is left when you finish scrolling

  return (
    <section ref={targetRef} className="wrapper2">
      <div className="wrapper3">
        <motion.div style={{ x }} className="content">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="cards">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="individual-card-carousel-2"
      ></div>
      <div className="individual-card2-carousel-2">
        <h2 className="card-h2-carousel-2">{card.title}</h2>
        {/* Check if card.businesses exists before rendering the list */}
        {card.businesses && (
          <ul>
            {card.businesses.map((business, index) => (
              <li key={index}>{business}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Carousel2;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Businesses I've worked with along the way",
    businesses: [
      "Independent Schools Tasmania",
      " University of New South Wales",
      "University of Tasmania",
      "Institute for Marine & Antarctic Studies",
      "Women in Sport Australia",
      " Champions of Change Coalition",
      "Newsroom",
      " Real Estate Institute of Victoria",
      "Choice Magazine",
      "Acclaim Magazine",
    ],
    id: 1,
  },
  {
    url: "/imgs/abstract/1.jpg",
    title: "Businesses I would like to work with in the future",
    businesses: [
      "Independent Schools Tasmania",
      " University of New South Wales",
      "University of Tasmania",
      "Institute for Marine & Antarctic Studies",
      "Women in Sport Australia",
    ],
    id: 2,
  },
  {
    url: "/imgs/abstract/1.jpg",
    title: "What keeps me busy when I'm not working",
    businesses: [
      " Champions of Change Coalition",
      "Newsroom",
      " Real Estate Institute of Victoria",
      "Choice Magazine",
      "Acclaim Magazine",
    ],
    id: 3,
  },
  {
    url: "/imgs/abstract/1.jpg",
    title: "What I would like to achieve in the future",
    businesses: [
      "Independent Schools Tasmania",
      " University of New South Wales",
      "University of Tasmania",
      "Institute for Marine & Antarctic Studies",
      "Women in Sport Australia",
      " Champions of Change Coalition",
      "Newsroom",
      " Real Estate Institute of Victoria",
      "Choice Magazine",
      "Acclaim Magazine",
    ],
    id: 4,
  },
];
