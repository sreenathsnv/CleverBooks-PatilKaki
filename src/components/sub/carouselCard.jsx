import React from "react";

const CarouselCard = ({image,head,content}) => {
  return (
    <div className="embla__slide embla-slide-adder">
      <div className="carousels">
        <img src={image} alt="" srcset="" />
        <div className="contents-carousel">
          <h3 className="carousel-content-head">{head}</h3>
          <p className="carousel-content-contents">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
