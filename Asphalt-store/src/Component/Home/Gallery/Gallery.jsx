import React from 'react';
import './Gallery.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Marquee>
      <div className="image-gallery">
        <div className="image-gallery-grid">
          <div data-aos="fade" className="image-item">
            <img
              src={
                "https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/p/3/8/6/386-home_default.jpg"
              }
              alt="Image 1"
            />
          </div>
          <div data-aos="slide-up" className="image-item">
            <img
              src={
                "https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/p/3/7/2/372-home_default.jpg"
              }
              alt="Image 2"
            />
          </div>
          <div data-aos="slide-down" className="image-item">
            <img
              src={
                "https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/p/3/5/8/358-home_default.jpg"
              }
              alt="Image 3"
            />
          </div>
          <div data-aos="slide-left" className="image-item">
            <img
              src={
                "https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/p/3/7/9/379-home_default.jpg"
              }
              alt="Image 4"
            />
          </div>
          <div data-aos="slide-right" className="image-item">
            <img
              src={
                "https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/p/3/6/5/365-home_default.jpg"
              }
              alt="Image 5"
            />
          </div>
          <div data-aos="zoom-in" className="image-item">
            <img
              src={
                "https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/p/3/5/1/351-home_default.jpg"
              }
              alt="Image 6"
            />
          </div>
          <div data-aos="zoom-in-down" className="image-item">
            <img
              src={
                "https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/p/3/3/7/337-home_default.jpg"
              }
              alt="Image 6"
            />
          </div>
          <div data-aos="zoom-in-up" className="image-item">
            <img
              src={
                "https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/p/3/2/3/323-home_default.jpg"
              }
              alt="Image 6"
            />
          </div>
         
        </div>
      </div>
    </Marquee>
  );
};

export default Gallery;