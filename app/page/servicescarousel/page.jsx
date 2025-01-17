'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const ServiceCarousel = () => {
  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(/images/banner/banner2.png)",
          }}
        />
        <div className="container mx-auto">
          <h2 className="page-header__title text-3xl font-bold text-center py-8">
            services carousel
          </h2>
          <ul className="boskery-breadcrumb list-unstyled flex justify-center space-x-4">
            <li>
              <a href="/" className="text-blue-500">
                Home
              </a>
            </li>
            <li>
              <span>services</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="product-page section-space">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                slidesPerView={3} // Hiển thị 4 sản phẩm mặc định
                spaceBetween={30}
                autoplay={{ delay: 1500 }}
                pagination={{ clickable: true, el: '.swiper-pagination' }} // Pagination cấu hình
                breakpoints={{
                  1920: { slidesPerView: 3 },
                  1024: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  480: { slidesPerView: 1 },
                  300: { slidesPerView: 1 },
                }}
                modules={[Autoplay, Pagination]}
              >
                {/* Sản phẩm 1 */}
                <SwiperSlide>
                  <div className="flex justify-center item">
                  <div
    className="item wow fadeInUp"
    data-wow-duration="1500ms"
    data-wow-delay="00ms"
  >
    <div className="service-card">
      <div className="service-card__content">
        <div className="service-card__image">
            <Image
            width={500}
            height={500}
            src="/images/sanpham/nen1.png"
            alt="Custom Cutting"
          />
          <div className="service-card__icon">
            <span className="icon-butchering" />
          </div>
          {/* /.service-card__icon */}
        </div>
        {/* /.services-card__image */}
        <h3 className="service-card__title">
          <a href="/page/service-details">Custom Cutting</a>
        </h3>
        {/* /.services-card__title */}
        <p className="service-card__text">
          Butcher shops primarily sell a variety of meats, including beef, pork,
          lamb, chicken, turkey, and more. They may offer
        </p>
        {/* /.services-card__text */}
      </div>
      {/* /.services-card__content */}
      <a href="/page/service-details" className="service-card__btn">
        service details <span className="icon-right" />
      </a>
      {/* /.services-card__btn */}
    </div>
    {/* /.service-card */}
  </div>
  {/* /.item */}
                  </div>
                </SwiperSlide>

                {/* Sản phẩm 2 */}
                <SwiperSlide>
                  <div className="flex justify-center item">
                  <div
    className="item wow fadeInUp"
    data-wow-duration="1500ms"
    data-wow-delay="00ms"
  >
    <div className="service-card">
      <div className="service-card__content">
        <div className="service-card__image">
            <Image
            width={500}
            height={500}
            src="/images/sanpham/nen2.png"
            alt="Custom Cutting"
          />
          <div className="service-card__icon">
            <span className="icon-butchering" />
          </div>
          {/* /.service-card__icon */}
        </div>
        {/* /.services-card__image */}
        <h3 className="service-card__title">
          <a href="/page/service-details">Custom Cutting</a>
        </h3>
        {/* /.services-card__title */}
        <p className="service-card__text">
          Butcher shops primarily sell a variety of meats, including beef, pork,
          lamb, chicken, turkey, and more. They may offer
        </p>
        {/* /.services-card__text */}
      </div>
      {/* /.services-card__content */}
      <a href="/page/service-details" className="service-card__btn">
        service details <span className="icon-right" />
      </a>
      {/* /.services-card__btn */}
    </div>
    {/* /.service-card */}
  </div>
  {/* /.item */}
                  </div>
                </SwiperSlide>

                {/* Sản phẩm 3 */}
                <SwiperSlide>
                  <div className="flex justify-center item">
                      <div
    className="item wow fadeInUp"
    data-wow-duration="1500ms"
    data-wow-delay="00ms"
  >
    <div className="service-card">
      <div className="service-card__content">
        <div className="service-card__image">
            <Image
            width={500}
            height={500}
            src="/images/sanpham/nen5.png"
            alt="Custom Cutting"
          />
          <div className="service-card__icon">
            <span className="icon-butchering" />
          </div>
          {/* /.service-card__icon */}
        </div>
        {/* /.services-card__image */}
        <h3 className="service-card__title">
          <a href="/page/service-details">Custom Cutting</a>
        </h3>
        {/* /.services-card__title */}
        <p className="service-card__text">
          Butcher shops primarily sell a variety of meats, including beef, pork,
          lamb, chicken, turkey, and more. They may offer
        </p>
        {/* /.services-card__text */}
      </div>
      {/* /.services-card__content */}
      <a href="/page/service-details" className="service-card__btn">
        service details <span className="icon-right" />
      </a>
      {/* /.services-card__btn */}
    </div>
    {/* /.service-card */}
  </div>
  {/* /.item */}
                  </div>
                </SwiperSlide>

                {/* Sản phẩm 4 */}
                <SwiperSlide>
                  <div className="flex justify-center item">
                      <div
    className="item wow fadeInUp"
    data-wow-duration="1500ms"
    data-wow-delay="00ms"
  >
    <div className="service-card">
      <div className="service-card__content">
        <div className="service-card__image">
            <Image
            width={500}
            height={500}
            src="/images/sanpham/nen11.png"
            alt="Custom Cutting"
          />
          <div className="service-card__icon">
            <span className="icon-butchering" />
          </div>
          {/* /.service-card__icon */}
        </div>
        {/* /.services-card__image */}
        <h3 className="service-card__title">
          <a href="/page/service-details">Custom Cutting</a>
        </h3>
        {/* /.services-card__title */}
        <p className="service-card__text">
          Butcher shops primarily sell a variety of meats, including beef, pork,
          lamb, chicken, turkey, and more. They may offer
        </p>
        {/* /.services-card__text */}
      </div>
      {/* /.services-card__content */}
      <a href="/page/service-details" className="service-card__btn">
        service details <span className="icon-right" />
      </a>
      {/* /.services-card__btn */}
    </div>
    {/* /.service-card */}
  </div>
  {/* /.item */}
                  </div>
                </SwiperSlide>

                {/* Sản phẩm 5 */}
                <SwiperSlide>
                  <div className="flex justify-center item">
                      <div
    className="item wow fadeInUp"
    data-wow-duration="1500ms"
    data-wow-delay="00ms"
  >
    <div className="service-card">
      <div className="service-card__content">
        <div className="service-card__image">
            <Image
            width={500}
            height={500}
            src="/images/sanpham/nen10.png"
            alt="Custom Cutting"
          />
          <div className="service-card__icon">
            <span className="icon-butchering" />
          </div>
          {/* /.service-card__icon */}
        </div>
        {/* /.services-card__image */}
        <h3 className="service-card__title">
          <a href="/page/service-details">Custom Cutting</a>
        </h3>
        {/* /.services-card__title */}
        <p className="service-card__text">
          Butcher shops primarily sell a variety of meats, including beef, pork,
          lamb, chicken, turkey, and more. They may offer
        </p>
        {/* /.services-card__text */}
      </div>
      {/* /.services-card__content */}
      <a href="/page/service-details" className="service-card__btn">
        service details <span className="icon-right" />
      </a>
      {/* /.services-card__btn */}
    </div>
    {/* /.service-card */}
  </div>
  {/* /.item */}
                  </div>
                </SwiperSlide>

              </Swiper>

              <div
                className="swiper-pagination mt-[10px]"
                style={{
                  position: 'relative',
                  marginTop: '100px',
                  display: 'flex', // Đảm bảo các chấm nằm ngang
                  justifyContent: 'center', // Căn giữa các chấm
                }}
              >
                <style>
                  {`
                    .swiper-pagination-bullet {
                      background-color: gray !important; /* Thay đổi màu sắc chấm */
                      opacity: 1; /* Đảm bảo chấm không trong suốt */
                    }
                    .swiper-pagination-bullet-active {
                      background-color: red !important; /* Màu cho chấm đang hoạt động */
                      border: 1px solid black;
                    }
                  `}
                </style>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCarousel;
