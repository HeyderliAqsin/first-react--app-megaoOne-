import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HeroSlider = ({images,perView}) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={perView}
    navigation
    loop
  >
    {images.map((img,i)=>(
       <SwiperSlide key={i}>
       <img  src={img} alt="" />
   </SwiperSlide>
    ))}
   
  
  </Swiper>
  )
}

export default HeroSlider