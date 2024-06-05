import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../CSS/work.css";

import right from "../assets/btns-arrow/right.svg";
import ReviewCard from "./sub/ReviewCard";

import one from '../assets/cards/one.png'
import two from '../assets/cards/two.png'
import five from '../assets/cards/five.png'
import six from '../assets/cards/six.png'
import three from '../assets/cards/three.jpg'

const data = [
    {
        image:one,
        content:'Stocking Strategies for Festive Season Sales',
    },
    {
        image:two,
        content:'Stocking Strategies for Festive Season Sales',
    },
    {
        image:three,
        content:'Stocking Strategies for Festive Season Sales',
    },
    {
        image:five,
        content:'Stocking Strategies for Festive Season Sales',
    },
    {
        image:six,
        content:'Stocking Strategies for Festive Season Sales',
    },
]

const PopularWork = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="works-container">
      <div className="main-work-content-container">
        <div className="works-header">
          <h1 className="works-head">
            Delivered:<br></br>The Crest blog
          </h1>

          <p className="works-header-content">
            Insights from years of working in various supply-chain roles (and an
            itch to write). We hope you find these posts interesting!
          </p>

          <div className="carousel-control">
            <a onClick={scrollPrev}>
              <img
                src={right}
                className="left-action"
                alt=""
                style={{ transform: "rotate(180deg)" }}
              />
            </a>
            <a onClick={scrollNext}>
              <img src={right} alt="" className="left-action" srcset="" />
            </a>
          </div>
        </div>

        <div className="blogs-bt">
            <button className='works-blog-btn'>
                <span>View all Blogs</span>
            </button>
        </div>
      </div>

      <div className="embla embla-adder" ref={emblaRef}>
        <div className="embla__container works-card-adder ">

            {
                data.map((item,index)=>(
                    <div className="embla__slide card-container">
                    <ReviewCard key={index} image={item.image} content ={item.content}/>
                </div>
                ))
                
            }
          
        </div>
      </div>
    </div>
  );
};

export default PopularWork;
