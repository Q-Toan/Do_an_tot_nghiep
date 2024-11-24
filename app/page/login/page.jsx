"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Đảo ngược trạng thái hiện mật khẩu
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // Logic xử lý đăng nhập
    console.log("Logging in with", { email, password });
    // Chuyển hướng đến trang chính sau khi đăng nhập thành công
    router.push('/');
  };

  return (
    <>
      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }}></div>
        <div className="max-w-[100%] relative text-center">
          <h2 className="page-header__title">Log In</h2>
          <ul className="boskery-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li>
            <a href="/page/login" className="hover:underline"><span>Log In</span></a>
            </li>
          </ul>
        </div>
      </section>

      <section className="login-page">
        <div className="max-w-[100%]">
          <div className="row">
            <div className="col-md-12">
              <div className="login-page__inner">
                <div className="login-page__image wow fadeInLeft" data-wow-duration="1500ms">
                  <Image src="/images/login.png" alt="login"width={659} height={816}  />
                </div>

                <div className="login-page__wrap login-page__main-tab-box wow fadeInRight" data-wow-duration="1500ms">
                  <div className="login-page__wrap__bg" style={{ backgroundImage: 'url(/assets/images/shapes/login-bg-1.png)' }}></div>

                  <div className="login-page__wrap__top">
                    <div className="login-page__wrap__content">
                      <h3 className="login-page__title">Welcome</h3>
                    </div>

                    <ul className="tab-buttons">
                      <li
                        className={"tab-btn relative-order active-btn"}
                      >
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <a href="/page/login" className="relative-order__text">Log In</a>
                       
                      </li>
                      <li
                        className={`tab-btn relative-order`}
                      >
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <a href="/page/register" className="relative-order__text">Register</a>
                        {/* <span className="relative-order__text">Register</span> */}
                      </li>
                    </ul>
                  </div>

                  <div className="tabs-content">   
                      <div className="tab active-tab fadeInUp animated" data-wow-delay="200ms">
                        <span className="login-page__tab-title">Sign in your Boskery account</span>
                        <form className="login-page__form" onSubmit={handleLogin}>
                          <div className="login-page__form__input-box">
                            <input
                              type="email"
                              placeholder="Your Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="icon-email"></span>
                          </div>
                          <div className="login-page__form__input-box">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Password"
                              className="login-page__password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="icon-padlock"></span>
                            <i
                              className={`toggle-password pass-field-icon fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                              onClick={togglePasswordVisibility}
                            ></i>
                          </div>
                          <div className="login-page__form__input-box login-page__form__input-box--forgot">
                            <a href="#" className="login-page__form__forgot">Forgot password?</a>
                          </div>
                          <div className="login-page__form__input-box login-page__form__input-box--button">
                            <button type="submit" className="relative-order login-page__form__btn">Log In</button>
                          </div>
                          <div className="login-page__form__input-box login-page__form__input-box--checkbox">
                            <div className="login-page__form__checked-box">
                              <input type="checkbox" name="remember-policy" id="remember-policy" />
                              <label htmlFor="remember-policy"><span></span>Remember me</label>
                            </div>
                          </div>
                        </form>
                        <div className="login-page__signin">
                          <h4 className="login-page__signin__title">Don’t have an account? <a href="/page/register">Register</a></h4>
                          <span className="login-page__signin__text">Or sign in with</span>
                          <div className="login-page__signin__buttons">
                            <button type="button" className="login-page__signin__btn">
                              <Image src="/assets/images/resources/google.png" alt="google" width={24} height={24} />
                            </button>
                            <button type="button" className="login-page__signin__btn">
                              <Image src="/assets/images/resources/apple.png" alt="apple" width={24} height={24} />
                            </button>
                            <button type="button" className="login-page__signin__btn">
                              <Image src="/assets/images/resources/facebook.png" alt="facebook" width={24} height={24} />
                            </button>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
