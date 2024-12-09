import React from 'react';

const Checkouts = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="page-header relative" style={{ height: '320px' }}>
                <div className="page-header__bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/banner/banner9.png')" }}></div>

                <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
                    <h2 className="page-header__title text-[40px] md:text-[55px] font-bold text-white text-center">CHECKOUT</h2>
                    <ul className="boskery-breadcrumb flex text-white list-unstyled text-[14px] md:text-[16px]">
                        <li>
                            <a href="/" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="/page/product" className="hover:underline"><span>PRODUCTS</span></a>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-[75rem] mx-auto py-8 md:py-16 px-4 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24r">
                    {/* Billing Details */}
                    <div className="bg-gray-50 p-4 md:p-8 shadow-md rounded-lg w-full xxl:w-[770px] mx-auto ipad:w-[600px]"> {/* Giữ w-[770px] */}
                        <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Billing Details</h2>
                        <form>
                            {['name', 'email', 'company', 'address', 'city', 'zip', 'phone'].map((field, index) => (
                                <div className="mb-4" key={index}>
                                    <label htmlFor={field} className="block font-semibold mb-2">{field.charAt(0).toUpperCase() + field.slice(1)} {field !== 'company' ? '*' : '(Optional)'}</label>
                                    <input type={field === 'email' ? 'email' : 'text'} id={field} name={field} className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" required={field !== 'company'} />
                                </div>
                            ))}
                            <div className="mb-4">
                                <label htmlFor="country" className="block font-semibold mb-2">Country / Region *</label>
                                <select id="country" name="country" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" required>
                                    <option value="">Select A Country</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="state" className="block font-semibold mb-2">State *</label>
                                <select id="state" name="state" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" required>
                                    <option value="">Georgia / Ohio / New York</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" id="create-account" name="create-account" className="mr-2" />
                                    <span>Create an Account?</span>
                                </label>
                            </div>
                            <div className="mb-6">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" id="ship-different" name="ship-different" className="mr-2" />
                                    <span>Ship to a Different Address?</span>
                                </label>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="notes" className="block font-semibold mb-2">Order Notes (Optional)</label>
                                <textarea id="notes" name="notes" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" placeholder="Notes about your order..."></textarea>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 p-4 md:p-8 shadow-md rounded-lg xxl:w-[370px] mx-auto"> {/* Giữ w-[370px] */}
                        <h2 className="text-lg md:text-xl font-bold mb-4">Your Order</h2>
                        <div className="mb-5">
                            {['Organ Meats', 'Exotic Meats', 'Game Meat', 'Processed Meats'].map((item, index) => (
                                <div className="flex justify-between mb-2" key={index}>
                                    <span>{item}</span><span>$15.00</span>
                                </div>
                            ))}
                            <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-2 mt-2">
                                <span>Subtotal</span><span>$999.00</span>
                            </div>
                        </div>
                        <p className="text-xs md:text-sm mb-4">
                            Shipping Address: <br />
                            2801 Lafayette Blvd, Norfolk, Vermont 23509, United States
                        </p>
                        <div className="mb-4">
                            {['Direct Bank Transfer', 'Check Payments', 'Cash on Delivery'].map((method, index) => (
                                <label className="block mb-2" key={index}>
                                    <input type="radio" name="payment" value={method.toLowerCase().replace(/\s+/g, '-')} className="mr-2" /> {method}
                                </label>
                            ))}
                        </div>
                        <a href="#" className="relative-order flex justify-center items-center bg-red-700 text-white ml-[51px] w-[205px] h-[80px] p-0 hidden dt:flex">
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative-order__hover"></span>
                            <span className="relative z-10">Checkout</span>
                            <i className="icon-meat-3 relative z-10 ml-2"></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkouts;
