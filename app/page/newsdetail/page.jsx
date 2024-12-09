import Image from 'next/image';
import React from 'react';


const Sidbar = () => {
    return (
        <>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)"
                    }}
                />
                <div className="container mx-auto">
                    <h2 className="page-header__title">News details</h2>
                    <ul className="boskery-breadcrumb list-unstyled">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <span>latest news </span>
                        </li>
                        <li>
                            <span>News Details</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="blog-details section-space">
                <div className="container mx-auto">
                    <div className="flex flex-wrap xl1:flex-row flex-col gutter-y-60">
                        {/*Sử dụng flex-col:

                        Khi màn hình nhỏ hơn 1000px, bạn có thể sử dụng flex-col để thay đổi hướng của các phần tử con trong layout thành cột.
                        Thay đổi kích thước cột:

                        Thay đổi w-1/3 thành w-full cho cột sidebar và w-2/3 thành w-full cho cột blog. Điều này sẽ làm cho chúng chiếm toàn bộ chiều rộng của màn hình nhỏ.
                        Margin dưới:

                        Sử dụng mb-6 (margin-bottom) cho sidebar để tạo khoảng cách giữa sidebar và blog khi chúng xếp chồng lên nhau.
                        xl1:w-1/3: này là khi màn hình về tới kích thước dưới 1000px. xl1 là thuốc tính đã cấu hình trong tailwind.config.js  
                        */}
                        <div className="flex-none w-full xl1:w-1/3 mb-6 xl1:mb-0">
                            <div className="sidebar" style={{ width: '100%', marginRight: '30px' }}>
                                <aside className="widget-area">
                                    <div className="sidebar__form sidebar__single">
                                        <h4 className="sidebar__title sidebar__form__title">
                                            search here
                                        </h4>
                                        <form action="#" className="sidebar__search">
                                            <input type="text" placeholder="Search Here" />
                                            <button type="submit" aria-label="search submit">
                                                <span className="icon-search" />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="sidebar__posts-wrapper sidebar__single">
                                        <h4 className="sidebar__title sidebar__posts-title">
                                            Latest posts
                                        </h4>
                                        <ul className="sidebar__posts list-unstyled">
                                            <li className="sidebar__posts__item">
                                                <div className="sidebar__posts__image">
                                                    <Image
                                                        width={500}
                                                        height={500}
                                                        src="/assets/images/blog/lp-1-1.jpg"
                                                        alt="Latest posts"
                                                    />
                                                </div>
                                                <div className="sidebar__posts__content">
                                                    <p className="sidebar__posts__meta">
                                                        <a href="#">
                                                            <span className="icon-user" />
                                                            By Admin
                                                        </a>
                                                    </p>
                                                    <h4 className="sidebar__posts__title">
                                                        <a href="/page/newsdetail">
                                                            There are many vario ns of passages of
                                                        </a>
                                                    </h4>
                                                </div>
                                            </li>
                                            <li className="sidebar__posts__item">
                                                <div className="sidebar__posts__image">
                                                    <Image
                                                        width={500}
                                                        height={500}
                                                        src="/assets/images/blog/lp-1-2.jpg"
                                                        alt="Latest posts"
                                                    />
                                                </div>
                                                <div className="sidebar__posts__content">
                                                    <p className="sidebar__posts__meta">
                                                        <a href="#">
                                                            <span className="icon-user" />
                                                            By Admin
                                                        </a>
                                                    </p>
                                                    <h4 className="sidebar__posts__title">
                                                        <a href="/page/newsdetail">
                                                            There are many vario ns of passages of
                                                        </a>
                                                    </h4>
                                                </div>
                                            </li>
                                            <li className="sidebar__posts__item">
                                                <div className="sidebar__posts__image">
                                                    <Image
                                                        width={500}
                                                        height={500}
                                                        src="/assets/images/blog/lp-1-3.jpg"
                                                        alt="Latest posts"
                                                    />
                                                </div>
                                                <div className="sidebar__posts__content">
                                                    <p className="sidebar__posts__meta">
                                                        <a href="#">
                                                            <span className="icon-user" />
                                                            By Admin
                                                        </a>
                                                    </p>
                                                    <h4 className="sidebar__posts__title">
                                                        <a href="/page/newsdetail">
                                                            There are many vario ns of passages of
                                                        </a>
                                                    </h4>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__categories-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Categories</h4>
                                        <ul className="sidebar__categories list-unstyled">
                                            <li>
                                                <a href="/page/newsdetail">
                                                    organ meat <span>(1)</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/page/newsdetail">
                                                    game mea <span>(2)</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/page/newsdetail">
                                                    turke <span>(3)</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/page/newsdetail">
                                                    lambs <span>(4)</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/page/newsdetail">
                                                    exotic meats <span>(5)</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__tags-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Tags</h4>
                                        <div className="sidebar__tags">
                                            <a href="/page/newsdetail">Poultry</a>
                                            <a href="/page/newsdetail">Organ Meats</a>
                                            <a href="/page/newsdetail">Exotic Meats</a>
                                            <a href="/page/newsdetail">Lamb</a>
                                            <a href="/page/newsdetail">Sausages</a>
                                            <a href="/page/newsdetail">Specialty Cuts</a>
                                            <a href="/page/newsdetail">Game Meat</a>
                                            <a href="/page/newsdetail">Veal</a>
                                        </div>
                                    </div>
                                    <div className="sidebar__comments-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Comments</h4>
                                        <ul className="sidebar__comments list-unstyled">
                                            <li>
                                                <div className="sidebar__comments__icon">
                                                    <span className="icon-speech-bubble" />
                                                </div>
                                                <h6 className="sidebar__comments__title">
                                                    <a href="/page/newsdetail">
                                                        Neque porro est qui dolorem ipsum quia quaed inventor
                                                    </a>
                                                </h6>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments__icon">
                                                    <span className="icon-speech-bubble" />
                                                </div>
                                                <h6 className="sidebar__comments__title">
                                                    <a href="/page/newsdetail">
                                                        Neque porro est qui dolorem ipsum quia quaed inventor
                                                    </a>
                                                </h6>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments__icon">
                                                    <span className="icon-speech-bubble" />
                                                </div>
                                                <h6 className="sidebar__comments__title">
                                                    <a href="/page/newsdetail">
                                                        Neque porro est qui dolorem ipsum quia quaed inventor
                                                    </a>
                                                </h6>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="flex-none w-full xl1:w-2/3">
                            <div className="blog-details mx-[30px]">
                                <div
                                    className="blog-card blog-card--four wow fadeInUp"
                                    data-wow-delay="00ms"
                                    data-wow-duration="1500ms"
                                >
                                    <div className="blog-card__image">
                                        <Image
                                            width={500}
                                            height={500}
                                            src="/assets/images/blog/blog-d-1-1.jpg" alt="" />
                                        <div className="blog-card__date">
                                            <span>25</span> <span>june</span>
                                        </div>
                                    </div>
                                    <div className="blog-card__content">
                                        <ul className="list-unstyled blog-card__meta">
                                            <li>
                                                <a href="#">
                                                    <span className="icon-user" /> by Admin
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-chat" /> 2 Comments
                                                </a>
                                            </li>
                                        </ul>
                                        <h3 className="blog-card__title">
                                            There are many variations of passages of available but
                                            majority
                                        </h3>
                                        <div className="blog-card__content__inner">
                                            <p className="blog-card__text blog-card__text--1">
                                                Neque porro est qui dolorem ipsum quia quaed inventor
                                                veritatis et quasi architecto beatae vitae dicta sunt
                                                explicabo. Aelltes port lacus quis enim var sed efficitur
                                                turpis gilla sed sit amet finibus eros. Lorem Ipsum is
                                                simply dummy text of the printing and typesetting industry.
                                            </p>
                                            <p className="blog-card__text blog-card__text--2">
                                                When an unknown printer took a galley of type and scrambled
                                                it to make a type specimen book. It has survived not only
                                                five centuries, but also the leap into electronic
                                                typesetting, remaining essentially unchanged. Aelltes port
                                                lacus quis enim var sed efficitur turpis gilla sed sit amet
                                                finibus eros.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details__inner">
                                    <div className="row gutter-y-30 flex"  >
                                        <div
                                            className="col-md-6 wow fadeInUp"
                                            data-wow-delay="100ms"
                                            data-wow-duration="1500ms" style={{ width: '370px', marginRight: '30px' }}
                                        >
                                            <div className="blog-details__inner__image">
                                                <Image
                                                    width={500}
                                                    height={500}
                                                    src="/assets/images/blog/blog-d-1-2.jpg"
                                                    alt="blog details"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="col-md-6 wow fadeInUp"
                                            data-wow-delay="300ms"
                                            data-wow-duration="1500ms"
                                        >
                                            <div className="blog-details__inner__image">
                                                <Image
                                                    width={500}
                                                    height={500}
                                                    src="/assets/images/blog/blog-d-1-3.jpg"
                                                    alt="blog details"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-details__inner__content">
                                        <p className="blog-details__inner__text">
                                            Neque porro est qui dolorem ipsum quia quaed inventor
                                            veritatis et quasi architecto beatae vitae dicta sunt
                                            explicabo. Aelltes port lacus quis enim var sed efficitur
                                            turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply
                                            dummy text of the printing and typesetting industry.
                                        </p>
                                        <ul className="blog-details__inner__list">
                                            <li>
                                                Another area of AI that holds great promise is robotics,
                                                which involves developing machines.
                                            </li>
                                            <li>
                                                AI also has the potential to improve healthcare, by enabling
                                                more accurate diagnosis and trea
                                            </li>
                                            <li>
                                                However, there are also challenges associated with the
                                                development and deployment of AI.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-details__meta">
                                    <div className="blog-details__tags">
                                        <h4 className="blog-details__meta__title">Tags:</h4>
                                        <div className="blog-details__tags__box">
                                            <a href="/page/newsdetail">Poultry</a>
                                            <a href="/page/newsdetail">Organ Meats</a>
                                            <a href="/page/newsdetail">Exotic Meats</a>
                                        </div>
                                    </div>
                                    <div className="blog-details__social">
                                        <h4 className="blog-details__meta__title">Share:</h4>
                                        <div className="boskery-social">
                                            <a href="https://facebook.com">
                                                <i className="fab fa-facebook-f" aria-hidden="true" />
                                                <span className="sr-only">Facebook</span>
                                            </a>
                                            <a href="https://twitter.com">
                                                <i className="fab fa-twitter" aria-hidden="true" />
                                                <span className="sr-only">Twitter</span>
                                            </a>
                                            <a href="https://linkedin.com">
                                                <i className="fab fa-linkedin-in" aria-hidden="true" />
                                                <span className="sr-only">Linkedin</span>
                                            </a>
                                            <a href="https://youtube.com" aria-hidden="true">
                                                <i className="fab fa-youtube" />
                                                <span className="sr-only">Youtube</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-one">
                                <h3 className="comments-one__title">02 Comments</h3>
                                <ul className="list-unstyled comments-one__list">
                                    <li
                                        className="comments-one__card wow fadeInUp"
                                        data-wow-delay="100ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="comments-one__card__image">
                                            <Image
                                                width={500}
                                                height={500}
                                                src="/assets/images/blog/blog-comment-1-1.png"
                                                alt="Kevin martin"
                                            />
                                        </div>
                                        <div className="comments-one__card__content">
                                            <div className="comments-one__card__top">
                                                <div className="comments-one__card__info">
                                                    <h3 className="comments-one__card__title">
                                                        Kevin martin
                                                    </h3>
                                                    <p className="comments-one__card__date">
                                                        March 20, 2023 at 2:37 pm
                                                    </p>
                                                </div>
                                                <button type="button" className="comments-one__card__reply">
                                                    Reply
                                                </button>
                                            </div>
                                            <p className="comments-one__card__text">
                                                Neque porro est qui dolorem ipsum quia quaed inventor
                                                veritatis et quasi architecto beatae vitae dicta sunt
                                                explicabo. Aelltes port lacus quis enim var sed efficitur
                                                turpis gilla sed sit amet finibus eros. Lorem Ipsum is
                                                simply dummy
                                            </p>
                                        </div>
                                    </li>
                                    <li
                                        className="comments-one__card wow fadeInUp"
                                        data-wow-delay="100ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="comments-one__card__image">
                                            <Image
                                                width={500}
                                                height={500}
                                                src="/assets/images/blog/blog-comment-1-2.png"
                                                alt="Sarah albert"
                                            />
                                        </div>
                                        <div className="comments-one__card__content">
                                            <div className="comments-one__card__top">
                                                <div className="comments-one__card__info">
                                                    <h3 className="comments-one__card__title">
                                                        Sarah albert
                                                    </h3>
                                                    <p className="comments-one__card__date">
                                                        March 20, 2023 at 2:37 pm
                                                    </p>
                                                </div>
                                                <button type="button" className="comments-one__card__reply">
                                                    Reply
                                                </button>
                                            </div>
                                            <p className="comments-one__card__text">
                                                Neque porro est qui dolorem ipsum quia quaed inventor
                                                veritatis et quasi architecto beatae vitae dicta sunt
                                                explicabo. Aelltes port lacus quis enim var sed efficitur
                                                turpis gilla sed sit amet finibus eros. Lorem Ipsum is
                                                simply dummy
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="comments-form">
                                <h3 className="comments-form__title">Leave a Comment</h3>
                                <form
                                    action="assets/inc/sendemail.php"
                                    className="comments-form__form contact-form-validated form-one"
                                >
                                    <div className="form-one__group">
                                        <div
                                            className="form-one__control wow fadeInUp"
                                            data-wow-duration="1500ms"
                                            data-wow-delay="00ms"
                                        >
                                            <input type="text" name="name" placeholder="Your Name" />
                                        </div>
                                        <div
                                            className="form-one__control wow fadeInUp"
                                            data-wow-duration="1500ms"
                                            data-wow-delay="50ms"
                                        >
                                            <input type="email" name="email" placeholder="Your Email" />
                                        </div>
                                        <div
                                            className="form-one__control form-one__control--full wow fadeInUp"
                                            data-wow-duration="1500ms"
                                            data-wow-delay="100ms"
                                        >
                                            <textarea
                                                name="message"
                                                placeholder="Write Message . ."
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div
                                            className="form-one__control form-one__control--full wow fadeInUp"
                                            data-wow-duration="1500ms"
                                            data-wow-delay="150ms"
                                        >
                                            <button type="submit" className="boskery-btn">
                                                <span className="boskery-btn__hover" />
                                                <span className="boskery-btn__hover" />
                                                <span className="boskery-btn__hover" />
                                                <span className="boskery-btn__hover" />
                                                <span className="boskery-btn__hover" />
                                                <span className="boskery-btn__hover" />
                                                <span className="boskery-btn__text">post comment</span>
                                                <i className="icon-meat-3" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="result" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Sidbar;
