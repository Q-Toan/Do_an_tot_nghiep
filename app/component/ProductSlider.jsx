"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules'; // Thêm modules chính xác

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const ProductDetails = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    '/images/sanpham/sp13.png',
    '/images/sanpham/sp15.png',
    '/images/sanpham/sp16.png',
  ];

  return (
    <section className="product-details__gallery-top container mx-auto">
      <div className="flex flex-col items-center">
        {/* Phần Swiper chính */}
        <div className="w-[570px] wow fadeInLeft" data-wow-delay="200ms">
          <div className="product-details__img">
            <Swiper
              spaceBetween={10}
              navigation
              pagination={{ clickable: true }}
              thumbs={{ swiper: thumbsSwiper }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSlideChange={(swiper) => setActiveImage(swiper.activeIndex)}
              modules={[Navigation, Pagination, Thumbs, Autoplay]} // Đảm bảo modules đúng
              className="w-[570px] h-[570px]"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center bg-[#F6F2EC] h-full">
                    <Image
                      src={src}
                      width={423}
                      height={296}
                      alt="product details image"
                      className="block w-[423px] h-[296px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Phần hình ảnh nhỏ */}
        <div className="flex space-x-4 mt-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            freeMode
            watchSlidesProgress
            className="w-[300px]"
            modules={[Thumbs]} // Sử dụng đúng modules
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`w-[100px] h-[100px] flex items-center justify-center bg-[#F6F2EC] cursor-pointer ${
                    index === activeImage ? 'border-2 border-blue-500' : ''
                  }`}
                >
                  <Image
                    src={src}
                    width={100}
                    height={100}
                    alt="thumbnail"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
