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
    title: "IronHack web development Bootcamp",
    businesses: [
      "JavaScript(ES6)",
      "HTML5",
      "CSS3",
      "Reactjs",
      "Nodejs",
      "MongoDB",
      "Expressjs",
      "GitHub",
      "Rest APIs",
    ],
    id: 1,
  },
  {
    url: "/imgs/abstract/1.jpg",
    title: "What I am looking for",
    businesses: [
      "Cool workspace to keep learning and growing as a web dev",
      "New Challenges",
      "A job as a front or back end web developer",
      "A team to be a part of and help with my knowledge",
      "Bringing my cool headed and chill demeanor to the team",
    ],
    id: 2,
  },
  {
    url: "/imgs/abstract/1.jpg",
    title:
      "What I do when I'm not hitting the keyboard or watching YouTube tutorials",
    businesses: [
      "Taking a long walk with Nala",
      "Listening to a nerdy podcast",
      "Reading any and all types of fiction",
      "Training CrossFit to forget my coding failures",
      "Cooking tasty food",
    ],
    id: 3,
  },
];
