import Image from "next/image";
import React from "react";

const NewGridLeft = () => {
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
                        New Grid Left Sidebar
                    </h2>
                    <ul className="boskery-breadcrumb list-unstyled flex justify-center space-x-4">
                        <li>
                            <a href="/" className="text-blue-500">Home</a>
                        </li>
                        <li>
                            <span>Latest News</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="blog-one blog-one--grid blog-one--sidebar py-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="col-span-1">
                            <aside className="widget-area">
                                <div className="sidebar__form sidebar__single">
                                    <h4 className="sidebar__title">Search Here</h4>
                                    <form action="#" className="sidebar__search">
                                        <input type="text" placeholder="Search Here" />
                                        <button type="submit" aria-label="search submit">
                                            <span className="icon-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="sidebar__posts-wrapper sidebar__single">
                                    <h4 className="sidebar__title">Latest Posts</h4>
                                    <ul className="sidebar__posts list-unstyled">
                                        <li className="sidebar__posts__item">
                                            <div className="sidebar__posts__image">
                                                <Image
                                                    width={80}
                                                    height={100}
                                                    src="/assets/images/blog/lp-1-1.jpg"
                                                    alt="Latest posts"
                                                />
                                            </div>
                                            <div className="sidebar__posts__content">
                                                <p className="sidebar__posts__meta">
                                                    <a href="#">
                                                        <span className="icon-user" /> By Admin
                                                    </a>
                                                </p>
                                                <h4 className="sidebar__posts__title">
                                                    <a href="/page/newsdetail">
                                                        There are many variations of passages of
                                                    </a>
                                                </h4>
                                            </div>
                                        </li>
                                        {/* Tiếp tục tương tự với các bài đăng khác */}
                                    </ul>
                                </div>
                                {/* Sidebar categories */}
                                <div className="sidebar__categories-wrapper sidebar__single">
                                    <h4 className="sidebar__title">Categories</h4>
                                    <ul className="sidebar__categories list-unstyled">
                                        <li><a href="/page/newsdetail">Organ Meat <span>(1)</span></a></li>
                                        <li><a href="/page/newsdetail">Game Meat <span>(2)</span></a></li>
                                    </ul>
                                </div>
                                {/* Sidebar tags */}
                                <div className="sidebar__tags-wrapper sidebar__single">
                                    <h4 className="sidebar__title">Tags</h4>
                                    <div className="sidebar__tags">
                                        <a href="/page/newsdetail">Poultry</a>
                                        <a href="/page/newsdetail">Organ Meats</a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="blog-card">
                                    <div className="blog-card__content">
                                        <h3 className="blog-card__title">
                                            <a href="/page/newsdetail">
                                                The 10 Best Principles of Storage for Different Types of Meat
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                {/* Tiếp tục với các bài viết khác */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewGridLeft;
