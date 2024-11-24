'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const ProductCarousel = () => {
  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)",
          }}
        />
        <div className="container mx-auto">
          <h2 className="page-header__title text-3xl font-bold text-center py-8">
            products carousel
          </h2>
          <ul className="boskery-breadcrumb list-unstyled flex justify-center space-x-4">
            <li>
              <a href="/" className="text-blue-500">
                Home
              </a>
            </li>
            <li>
              <span>products</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="product-page section-space">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                slidesPerView={4} // Hiển thị 4 sản phẩm mặc định
                spaceBetween={30}
                autoplay={{ delay: 1500 }}
                pagination={{ clickable: true, el: '.swiper-pagination' }} // Pagination cấu hình
                breakpoints={{
                  1920: { slidesPerView: 4 },
                  1024: { slidesPerView: 4 },
                  768: { slidesPerView: 3 },
                  480: { slidesPerView: 2 },
                  300: { slidesPerView: 1 },
                }}
                modules={[Autoplay, Pagination]}
              >
                {/* Sản phẩm 1 */}
                <SwiperSlide>
                  <div className="flex justify-center item">
                    <div
                      className="product__item wow fadeInUp mx-4"
                      data-wow-duration="1500ms"
                      data-wow-delay="000ms"
                    >
                      <div className="product__item__image">
                        <Image
                        width={100}
                        height={100}
                          src="/assets/images/products/product-1-1.png"
                          alt="Ground beef"
                        />
                      </div>
                      <div className="product__item__content">
                        <div className="boskery-ratings">
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                        </div>
                        <h4 className="product__item__title">
                          <a href="/page/product-detail">Ground beef</a>
                        </h4>
                        <div className="product__item__price">$82.00</div>
                        <a
                          href="/page/cart"
                          className="boskery-btn product__item__link"
                        >
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__text">Add to Cart</span>
                          <i className="icon-meat-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Sản phẩm 2 */}
                <SwiperSlide>
                  <div className="flex justify-center item">
                    <div
                      className="product__item wow fadeInUp mx-4"
                      data-wow-duration="1500ms"
                      data-wow-delay="000ms"
                    >
                      <div className="product__item__image">
                        <Image
                        width={100}
                        height={100}
                          src="/assets/images/products/product-1-1.png"
                          alt="Ground beef"
                        />
                      </div>
                      <div className="product__item__content">
                        <div className="boskery-ratings">
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                        </div>
                        <h4 className="product__item__title">
                          <a href="/page/product-detail">Ground beef</a>
                        </h4>
                        <div className="product__item__price">$82.00</div>
                        <a
                          href="/page/cart"
                          className="boskery-btn product__item__link"
                        >
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__text">Add to Cart</span>
                          <i className="icon-meat-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Sản phẩm 3 */}
                <SwiperSlide>
                  <div className="flex justify-center item">
                    <div
                      className="product__item wow fadeInUp mx-4"
                      data-wow-duration="1500ms"
                      data-wow-delay="000ms"
                    >
                      <div className="product__item__image">
                        <Image
                        width={100}
                        height={100}
                          src="/assets/images/products/product-1-1.png"
                          alt="Ground beef"
                        />
                      </div>
                      <div className="product__item__content">
                        <div className="boskery-ratings">
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                        </div>
                        <h4 className="product__item__title">
                          <a href="/page/product-detail">Ground beef</a>
                        </h4>
                        <div className="product__item__price">$82.00</div>
                        <a
                          href="/page/cart"
                          className="boskery-btn product__item__link"
                        >
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__text">Add to Cart</span>
                          <i className="icon-meat-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Sản phẩm 4 */}
                <SwiperSlide>
                  <div className="flex justify-center item">
                    <div
                      className="product__item wow fadeInUp mx-4"
                      data-wow-duration="1500ms"
                      data-wow-delay="000ms"
                    >
                      <div className="product__item__image">
                        <Image
                        width={100}
                        height={100}
                          src="/assets/images/products/product-1-1.png"
                          alt="Ground beef"
                        />
                      </div>
                      <div className="product__item__content">
                        <div className="boskery-ratings">
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                        </div>
                        <h4 className="product__item__title">
                          <a href="/page/product-detail">Ground beef</a>
                        </h4>
                        <div className="product__item__price">$82.00</div>
                        <a
                          href="/page/cart"
                          className="boskery-btn product__item__link"
                        >
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__text">Add to Cart</span>
                          <i className="icon-meat-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Sản phẩm 5 */}
                <SwiperSlide>
                  <div className="flex justify-center item">
                    <div
                      className="product__item wow fadeInUp mx-4"
                      data-wow-duration="1500ms"
                      data-wow-delay="000ms"
                    >
                      <div className="product__item__image">
                        <Image
                        width={100}
                        height={100}
                          src="/assets/images/products/product-1-1.png"
                          alt="Ground beef"
                        />
                      </div>
                      <div className="product__item__content">
                        <div className="boskery-ratings">
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                          <span className="icon-star" />
                        </div>
                        <h4 className="product__item__title">
                          <a href="/page/product-detail">Ground beef</a>
                        </h4>
                        <div className="product__item__price">$82.00</div>
                        <a
                          href="/page/cart"
                          className="boskery-btn product__item__link"
                        >
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__hover" />
                          <span className="boskery-btn__text">Add to Cart</span>
                          <i className="icon-meat-3" />
                        </a>
                      </div>
                    </div>
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

export default ProductCarousel;
