import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../CSS/carousel.css";
import four from "../assets/carousel/four.png";
import three from "../assets/carousel/three.svg";
import two from "../assets/carousel/two.svg";
import one from "../assets/carousel/one.svg";
import CarouselCard from "./sub/carouselCard";
import Arrow from "../assets/btns-arrow/right.svg";

const data = [
  {
    head: "Deep domain expertise",
    contents:
      "Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.",
    image: four,
  },
  {
    head: "A focus on KPIs that matter",
    contents:
      "Our tools help you make decisions to grow your business.Everything works towards improving cash flow and product availability.",
    image: three,
  },
  {
    head: "Ease Of use, for everyone",
    contents:
      "With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use.",
    image: two,
  },
  {
    head: "Purpose-built & ever-improving tech",
    contents:
      "Our demand forecasting engine has been meticulously-built, while our ML engine constantly trains on years of data and is ever- evolving.",
    image: one,
  },
];

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="carousel-container">
      <h1 className="carousel-head">Get CleverBook and get...</h1>

      <a id="prev" className="embla__prev action-bt-car" onClick={scrollPrev}>
        <img
          src={Arrow}
          alt=""
          srcset=""
          style={{ transform: "rotate(180deg)" }}
        />
      </a>

      <a id="next" className="embla__next action-bt-car" onClick={scrollNext}>
        <img src={Arrow} alt="" srcset="" />
      </a>

      <div className="embla" style={{margin: 'auto'}} ref={emblaRef}>
        <div className="embla__container embla-container-adder">
          {data.map((card, index) => (
            <CarouselCard
              key={index}
              image={card.image}
              head={card.head}
              content={card.contents}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
