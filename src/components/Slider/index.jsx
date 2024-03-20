import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CustomSwiper = ({ children }) => {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={1.9}
            onSlideChange={() => console.log('slide change')}
        >
            {React.Children.map(children, child => (
                <SwiperSlide>{child}</SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CustomSwiper;
