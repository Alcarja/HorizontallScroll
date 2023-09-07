import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Carousel1 = () => {
  return (
    // <div className="wrapper">
    //   {/* <div className="two">
    //     <span className="three">Scroll down</span> */}
    //   {/* </div> */}
    //   <HorizontalScrollCarousel />
    //   {/* <div className="two">
    //     <span className="three">Scroll up</span> */}
    //   {/* </div> */}
    // </div>

    <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

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
        className="individual-card"
      ></div>
      <div className="individual-card2">
        <p className="card-p">{card.title}</p>
      </div>
    </div>
  );
};

export default Carousel1;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Let's get started!",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title:
      "In 2017 I graduated from Food Science and Engenieering, in UCM, Madrid.",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "I worked as a CrossFit Coach and dietitian for a couple of years.",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title:
      "Last year I started my new path towards web development and the wonders of the browser!",
    id: 4,
  },
];
