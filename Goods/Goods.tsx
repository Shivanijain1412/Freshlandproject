import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Seasonal.module.css";


import { seasonalgood } from "@/mockdata/seasonalgood";

const Goods = () => {
  const images = seasonalgood;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h3 className={`W-H2 ${styles.title}`}>Seasonal Goods</h3>
      <p className={styles.subtitle}>Get the taste of the season</p>
      <div style={{width:'60%'}} className={styles.goodscontainer}>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index}>
            <div className={styles.slideContainer}>
              <img className={styles.slideImage} src={item.image} alt={`Slide ${index}`} />
              <div className={styles.slideTextOverlay}>
                <p className={`W-body-Large ${styles.slideText}`}>Organic Passion Fruit (1kg)</p>
                <p className={styles.slideText}>DDK 199</p>
              </div>
              <div >
                <button className={styles.addWrapper}>ADD</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      <button className={styles.seeAllButton}>
        See All Products<span></span>
      
      </button>
    </div>
  );
};

export default Goods;