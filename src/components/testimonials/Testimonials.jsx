import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './testimonials.css';
import Image1 from '../../assets/avatar-2.svg';

const Testimonials = () => {
    return (
        <section className="testimonials container section" id="testimonials">
            <h2 className="section__title">Clints & Reviews</h2>
            <Swiper className="testimonials__container grid"
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                grabCursor={true}
                pagination={{
                    dynamicBullets: false,
                    clickable: true,

                }}
                modules={[Autoplay, Pagination]}>

                <SwiperSlide className="testimonial__item">
                    <div className="thumb">
                        <img src={Image1} alt="" />
                    </div>
                    <h3 className="testimonials__title">Anuj Kumar</h3>
                    <p className="testimonals__subtitle">Product designer at Dribble</p>
                    <div className="comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nemo aut porro exercitationem iusto consequatur sed. Eveniet, temporibus praesentium pariatur asperiores consequuntur, fugiat omnis ea architecto, consequatur beatae qui exercitationem!</div>
                </SwiperSlide>
                <SwiperSlide className="testimonial__item">
                    <div className="thumb">
                        <img src={Image1} alt="" />
                    </div>
                    <h3 className="testimonials__title">Anuj Kumar</h3>
                    <p className="testimonals__subtitle">Product designer at Dribble</p>
                    <div className="comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nemo aut porro exercitationem iusto consequatur sed. Eveniet, temporibus praesentium pariatur asperiores consequuntur, fugiat omnis ea architecto, consequatur beatae qui exercitationem!</div>
                </SwiperSlide>
                <SwiperSlide className="testimonial__item">
                    <div className="thumb">
                        <img src={Image1} alt="" />
                    </div>
                    <h3 className="testimonials__title">Anuj Kumar</h3>
                    <p className="testimonals__subtitle">Product designer at Dribble</p>
                    <div className="comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nemo aut porro exercitationem iusto consequatur sed. Eveniet, temporibus praesentium pariatur asperiores consequuntur, fugiat omnis ea architecto, consequatur beatae qui exercitationem!</div>
                </SwiperSlide>
                <SwiperSlide className="testimonial__item">
                    <div className="thumb">
                        <img src={Image1} alt="" />
                    </div>
                    <h3 className="testimonials__title">Anuj Kumar</h3>
                    <p className="testimonals__subtitle">Product designer at Dribble</p>
                    <div className="comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nemo aut porro exercitationem iusto consequatur sed. Eveniet, temporibus praesentium pariatur asperiores consequuntur, fugiat omnis ea architecto, consequatur beatae qui exercitationem!</div>
                </SwiperSlide>
            </Swiper>
        </section >
    )
}

export default Testimonials;