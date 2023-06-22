import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { MdLocalShipping } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import ShopByCategory from "./ShopbyCaregory/ShopByCategory";
import Gallery from "./Gallery/Gallery";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import { FaPiggyBank } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
useEffect(() => {
  document.title = "Asphalt |  Home"; // Set the new title here
}, []);
  return (
    <div>
      {/* banner section */}
      <div className="banner bg-slate-500 h-[350px] md:h-[550px] w-[98%] mx-[2%]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="  rounded-md absolute bg-black text-white md:top-[40%] 
            md:left-[15%] md:w-[30%] w-[100%] h-[150px] py-2  md:h-[50%] shadow-xl md:py-8 md:px-4 bottom-0 z-50"
            >
              <h1 className="md:text-4xl  uppercase font-bold mb-3">
                Remote car
              </h1>
              <p>Get up to 50% *only</p>
              <button className="btn md:mt-8 sm:btn-sm">Shop Now</button>
            </div>
            <img
              src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/modules/aei_imageslider/views/img/sample-2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded-md absolute bg-black text-white top-[40%] right-[15%] md:w-[30%]  md:h-[50%] shadow-xl py-8 px-4">
              <h1 className="text-4xl  uppercase font-bold mb-3">Remote car</h1>
              <p>Get up to 50% *only</p>
              <button className="btn mt-8">Shop Now</button>
            </div>
            <img
              src="  https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/modules/aei_imageslider/views/img/sample-3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded-md absolute bg-black text-white top-[40%] right-[15%] md:w-[30%]  md:h-[50%] shadow-xl py-8 px-4">
              <h1 className="text-4xl  uppercase font-bold mb-3">Remote car</h1>
              <p>Get up to 50% *only</p>
              <button className="btn mt-8">Shop Now</button>
            </div>
            <img
              className="h-[100%]"
              src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/modules/aei_imageslider/views/img/sample-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded-md absolute bg-black text-white top-[40%] right-[15%] md:w-[30%]  md:h-[50%] shadow-xl py-8 px-4">
              <h1 className="text-4xl  uppercase font-bold mb-3">Remote car</h1>
              <p>Get up to 50% *only</p>
              <button className="btn mt-8">Shop Now</button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* support section */}
      <div className=" grid grid-cols-1 w-[95%] mx-auto md:grid-cols-4 support md:w-[100%]  border shadow-xl  py-4 px-[2%]  gap-6 bg-white mt-8 ">
        <div className="sprt px-4 border py-5 ">
          <span>
            <MdLocalShipping className="w-10 h-10 text-blue-500"></MdLocalShipping>
          </span>
          <div className="title">
            <h1 className="font-bold">free worldwide shipping</h1>
            <p className=" text-sm">All order over $100</p>
          </div>
        </div>

        <div className="sprt px-4 border py-5 ">
          <span>
            <TbMoneybag className="w-10 h-10 text-blue-500"></TbMoneybag>
          </span>
          <div className="title">
            <h1 className="font-bold">money back guarantee</h1>
            <p className=" text-sm">All order over $100</p>
          </div>
        </div>

        <div className="sprt px-4 border py-5 ">
          <span>
            <TfiHeadphoneAlt className="w-10 h-10 text-blue-500"></TfiHeadphoneAlt>
          </span>
          <div className="title">
            <h1 className="font-bold">24/7 online support</h1>
            <p className=" text-sm">Call us Anytime you want</p>
          </div>
        </div>

        <div className="sprt px-4 border py-5 ">
          <span>
            <FaPiggyBank className="w-10 h-10 text-blue-500"></FaPiggyBank>
          </span>
          <div className="title">
            <h1 className="font-bold">Win $100 on shop</h1>
            <p className=" text-sm">By Now</p>
          </div>
        </div>
      </div>

      {/* offer section */}
      <div className="offer mt-[240px] md:mt-[250px] w-[98%] mx-auto relative shadow-xl ">
        <img
          className="w-[100%] offer-img"
          src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/modules/aei_cmsbanner/views/img/banner1.jpg"
          alt=""
        />
        <div
          className="title absolute 
         right-0 md:right-10 -top-24 md:top-16 overflow-hidden uppercase"
        >
          <h1 className="text-2xl font-bold mb-5">buy kids ride on cars</h1>
          <p className="text-sm mb-4">
            get 25% off on first order and also get gift voucher
          </p>
          <p className="border-b font-bold text-blue-500">shop now</p>
        </div>
        <div className="discount hidden md:block absolute px-4 py-4 uppercase bg-black text-white -top-28 left-0 md:top-[10px]">
          <h1 className="font-bold mb-4">only tody</h1>
          <hr />
          <h1 className="text-2xl text-center mb-4 ">
            special <br /> offer
          </h1>
          <hr />
          <p className="text-center"> 50% off</p>
        </div>
      </div>

      {/* shop by category */}
      <div className="shop-category uppercase w-[95%] mx-auto mt-[100px]">
        <h1
          className="text-2xl font-bold
         font-serif text-blue-500"
        >
          Shop By category
        </h1>
        <ShopByCategory></ShopByCategory>
      </div>

      {/* gallery section */}
      <div className="gallery mt-[100px] w-[95%] mx-auto">
        <h1 className=" text-2xl font-bold text-blue-500 mb-[40px]">
          Explore New Collections
        </h1>
        <hr />
        <Gallery></Gallery>
      </div>

      {/* Show 2 card  */}
      <h1 className="mt-20 text-center text-3xl font-bold font-serif text-blue-500 mb-6">
        Most Favorite
      </h1>
      <hr />
      <div className="card-show w-[95%] mx-auto grid gird-cols-1 md:grid-cols-2 mt-[20px] gap-10">
        <div data-aos="fade-up" className="card border">
          <div className="card-content">
            <div className="card-details">
              <h3 className="card-name mb-4">New Arrival</h3>
              <p className="card-discount mb-4">50% off</p>
              <button className="card-btn">Buy Now</button>
            </div>
            <div className="card-image">
              <img
                src={
                  "https://media.istockphoto.com/id/92398896/photo/toy-model-sixties-car.jpg?s=612x612&w=0&k=20&c=k_Kcngif3pz_LllhZ3B_xZwZuq_OYldX2JPT4FNTw_0="
                }
                alt="Product"
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="card border">
          <div className="card-content">
            <div className="card-details">
              <h3 className="card-name mb-">best selling</h3>
              <p className="card-discount">50% off</p>
              <button className="card-btn">Buy Now</button>
            </div>
            <div className="card-image">
              <img
                src={
                  "https://media.istockphoto.com/id/1283681886/photo/little-boy-riding-toy-car-in-the-garden.jpg?s=612x612&w=0&k=20&c=3B-qiRGCB1cUbUuAYZuSiVYf74hGrE3IOL2G3PWYCw4="
                }
                alt="Product"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Shop by company */}

      <div className="shop-by-company   my-24">
        <h1 className="text-center text-3xl font-bold font-serif text-blue-500 mb-6">
          Shop By Company
        </h1>
        <hr />
        <Marquee className="opacity-40">
          <img
            src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop4/img/m/5.jpg"
            alt=""
          />
          <img
            src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop4/img/m/8.jpg"
            alt=""
          />
          <img
            src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop4/img/m/3.jpg"
            alt=""
          />
          <img
            src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop4/img/m/7.jpg"
            alt=""
          />
          <img
            src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop4/img/m/4.jpg"
            alt=""
          />
          <img
            src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop4/img/m/1.jpg"
            alt=""
          />
          <img
            src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop4/img/m/2.jpg"
            alt=""
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
