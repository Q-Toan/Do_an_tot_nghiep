"use client";
import { useState, useRef, useEffect } from 'react';
import MobileNav from '../component/MobileNav';
import SearchPopup from '../component/SearchPopup';
import Image from 'next/image';
import Link from 'next/link';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);
    const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
    const currentPage = 'home'; 
    const mainMenuRef = useRef(null);
    const mobileNavRef = useRef(null);

    useEffect(() => {
        // Lấy tên file từ URL
        const fileName = window.location.href.split("/").pop();

        const mainNavUL = mainMenuRef.current;
        if (mainNavUL) {
            mainNavUL.querySelectorAll("li").forEach(li => {
                const anchor = li.querySelector("a");
                if (anchor && anchor.getAttribute("href") === fileName) {
                    li.classList.add("current");
                }
            });
        }

        const mobileNavContainer = mobileNavRef.current;
        if (mobileNavContainer && mainNavUL) {
            mobileNavContainer.innerHTML = mainNavUL.innerHTML; // Sao chép nội dung
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(prev => !prev); // Đảo ngược trạng thái của menu
    };
    // const toggleSearchPopup = () => {
    //     setIsSearchPopupOpen(prev => !prev); 
    // };
    const openPopup = () => setIsSearchPopupOpen(true);
    const closePopup = () => setIsSearchPopupOpen(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev); // Đảo ngược trạng thái của menu con
    };

    const toggleShopDropdown = () => {
        setIsShopDropdownOpen(prev => !prev); // Đảo ngược trạng thái của menu Shop
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(prev => !prev); // Đảo ngollectors
    };

    const toggleNewsDropdown = () => {
        setIsNewsDropdownOpen(prev => !prev); // Đảo ngollectors
    };

    return (
        <header className="w-full flex justify-start items-center bg-white pl-30 font-boskery-heading-font">
            <MobileNav isOpen={isOpen}
                toggleMenu={toggleMenu}
                currentPage={currentPage}
                isDropdownOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
                isShopDropdownOpen={isShopDropdownOpen}
                toggleShopDropdown={toggleShopDropdown}
                isServicesDropdownOpen={isServicesDropdownOpen}
                toggleServicesDropdown={toggleServicesDropdown}
                isNewsDropdownOpen={isNewsDropdownOpen}
                toggleNewsDropdown={toggleNewsDropdown}
                 />
            <SearchPopup isSearchPopupOpen={isSearchPopupOpen} closePopup={closePopup}  />
            <div className="flex items-center space-x-4" style={{ marginRight: "78px" }}>
                <Image src="/assets/images/logo-dark.png" alt="Company Logo" width={100} height={100} className="w-[100px] h-full" style={{ maxWidth: "100px" }} />
            </div>

            <div className="w-full">
                <div className="bg-red-700 text-white flex justify-between items-center px-[70px] py-3 hidden md:flex">
                    <div className="flex items-center space-x-4 hidden xxl:flex">
                        <i className="fas fa-envelope"></i>
                        <span className='hover:underline'>needhelp@company.com</span>
                        <i className="fas fa-map-marker-alt"></i>
                        <span className='hover:underline'>85 Ketch Harbour Road Bensalem, PA 19020</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ul className="list-unstyled topbar__pages flex space-x-4">
                            <li><Link href="page/contactus" className="text-white hover:text-black">Help</Link></li>
                            <li><Link href="page/contactus" className="text-white hover:text-black">Support</Link></li>
                            <li><Link href="page/contactus" className="text-white hover:text-black">Contact</Link></li>
                        </ul>
                        <div className="flex space-x-4">
                            <i className="fab fa-facebook-f hover:text-black"></i>
                            <i className="fab fa-twitter hover:text-black"></i>
                            <i className="fab fa-pinterest hover:text-black"></i>
                            <i className="fab fa-instagram hover:text-black"></i>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex justify-between items-center pl-4">
                    <nav className="relative z-50"> {/* Add a z-index for the entire nav */}
                        <ul className="hidden xxl:flex lg:space-x-6">
                            {['home', 'about us', 'services', 'pages', 'shop', 'news', 'Contact Us'].map((page) => (
                                <li key={page} className="relative">
                                    <a
                                        href={page === 'about us' ? '/page/about' : page === 'Contact Us' ? '/page/contactus' : page === 'login' ? '/page/login' : page === 'home' ? '/' : page=== 'news grid' ? '/page/newsgrid' : `/${page}`} // Correct the homepage condition
                                        className={`text-gray-700 hover:text-black hover:font-bold text-[16px] ${currentPage === page ? 'font-bold text-black' : ''}`}
                                        onClick={
                                            page === 'pages' ? (e) => { e.preventDefault(); toggleDropdown(); } : 
                                            page === 'shop' ? (e) => { e.preventDefault(); toggleShopDropdown(); } : 
                                            page === 'services' ? (e) => { e.preventDefault(); toggleServicesDropdown(); } : 
                                            page === 'news' ? (e) => { e.preventDefault(); toggleNewsDropdown(); } : undefined}
                                    >
                                        {page.toUpperCase()}
                                    </a>

                                    {/* Submenu for "Pages" */}
                                    {page === 'pages' && (
                                        <ul
                                            className={`absolute left-0 bg-white shadow-lg rounded-md mt-2 transition-all w-[200px] z-50 duration-300 ease-in-out transform ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}
                                            style={{ transformOrigin: 'top left' }} // Ensure smooth scaling
                                        >
                                            <li><a href="/page/ourteam" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</a></li>
                                            <li><a href="/page/teamcarousel" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Team Carousel</a></li>
                                            <li><a href="/page/teamdetail" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Team detail</a></li>
                                            <li><a href="/page/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Pricing</a></li>
                                            <li><a href="/page/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Testimonials</a></li>
                                            <li><a href="/page/galleryfillter" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Gallery</a></li>
                                            <li><a href="/page/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">FAQ</a></li>
                                            <li><a href="/page/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</a></li>
                                            <li><a href="/page/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Register</a></li>
                                            <li><a href="/page/editprofile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Edit Profile</a></li>
                                            <li><a href="/page/purchasehistory" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Purchase History</a></li>
                                            <li><a href="/page/vieworder" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">View Order</a></li>

                                        </ul>
                                    )}

                                     {/* Submenu for "Shop" */}
                                     {page === 'shop' && (
                                        <ul
                                            className={`absolute left-0 bg-white shadow-lg rounded-md mt-2 transition-all w-[200px] z-50 duration-300 ease-in-out transform ${isShopDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}
                                            style={{ transformOrigin: 'top left' }}
                                        >
                                            <li><a href="/page/product" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product</a></li>
                                            <li><a href="/page/productcarousel" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product Carousel</a></li>
                                            <li><a href="/page/product-detail" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product Detail</a></li>
                                            <li><a href="/page/cart" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cart</a></li>
                                            <li><a href="/page/checkout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Check Out</a></li>
                                        </ul>
                                    )}

                                    {/* Submenu for "Services" */}
                                    {page === 'services' && (
                                        <ul
                                        className={`absolute left-0 bg-white shadow-lg rounded-md mt-2 transition-all w-[200px] z-50 duration-300 ease-in-out transform ${isServicesDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}
                                            style={{ transformOrigin: 'top left' }}>
                                            <li><a href="/page/servicescarousel" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services Carousel</a></li>
                                            <li><a href="/page/service-details" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Custom Cutting</a></li>
                                        </ul>
                                    )}

                                    {/* submenu for news */}
                                    {page === 'news' && (
                                        <ul
                                        className={`absolute left-0 bg-white shadow-lg rounded-md mt-2 transition-all w-[200px] z-50 duration-300 ease-in-out transform ${isNewsDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}
                                            style={{ transformOrigin: 'top left' }}>
                                            <li><a href="/page/newsgrid" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">News Grid</a></li>
                                            <li><a href="/page/newslist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">News List</a></li>
                                            <li><a href="/page/leftnew" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">News List Left Sidebar</a></li>
                                            <li><a href="/page/rightlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">News List Right Sidebar</a></li>
                                            <li><a href="/page/newsdetail" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">News Detail</a></li>
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Mobile navigation button */}
                        <div className="mobile-nav__btn mobile-nav__toggler flex flex-col justify-center items-center cursor-pointer xxl:hidden ml-4" onClick={toggleMenu}>
                            <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
                            <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
                            <span className="block w-6 h-1 bg-gray-700"></span>
                        </div>
                    </nav>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 hidden xl:flex gap-[20px]">
                            <span className="main-header__call__icon icon-mobile"></span>
                            <div>
                                <span className="">CALL ANYTIME</span>
                                <span className="block text-black font-bold">+ 92(8800) - 9850</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 ">
                            <Link href="#" onClick={openPopup} className="search-toggler main-header__search flex items-center text-black hover:text-red-700">
                                <i className="fas fa-search"></i>
                                <span className="sr-only">Search</span>
                            </Link>
                            <i className="fas fa-shopping-cart text-black"></i>
                        </div>
                       <div className="flex justify-center items-center hidden  dt:flex">
                        <Link href="/page/contactus" className="relative-order flex justify-center items-center bg-red-700 text-white ml-[51px] w-[205px] h-[80px] p-0" style={{ paddingTop: '32px' }}>
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative z-10">Order Now</span>
                            <i className="icon-meat-3 relative z-10 ml-2"></i>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
