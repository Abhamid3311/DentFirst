import React, { useEffect, useState, useRef } from 'react';
import Testimonial from './Testimonial';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Navigation } from "swiper";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, []);


    return (
        <div className='bg-[#fafafa] px-14 pt-20'  id='testimonials'>
            <div className='text-center'>
                <h2 className='text-5xl leading-[68px] font-semibold pt-8'>Find out what  <span className='text-[#64A665]'>customers are saying</span></h2>

                <p className='mt-4 text-[#666A7B]'>Serves wholeheartedly to help others in maintaining healthy tooth and <br /> mouth</p>
            </div>





            <div className='py-10 '>
                <Swiper
                    loop={true}
                    navigation={true}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={2}
                    slidesPerGroup={1}

                    breakpoints={{
                        299: {
                            slidesPerView: 1,
                        },

                        640: {
                            slidesPerView: 1,

                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {
                        testimonials.map(testimonial => <SwiperSlide key={testimonial._id}><Testimonial testimonial={testimonial} /></SwiperSlide>)
                    }


                </Swiper>
            </div>


        </div>
    );
};

export default Testimonials;