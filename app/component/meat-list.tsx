"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import icon1 from '../../public/images/icon/chip.png'
import icon2 from '../../public/images/icon/computer.png'
import icon3 from '../../public/images/icon/cooler.png'
import icon4 from '../../public/images/icon/graphic-card.png'
import icon5 from '../../public/images/icon/keyboard.png'
import icon6 from '../../public/images/icon/laptop.png'
import icon7 from '../../public/images/icon/monitor.png'
import icon8 from '../../public/images/icon/motherboard.png'

const MeatList = () => {
    const settings = {
        spaceBetween: 10,
        slidesPerView: 8, // Số icon hiển thị trên màn hình lớn
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1920: {
                slidesPerView: 8,
            },
            1440: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            361: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
        modules: [Autoplay],
    };

    const meatList = [
        { icon: icon1 , title: 'CPU' },
        { icon: icon2 , title: 'Mouser' },
        { icon: icon3, title: 'cooling' },
        { icon: icon4, title: 'VGA' },
        { icon: icon5, title: 'Key Board' },
        { icon: icon6, title: 'Laptop' },
        { icon: icon7, title: 'monitor' },
        { icon: icon8, title: 'Motherboard' },
    ];

    return (
        <>
            <section className="meat-list bg-white">
                <div className="container-fluid mx-auto">
                    <Swiper {...settings}>
                        {meatList.map((meat, index) => (
                            <SwiperSlide key={index} className="meat-list__item item">
                                <div className="meat-list__icon">
                                    {typeof meat.icon === 'string' ? (
                                        <span className={meat.icon}></span>
                                    ) : (
                                        <img src={meat.icon.src} alt={meat.title} />
                                    )}
                                </div>
                                <h6 className="meat-list__title text-center">{meat.title}</h6>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default MeatList;
