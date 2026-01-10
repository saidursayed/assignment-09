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
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default HeroSlider;
