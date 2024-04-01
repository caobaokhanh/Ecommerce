import { Image } from "antd";
import React from "react";
import Slider from "react-slick";

export default function SliderComponent({ arrImages }) {
  //   console.log(arrImages);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
  };
  return (
    <Slider {...settings}>
      {arrImages.map((image) => {
        return (
          <Image
            src={image}
            alt="slider"
            preview={false}
            width="100%"
            height="274px"
          />
        );
      })}
    </Slider>
  );
}
