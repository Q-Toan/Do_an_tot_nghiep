import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-[#1E1D1D]">
      <div
        className="relative bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url(./assets/images/backgrounds/footer-bg.png)',
        }}
      ></div>
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0">
          <div className="w-full md:w-1/4 animate-fadeIn">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                width="119"
                height="33"
                alt="Boskery HTML Template"
              />
            </Link>
          </div>
          <div className="w-full md:w-[40%] animate-fadeIn">
            <form
              action="#"
              data-url="MAILCHIMP_FORM_URL"
              className="flex items-center space-x-3"
              noValidate
            >
              <input
                type="text"
                name="EMAIL"
                style={{marginRight:"-45px"}}
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" style={{marginRight:"20px"}} className="flex-shrink-0">
                <span className="sr-only">submit</span>
                <i className="icon-paper-plane text-[#A42125]"></i>
              </button>
            </form>
            <div className="mc-form__response mt-2"></div>
          </div>
        </div>

        <div className="py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-full animate-fadeIn">
              <div className="footer-widget footer-widget--about">
                <h2 className="footer-widget__title text-xl font-bold">
                  Providing fresh and organic meat from our farm in a very hygienic way.
                </h2>
                
              </div>
            </div>
            <div className="w-full animate-fadeIn">
              <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title text-xl font-bold">Explore</h2>
                <ul className="list-none">
                  <li>
                    <Link href="page/about" className="hover:underline text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="page/checkout" className="hover:underline text-white">
                      Place Order
                    </Link>
                  </li>
                  <li>
                    <Link href="page/ourteam" className="hover:underline text-white">
                      Meet the Team
                    </Link>
                  </li>
                  <li>
                    <Link href="page/newslist" className="hover:underline text-white">
                      Latest News
                    </Link>
                  </li>
                  <li>
                    <Link href="page/contactus" className="hover:underline text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full animate-fadeIn">
              <div className="footer-widget footer-widget--contact"  style={{paddingLeft:"0"}}>
                <h2 className="footer-widget__title text-xl font-bold">Contact</h2>
                <div className="footer-widget__contact">
                  <address className="footer-widget__address">
                    Công Viên phẩn Mền quang trung, Quận 12
                  </address>
                  <ul className="list-none">
                    <li>
                      <span className="icon-paper-plane text-[#A42125]"></span>{" "}
                      <Link href="page/contactus" className="hover:underline text-white">
                        toanlqps31685@fpt.edu.vn
                      </Link>
                    </li>
                    <li>
                      <span className="icon-phone-call text-[#A42125]"></span>{" "}
                      <Link href="tel:+9156980036420" className="hover:underline text-white">
                        +84 336 379 906
                      </Link>
                    </li>
                  </ul>
                  <div className="footer-widget__social flex space-x-4">
                    <Link href="https://facebook.com" className="text-gray-500 ">
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="https://twitter.com" className="text-gray-500 ">
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://linkedin.com" className="text-gray-500 ">
                      <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                      <span className="sr-only">Linkedin</span>
                    </Link>
                    <Link href="https://youtube.com" aria-hidden="true" className="text-gray-500 ">
                      <i className="fab fa-youtube"></i>
                      <span className="sr-only">Youtube</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full animate-fadeIn">
              <div className="footer-widget footer-widget--gallery">
                <h2 className="footer-widget__title text-xl font-bold">Gallery</h2>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <Link href="/page/galleryfillter" className="relative block w-[83px]">
                    <Image
                      src="/images/sanpham/nen9.png"
                      width={83}
                      height={83}
                      alt="footer-widget-gallery"
                      className="w-full h-auto"
                    />
                    <span className="footer-widget__gallery__icon absolute top-0 right-0 p-2 bg-white rounded-full">
                      <i className="icon-plus"></i>
                    </span>
                  </Link>
                  <Link href="/page/galleryfillter" className="relative block w-[83px]">
                    <Image
                      src="/images/sanpham/sp6.png"
                      width={83}
                      height={83}
                      alt="footer-widget-gallery"
                      className="w-full h-auto"
                    />
                    <span className="footer-widget__gallery__icon absolute top-0 right-0 p-2 bg-white rounded-full">
                      <i className="icon-plus"></i>
                    </span>
                  </Link>
                  <Link href="/page/galleryfillter" className="relative block w-[83px]">
                    <Image
                      src="/images/sanpham/sp3.png"
                      width={83}
                      height={83}
                      alt="footer-widget-gallery"
                      className="w-full h-auto"
                    />
                    <span className="footer-widget__gallery__icon absolute top-0 right-0 p-2 bg-white rounded-full">
                      <i className="icon-plus"></i>
                    </span>
                  </Link>
                  <Link href="/page/galleryfillter" className="relative block w-[83px]">
                    <Image
                      src="/images/sanpham/sp5.png"
                      width={83}
                      height={83}
                      alt="footer-widget-gallery"
                      className="w-full h-auto"
                    />
                    <span className="footer-widget__gallery__icon absolute top-0 right-0 p-2 bg-white rounded-full">
                      <i className="icon-plus"></i>
                    </span>
                  </Link>
                  <Link href="/page/galleryfillter" className="relative block w-[83px]">
                    <Image
                      src="/images/sanpham/sp7.png"
                      width={83}
                      height={83}
                      alt="footer-widget-gallery"
                      className="w-full h-auto"
                    />
                    <span className="footer-widget__gallery__icon absolute top-0 right-0 p-2 bg-white rounded-full">
                      <i className="icon-plus"></i>
                    </span>
                  </Link>
                  <Link href="/page/galleryfillter" className="relative block w-[83px]">
                    <Image
                      src="/images/sanpham/nen7.png"
                      width={83}
                      height={83}
                      alt="footer-widget-gallery"
                      className="w-full h-auto"
                    />
                    <span className="footer-widget__gallery__icon absolute top-0 right-0 p-2 bg-white rounded-full">
                      <i className="icon-plus"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <p className="text-white">
              © Copyright <span className="dynamic-year">2024</span> by Team 5
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
