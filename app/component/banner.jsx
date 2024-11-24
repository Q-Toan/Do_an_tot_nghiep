"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function Banner() {
    const slides = [
        {
            img: "/assets/images/backgrounds/slider-1-1.jpg",
            title: "The Finest Meat Market",
            delay: [0.5, 1, 1.5],
            aboutLink: "/page/about",
        },
        {
            img: "/assets/images/backgrounds/slider-1-2.jpg",
            title: "Fresh and Organic Meat",
            delay: [5.5, 6, 6.5],
            aboutLink: "/page/about",
        },
        {
            img: "/assets/images/backgrounds/slider-1-3.jpg",
            title: "Best Quality Meat",
            delay: [10.5, 11, 11.5],
            aboutLink: "/page/about",
        },
        {
            img: "/assets/images/backgrounds/slider-1-3.jpg",
            title: "Premium Cuts Just for You",
            delay: [15.5, 16, 16.5],
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
                                <div className="h-full flex items-center justify-center items-center"> {/* Căn giữa khung chứa */}
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
                                            Cut &amp; Carve Butcher
                                        </h5>

                                        {/* Title */}
                                        <h2 className="hero-slider-one__title animate-slideInLeft w-1/2 " style={{ animationDelay: `0.5s` }}>
                                            {slide.title}
                                        </h2>

                                        {/* Button */}
                                        <div className="hero-slider-one__btn animate-slideInRight" style={{ animationDelay: `3.5s` }}>
                                            <a href={slide.aboutLink} className="boskery-btn">
                                                <span className="boskery-btn__hover"></span>
                                                <span className="boskery-btn__hover"></span>
                                                <span className="boskery-btn__hover"></span>
                                                <span className="boskery-btn__hover"></span>
                                                <span className="boskery-btn__hover"></span>
                                                <span className="boskery-btn__hover"></span>
                                                <span className="boskery-btn__text">know about us</span>
                                                <i className="icon-meat-3"></i>
                                            </a>
                                        </div>
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
