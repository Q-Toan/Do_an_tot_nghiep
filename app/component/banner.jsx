"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function Banner() {
    const slides = [
        {
            img: "/assets/images/backgrounds/banner1.jpg",
            aboutLink: "/page/about",
        },
        {
            img: "/assets/images/backgrounds/banner_2.jpg",
            aboutLink: "/page/about",
        },
        {
            img: "/assets/images/backgrounds/banner_1.jpg",
            aboutLink: "/page/about",
        },
        {
            img: "/assets/images/backgrounds/banner_2.jpg",
            aboutLink: "/page/about",
        },
    ];

    const settings = {
        slidesPerView: 1,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            clickable: true,
        },
    };

    return (
        <section className="hero-slider-one hero-main-slider" id="home">
            <div className="mx-auto">
                <Swiper {...settings} modules={[Autoplay, Pagination]}>
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="hero-slider-one__item">
                                <div className="hero-slider-one__bg">
                                    <Image
                                        src={slide.img}
                                        alt={`Slider ${index + 1}`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="h-full flex items-center justify-center"> {/* Căn giữa khung chứa */}
                                    <div className="relative z-20 text-white text-left"> {/* Căn trái nội dung bên trong */}
                                        {/* Overlay Group */}
                                        <span className="hero-slider-one__title__overlay-group w-1/2" style={{ animation: 'fadeIn 1s forwards, fadeOut 1s forwards 2s' }}>
                                            <span className="hero-slider-one__title__overlay"></span>
                                            <span className="hero-slider-one__title__overlay"></span>
                                            <span className="hero-slider-one__title__overlay"></span>
                                            <span className="hero-slider-one__title__overlay"></span>
                                            <span className="hero-slider-one__title__overlay"></span>
                                            <span className="hero-slider-one__title__overlay"></span>
                                        </span>

                                        {/* Sub-title */}
                                        <h5 className="text-[20px] text-white font-bold leading-normal tracking-[5px] uppercase mb-2.5 pb-2.5 animate-fadeIn" style={{ animationDelay: `3s` }}>
                                        </h5>
                                        {/* Button */}
                                        
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
