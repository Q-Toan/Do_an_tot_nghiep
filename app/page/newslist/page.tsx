// components/BlogSection.tsx
import Image from 'next/image';
import React from 'react';

const BlogSection: React.FC = () => {
    return (
        <>

            <section className="page-header relative" style={{ height: '320px' }}>
                <div
                    className="page-header__bg absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/backgrounds/page-header-bg.jpg')",
                    }}
                ></div>

                <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
                    <h2 className="page-header__title text-[55px] font-bold text-white text-center">NEW LIST</h2>
                    <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
                        <li>
                            <a href="index.html" className="hover:underline">Home</a>
                        </li>

                        <li>
                            <span>LATEST NEWS</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="blog-one blog-one--list section-space ">
                <div className="container mx-auto px-4">
                    <div className="row justify-center flex  ">
                        <div className="col-lg-8 lg:w-8/12">
                            <div className="row gutter-y-40 flex grid grid-cols-1 gap-y-10 ">


                                <div className="col-md-12  ">
                                    <div className="blog-card blog-card--four wow fadeInUp" >
                                        <div className="blog-card__image relative">
                                            <Image width={770} height={350} src="/assets/images/blog/blog-l-1-1.jpg"
                                                alt="There are many variations of passages of available but majority"
                                                className="w-full h-auto" />
                                            <div className="blog-card__date flex ">
                                                <span >25</span> <span>june</span>
                                            </div>
                                            <a href="/page/newsdetail" className="blog-card__hover  ">
                                                <span className="sr-only">There are many variations of passages of available but majority</span>
                                                <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                                            </a>
                                        </div>
                                        <div className="blog-card__content">
                                            <ul className="list-unstyled blog-card__meta flex space-x-4 mb-2 text-sm ">
                                                <li>
                                                    <a href="#" >
                                                        <span className="icon-user"></span>
                                                        <span>by Admin</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon-chat"></span>
                                                        <span>2 Comments</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="blog-card__title ">
                                                <a href="/page/newsdetail">There are many variations of passages of available but majority</a>
                                            </h3>
                                            <p className="blog-card__text ">
                                                Neque porro est qui dolorem ipsum quia quaed inventor
                                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="blog-card blog-card--four wow fadeInUp" >
                                        <div className="blog-card__image relative">
                                            <Image width={770} height={350} src="/assets/images/blog/blog-l-1-1.jpg"
                                                alt="Blog post"
                                                className="w-full h-auto" />
                                            <div className="blog-card__date flex absolute top-0 left-0 bg-white p-2">
                                                <span className="text-lg font-bold">25</span> <span className="text-sm">june</span>
                                            </div>
                                            <a href="/page/newsdetail" className="blog-card__hover  ">
                                                <span className="sr-only">There are many variations of passages of available but majority</span>
                                                <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                                            </a>
                                        </div>
                                        <div className="blog-card__content p-4">
                                            <ul className="list-unstyled blog-card__meta flex space-x-4 mb-2 text-sm ">
                                                <li>
                                                    <a href="#" className="flex items-center space-x-1">
                                                        <span className="icon-user"></span>
                                                        <span>by Admin</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex items-center space-x-1">
                                                        <span className="icon-chat"></span>
                                                        <span>2 Comments</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="blog-card__title text-lg font-semibold">
                                                <a href="/page/newsdetail">There are many variations of passages of available but majority</a>
                                            </h3>
                                            <p className="blog-card__text ">
                                                Neque porro est qui dolorem ipsum quia quaed inventor
                                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="blog-card blog-card--four wow fadeInUp" >
                                        <div className="blog-card__image relative">
                                            <Image width={770} height={350} src="/assets/images/blog/blog-l-1-1.jpg"
                                                alt="Blog post"
                                                className="w-full h-auto" />
                                            <div className="blog-card__date flex absolute top-0 left-0 bg-white p-2">
                                                <span className="text-lg font-bold">25</span> <span className="text-sm">june</span>
                                            </div>
                                            <a href="/page/newsdetail" className="blog-card__hover  ">
                                                <span className="sr-only">There are many variations of passages of available but majority</span>
                                                <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                                            </a>
                                        </div>
                                        <div className="blog-card__content p-4">
                                            <ul className="list-unstyled blog-card__meta flex space-x-4 mb-2 text-sm ">
                                                <li>
                                                    <a href="#" className="flex items-center space-x-1">
                                                        <span className="icon-user"></span>
                                                        <span>by Admin</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex items-center space-x-1">
                                                        <span className="icon-chat"></span>
                                                        <span>2 Comments</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="blog-card__title text-lg font-semibold">
                                                <a href="/page/newsdetail">There are many variations of passages of available but majority</a>
                                            </h3>
                                            <p className="blog-card__text ">
                                                Neque porro est qui dolorem ipsum quia quaed inventor
                                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="blog-card blog-card--four wow fadeInUp" >
                                        <div className="blog-card__image relative">
                                            <Image width={770} height={350} src="/assets/images/blog/blog-l-1-1.jpg"
                                                alt="Blog post"
                                                className="w-full h-auto" />
                                            <div className="blog-card__date flex absolute top-0 left-0 bg-white p-2">
                                                <span className="text-lg font-bold">25</span> <span className="text-sm">june</span>
                                            </div>
                                            <a href="/page/newsdetail" className="blog-card__hover  ">
                                                <span className="sr-only">There are many variations of passages of available but majority</span>
                                                <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                                            </a>
                                        </div>
                                        <div className="blog-card__content p-4">
                                            <ul className="list-unstyled blog-card__meta flex space-x-4 mb-2 text-sm ">
                                                <li>
                                                    <a href="#" className="flex items-center space-x-1">
                                                        <span className="icon-user"></span>
                                                        <span>by Admin</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex items-center space-x-1">
                                                        <span className="icon-chat"></span>
                                                        <span>2 Comments</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="blog-card__title text-lg font-semibold">
                                                <a href="/page/newsdetail">There are many variations of passages of available but majority</a>
                                            </h3>
                                            <p className="blog-card__text ">
                                                Neque porro est qui dolorem ipsum quia quaed inventor
                                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="blog-card blog-card--four wow fadeInUp" >
                                        <div className="blog-card__image relative">
                                            <Image width={770} height={350} src="/assets/images/blog/blog-l-1-1.jpg"
                                                alt="Blog post"
                                                className="w-full h-auto" />
                                            <div className="blog-card__date flex absolute top-0 left-0 bg-white p-2">
                                                <span className="text-lg font-bold">25</span> <span className="text-sm">june</span>
                                            </div>
                                            <a href="/page/newsdetail" className="blog-card__hover  ">
                                                <span className="sr-only">There are many variations of passages of available but majority</span>
                                                <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                                            </a>
                                        </div>
                                        <div className="blog-card__content p-4">
                                            <ul className="list-unstyled blog-card__meta flex space-x-4 mb-2 text-sm ">
                                                <li>
                                                    <a href="#" className="flex items-center space-x-1">
                                                        <span className="icon-user"></span>
                                                        <span>by Admin</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex items-center space-x-1">
                                                        <span className="icon-chat"></span>
                                                        <span>2 Comments</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="blog-card__title text-lg font-semibold">
                                                <a href="/page/newsdetail">There are many variations of passages of available but majority</a>
                                            </h3>
                                            <p className="blog-card__text ">
                                                Neque porro est qui dolorem ipsum quia quaed inventor
                                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <ul className="flex justify-center space-x-2 post-pagination">
                                        <li>
                                            <a href="#"><span className="icon-arrow-left"></span></a>
                                        </li>
                                        <li>
                                            <a href="#">01</a>
                                        </li>
                                        <li>
                                            <a href="#">02</a>
                                        </li>
                                        <li>
                                            <a href="#">03</a>
                                        </li>
                                        <li className="active">
                                            <a href="#"><span className="icon-arrow-right"></span></a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogSection;
