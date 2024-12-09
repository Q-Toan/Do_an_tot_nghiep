import Image from "next/image";
import React from "react";

function Galleryfillter() {
  return (
    <div>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/page-header-bg.jpg)",
          }}
        />

        <div className="container mx-auto">
          <h2 className="page-header__title">gallery filter</h2>
          <ul className="boskery-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
            <a href="/page/galleryfillter" className="hover:underline"><span>our gallery</span></a>
            </li>
          </ul>
        </div>
      </section>
      <section className="gallery-page section-space">
        <div className="container mx-auto">
          <div className="text-center">
            <ul className="list-unstyled post-filter gallery-page__filter__list flex">
              <li class="boskery-btn active" data-filter=".filter-item">
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span>all</span>
              </li>
              <li class="boskery-btn" data-filter=".ground-beef">
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span>Ground beef</span>
              </li>
              <li class="boskery-btn" data-filter=".ground-beef">
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span>Ground beef</span>
              </li>
              <li class="boskery-btn" data-filter=".ground-beef">
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span>Ground beef</span>
              </li>
              <li class="boskery-btn" data-filter=".ground-beef">
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span>Ground beef</span>
              </li>
              <li class="boskery-btn" data-filter=".ground-beef">
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span>Ground beef</span>
              </li>
              <li class="boskery-btn" data-filter=".ground-beef">
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span class="boskery-btn__hover"></span>
                <span>Ground beef</span>
              </li>
            </ul>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
            style={{ height: "1600px" }}
          >
            <div
              className="col-md-6 col-lg-4 filter-item game-meat absolute"
              style={{ left: "0px", top: "0px" }}
            >
              <div className="gallery-page__card">
                <Image
                width={500}
                height={500}
                  src="/assets/images/gallery/gallery-1-1.jpg"
                  alt="gallery image"
                  className="w-full h-auto"
                />
                <div className="gallery-page__card__hover">
                  <a
                    href="/assets/images/gallery/gallery-1-1.jpg"
                    className="img-popup"
                  >
                    <span className="gallery-page__card__icon"></span>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 filter-item ground-beef sausages-meat absolute"
              style={{ left: "400px", top: "0px" }}
            >
              <div className="gallery-page__card">
                <Image
                width={500}
                height={500}
                  src="/assets/images/gallery/gallery-1-2.jpg"
                  alt="gallery image"
                  className="w-full h-auto"
                />
                <div className="gallery-page__card__hover">
                  <a
                    href="/assets/images/gallery/gallery-1-2.jpg"
                    className="img-popup"
                  >
                    <span className="gallery-page__card__icon"></span>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 filter-item veal-cutlets game-meat fried-meat absolute"
              style={{ left: "800px", top: "0px" }}
            >
              <div className="gallery-page__card">
                <Image
                width={500}
                height={500}
                  src="/assets/images/gallery/gallery-1-3.jpg"
                  alt="gallery image"
                  className="w-full h-auto"
                />
                <div className="gallery-page__card__hover">
                  <a
                    href="/assets/images/gallery/gallery-1-3.jpg"
                    className="img-popup"
                  >
                    <span className="gallery-page__card__icon"></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-8 filter-item veal-cutlets game-meat absolute"
              style={{ left: "400px", top: "400px" }}
            >
              <div className="gallery-page__card">
                <Image
                width={770}
                height={370}
                  src="/assets/images/gallery/gallery-1-4.jpg"
                  alt="gallery image"
                  className="w-full"
                />
                <div className="gallery-page__card__hover">
                  <a
                    href="/assets/images/gallery/gallery-1-4.jpg"
                    className="img-popup"
                  >
                    <span className="gallery-page__card__icon"></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 filter-item ground-beef sausages-meat absolute"
              style={{ left: "0px", top: "800px" }}
            >
              <div className="gallery-page__card">
                <Image
                width={500}
                height={500}
                  src="/assets/images/gallery/gallery-1-2.jpg"
                  alt="gallery image"
                  className="w-full h-auto"
                />
                <div className="gallery-page__card__hover">
                  <a
                    href="/assets/images/gallery/gallery-1-2.jpg"
                    className="img-popup"
                  >
                    <span className="gallery-page__card__icon"></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 filter-item veal-cutlets game-meat fried-meat absolute"
              style={{ left: "400px", top: "800px" }}
            >
              <div className="gallery-page__card">
                <Image
                width={500}
                height={500}
                  src="/assets/images/gallery/gallery-1-3.jpg"
                  alt="gallery image"
                  className="w-full h-auto"
                />
                <div className="gallery-page__card__hover">
                  <a
                    href="/assets/images/gallery/gallery-1-3.jpg"
                    className="img-popup"
                  >
                    <span className="gallery-page__card__icon"></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 filter-item game-meat absolute"
              style={{ left: "800px", top: "800px" }}
            >
              <div className="gallery-page__card">
                <Image
                width={500}
                height={500}
                  src="/assets/images/gallery/gallery-1-1.jpg"
                  alt="gallery image"
                  className="w-full h-auto"
                />
                <div className="gallery-page__card__hover">
                  <a
                    href="/assets/images/gallery/gallery-1-1.jpg"
                    className="img-popup"
                  >
                    <span className="gallery-page__card__icon"></span>
                  </a>
                </div>
              </div>
                      </div>
                      <div
              className="col-md-6 col-lg-8 filter-item veal-cutlets game-meat absolute"
              style={{ left: "0px", top: "1200px" }}
            >
              <div className="gallery-page__card">
                <Image
                width={770}
                height={370}
                  src="/assets/images/gallery/gallery-1-4.jpg"
                  alt="gallery image"
                  className="w-full"
                />
                <div className="gallery-page__card__hover">
                  <a
                    href="/assets/images/gallery/gallery-1-4.jpg"
                    className="img-popup"
                  >
                    <span className="gallery-page__card__icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Galleryfillter;
