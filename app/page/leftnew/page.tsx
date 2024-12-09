import Image from "next/image";
import React from "react";

const NewListLeft = () => {
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
                        new list left sidebar
                    </h2>
                    <ul className="boskery-breadcrumb list-unstyled flex justify-center ">
                        <li>
                            <a href="/" className="text-blue-500">
                                Home
                            </a>
                        </li>
                        <li>
                        <a href="/page/leftnew" className="hover:underline"><span>latest news</span></a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="blog-one blog-one--grid blog-one--sidebar py-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="col-span-1 md:col-span-1">
                            <div className="">
                                <aside className="widget-area">
                                    <div className="sidebar__form sidebar__single">
                                        <h4 className="sidebar__title sidebar__form__title">search here</h4>
                                        {/* /.sidebar__title */}
                                        <form action="#" className="sidebar__search">
                                            <input type="text" placeholder="Search Here" />
                                            <button type="submit" aria-label="search submit">
                                                <span className="icon-search" />
                                            </button>
                                        </form>
                                        {/* /.sidebar__search */}
                                    </div>
                                    {/* /.sidebar__form sidebar__single */}
                                    <div className="sidebar__posts-wrapper sidebar__single">
                                        <h4 className="sidebar__title sidebar__posts-title">Latest posts</h4>
                                        {/* /.sidebar__title */}
                                        <ul className="sidebar__posts list-unstyled">
                                            <li className="sidebar__posts__item">
                                                <div className="sidebar__posts__image">
                                                    <Image width={80} height={100} src="/assets/images/blog/lp-1-1.jpg" alt="Latest posts" />
                                                </div>
                                                {/* /.sidebar__posts__image */}
                                                <div className="sidebar__posts__content">
                                                    <p className="sidebar__posts__meta">
                                                        <a href="#">
                                                            <span className="icon-user" />
                                                            By Admin
                                                        </a>
                                                    </p>
                                                    {/* /.sidebar__posts__date */}
                                                    <h4 className="sidebar__posts__title">
                                                        <a href="/page/newsdetail">
                                                            There are many vario ns of passages of
                                                        </a>
                                                    </h4>
                                                    {/* /.sidebar__posts__title */}
                                                </div>
                                                {/* /.sidebar__posts__content */}
                                            </li>
                                            <li className="sidebar__posts__item">
                                                <div className="sidebar__posts__image">
                                                    <Image width={80} height={100} src="/assets/images/blog/lp-1-2.jpg" alt="Latest posts" />
                                                </div>
                                                {/* /.sidebar__posts__image */}
                                                <div className="sidebar__posts__content">
                                                    <p className="sidebar__posts__meta">
                                                        <a href="#">
                                                            <span className="icon-user" />
                                                            By Admin
                                                        </a>
                                                    </p>
                                                    {/* /.sidebar__posts__date */}
                                                    <h4 className="sidebar__posts__title">
                                                        <a href="/page/newsdetail">
                                                            There are many vario ns of passages of
                                                        </a>
                                                    </h4>
                                                    {/* /.sidebar__posts__title */}
                                                </div>
                                                {/* /.sidebar__posts__content */}
                                            </li>
                                            <li className="sidebar__posts__item">
                                                <div className="sidebar__posts__image">
                                                    <Image width={80} height={100} src="/assets/images/blog/lp-1-3.jpg" alt="Latest posts" />
                                                </div>
                                                {/* /.sidebar__posts__image */}
                                                <div className="sidebar__posts__content">
                                                    <p className="sidebar__posts__meta">
                                                        <a href="#">
                                                            <span className="icon-user" />
                                                            By Admin
                                                        </a>
                                                    </p>
                                                    {/* /.sidebar__posts__date */}
                                                    <h4 className="sidebar__posts__title">
                                                        <a href="/page/newsdetail">
                                                            There are many vario ns of passages of
                                                        </a>
                                                    </h4>
                                                    {/* /.sidebar__posts__title */}
                                                </div>
                                                {/* /.sidebar__posts__content */}
                                            </li>
                                        </ul>
                                        {/* /.sidebar__posts list-unstyled */}
                                    </div>
                                    {/* /.sidebar__posts-wrapper sidebar__single */}
                                    <div className="sidebar__categories-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Categories</h4>
                                        {/* /.sidebar__title */}
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
                                        {/* /.sidebar__categories list-unstyled */}
                                    </div>
                                    {/* /.sidebar__categories-wrapper sidebar__single */}
                                    <div className="sidebar__tags-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Tags</h4>
                                        {/* /.sidebar__title */}
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
                                        {/* /.sidebar__tags */}
                                    </div>
                                    {/* /.sidebar__tags-wrapper sidebar__single */}
                                    <div className="sidebar__comments-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Comments</h4>
                                        {/* /.sidebar__title */}
                                        <ul className="sidebar__comments list-unstyled">
                                            <li>
                                                <div className="sidebar__comments__icon">
                                                    <span className="icon-speech-bubble" />
                                                </div>
                                                {/* /.sidebar__comments__icon */}
                                                <h6 className="sidebar__comments__title">
                                                    <a href="/page/newsdetail">
                                                        Neque porro est qui dolorem ipsum quia quaed inventor
                                                    </a>
                                                </h6>
                                                {/* /.sidebar__comments__title */}
                                            </li>
                                            <li>
                                                <div className="sidebar__comments__icon">
                                                    <span className="icon-speech-bubble" />
                                                </div>
                                                {/* /.sidebar__comments__icon */}
                                                <h6 className="sidebar__comments__title">
                                                    <a href="/page/newsdetail">
                                                        Neque porro est qui dolorem ipsum quia quaed inventor
                                                    </a>
                                                </h6>
                                                {/* /.sidebar__comments__title */}
                                            </li>
                                            <li>
                                                <div className="sidebar__comments__icon">
                                                    <span className="icon-speech-bubble" />
                                                </div>
                                                {/* /.sidebar__comments__icon */}
                                                <h6 className="sidebar__comments__title">
                                                    <a href="/page/newsdetail">
                                                        Neque porro est qui dolorem ipsum quia quaed inventor
                                                    </a>
                                                </h6>
                                                {/* /.sidebar__comments__title */}
                                            </li>
                                        </ul>
                                        {/* /.sidebar__comments list-unstyled */}
                                    </div>
                                    {/* /.sidebar__comments-wrapper sidebar__single */}
                                </aside>
                                
                            </div>
                            
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <div className="row gutter-y-40 flex grid grid-cols-1 gap-4">
                                <div className="col-md-12">
                                    <div className="blog-card blog-card--four wow fadeInUp animated">


                                        <div className="blog-card__image">
                                            <Image
                                                width={770}
                                                height={350}
                                                src="/assets/images/blog/blog-l-1-1.jpg"
                                                alt="There are many variations of passages of available but majority"
                                                className="w-full h-auto"
                                            />
                                            <div className="blog-card__date flex">
                                                <span>25</span> <span>june</span>
                                            </div>
                                            <a href="/page/newsdetail" className="blog-card__hover">
                                                <span className="sr-only">There are many variations of passages of available but majority </span>
                                                <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                                            </a>
                                        </div>
                                        <div className="blog-card__content">
                                            <ul className="list-unstyled blog-card__meta">
                                                <li>
                                                    <a href="#">
                                                        <span className="icon-user"></span> by Admin
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon-chat"></span> 2 Comments
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="blog-card__title">
                                                <a href="/page/newsdetail">Blog Post </a>
                                            </h3>
                                            <p className="blog-card__text">
                                                Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="blog-card blog-card--four wow fadeInUp animated">


                                        <div className="blog-card__image">
                                            <Image
                                                width={770}
                                                height={350}
                                                src="/assets/images/blog/blog-l-1-1.jpg"
                                                alt="There are many variations of passages of available but majority"
                                                className="w-full h-auto"
                                            />
                                            <div className="blog-card__date flex">
                                                <span>25</span> <span>june</span>
                                            </div>
                                            <a href="/page/newsdetail" className="blog-card__hover">
                                                <span className="sr-only">There are many variations of passages of available but majority </span>
                                                <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                                            </a>
                                        </div>
                                        <div className="blog-card__content">
                                            <ul className="list-unstyled blog-card__meta">
                                                <li>
                                                    <a href="#">
                                                        <span className="icon-user"></span> by Admin
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon-chat"></span> 2 Comments
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="blog-card__title">
                                                <a href="/page/newsdetail">Blog Post </a>
                                            </h3>
                                            <p className="blog-card__text">
                                                Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="blog-card blog-card--four wow fadeInUp animated">


                                        <div className="blog-card__image">
                                            <Image
                                                width={770}
                                                height={350}
                                                src="/assets/images/blog/blog-l-1-1.jpg"
                                                alt="There are many variations of passages of available but majority"
                                                className="w-full h-auto"
                                            />
                                            <div className="blog-card__date flex">
                                                <span>25</span> <span>june</span>
                                            </div>
                                            <a href="/page/newsdetail" className="blog-card__hover">
                                                <span className="sr-only">There are many variations of passages of available but majority </span>
                                                <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                                            </a>
                                        </div>
                                        <div className="blog-card__content">
                                            <ul className="list-unstyled blog-card__meta">
                                                <li>
                                                    <a href="#">
                                                        <span className="icon-user"></span> by Admin
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon-chat"></span> 2 Comments
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="blog-card__title">
                                                <a href="/page/newsdetail">Blog Post </a>
                                            </h3>
                                            <p className="blog-card__text">
                                                Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="blog-card blog-card--four wow fadeInUp animated">


                                        <div className="blog-card__image">
                                            <Image
                                                width={770}
                                                height={350}
                                                src="/assets/images/blog/blog-l-1-1.jpg"
                                                alt="There are many variations of passages of available but majority"
                                                className="w-full h-auto"
                                            />
                                            <div className="blog-card__date flex">
                                                <span>25</span> <span>june</span>
                                            </div>
                                            <a href="/page/newsdetail" className="blog-card__hover">
                                                <span className="sr-only">There are many variations of passages of available but majority </span>
                                                <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                                            </a>
                                        </div>
                                        <div className="blog-card__content">
                                            <ul className="list-unstyled blog-card__meta">
                                                <li>
                                                    <a href="#">
                                                        <span className="icon-user"></span> by Admin
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon-chat"></span> 2 Comments
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="blog-card__title">
                                                <a href="/page/newsdetail">Blog Post </a>
                                            </h3>
                                            <p className="blog-card__text">
                                                Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="blog-card blog-card--four wow fadeInUp animated">


                                        <div className="blog-card__image">
                                            <Image
                                                width={770}
                                                height={350}
                                                src="/assets/images/blog/blog-l-1-1.jpg"
                                                alt="There are many variations of passages of available but majority"
                                                className="w-full h-auto"
                                            />
                                            <div className="blog-card__date flex">
                                                <span>25</span> <span>june</span>
                                            </div>
                                            <a href="/page/newsdetail" className="blog-card__hover">
                                                <span className="sr-only">There are many variations of passages of available but majority </span>
                                                <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                                                <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                                            </a>
                                        </div>
                                        <div className="blog-card__content">
                                            <ul className="list-unstyled blog-card__meta">
                                                <li>
                                                    <a href="#">
                                                        <span className="icon-user"></span> by Admin
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon-chat"></span> 2 Comments
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="blog-card__title">
                                                <a href="/page/newsdetail">Blog Post </a>
                                            </h3>
                                            <p className="blog-card__text">
                                                Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <ul className="post-pagination flex space-x-2 mt-4">
                                        <li>
                                            <a href="#">
                                                <span className="icon-arrow-left"></span>
                                            </a>
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
                                            <a href="#">
                                                <span className="icon-arrow-right"></span>
                                            </a>
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

export default NewListLeft;

 