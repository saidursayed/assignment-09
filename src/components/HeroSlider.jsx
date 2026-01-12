import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda minima ab vero explicabo doloribus asperiores aliquam eius possimus cum distinctio perspiciatis natus magnam sed voluptate, quasi odit facilis maxime dolores dignissimos est consectetur blanditiis. Eligendi tempore cupiditate id eveniet? Asperiores labore dolores optio dolore, ullam neque expedita praesentium minus, voluptate quos eligendi possimus nesciunt obcaecati quo voluptates eius totam dolor aperiam! Vel magni omnis, quibusdam molestias illo ipsam nobis pariatur tenetur ipsum facilis, quae reiciendis recusandae, quasi eos dolor dignissimos eius provident quidem? Ex adipisci, quod suscipit quaerat ipsam ratione ullam aperiam accusamus possimus, officiis ducimus. Commodi, officiis explicabo.</SwiperSlide>
        {/* <SwiperSlide>
          <img className="w-full" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmgyH0kCrnCN2xEchukwp7sTiX-56L2Ws0pQ&s`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={`https://i.ibb.co.com/ccbHWwHZ/Chat-GPT-Image-Jan-11-2026-10-20-43-PM.png`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={`https://i.ibb.co.com/fYb36xk8/Chat-GPT-Image-Jan-11-2026-10-32-12-PM.png`} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img className="" src={`https://www.bcitworld.com/assets/img/about/Best-WordPress-Training-Course-in-Patna.webp`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-80 object-cover" src={`https://t4.ftcdn.net/jpg/04/84/47/63/240_F_484476383_fMf880aI0dkgFgt0eBICQRqbFenr394S.jpg`} alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default HeroSlider;
