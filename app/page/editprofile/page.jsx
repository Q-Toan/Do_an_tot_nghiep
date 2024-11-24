import React from 'react';

import "../../../public/styles/profile-edit.css";

import Image from 'next/image';

const ProfileEdit = () => {
    return (
        <div className="container w-full mx-auto my-5 max-w-screen-xl shadow-lg rounded-lg overflow-hidden bg-white">
            <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <div className="lg:w-1/4 w-full p-5 text-black mb-5 lg:mb-0"> {/* Thêm khoảng cách giữa menu và content */}
                    <div className="flex flex-col items-center justify-center">
                        <Image src="assets/images/faker.jpg" alt="Avatar" width={30} height={30} className="w-30 h-30 rounded-full mb-4" />
                        <h3 className="mb-4 text-lg">Lee Sang-hyeok</h3>
                    </div>
                    <ul className="list-none">
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 text-base transition-colors">
                            <i className="fas fa-user mr-3"></i> Thông tin tài khoản
                        </li>
                        <hr className="border-none border-b border-gray-400 my-2" />
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 text-base transition-colors">
                            <i className="fas fa-map-marker-alt mr-3"></i> Sổ địa chỉ
                        </li>
                        <hr className="border-none border-b border-gray-400 my-2" />
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 text-base transition-colors">
                            <i className="fas fa-box mr-3"></i> Quản lý đơn hàng
                        </li>
                        <hr className="border-none border-b border-gray-400 my-2" />
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 text-base transition-colors">
                            <i className="fas fa-bell mr-3"></i> Thông báo
                        </li>
                        <hr className="border-none border-b border-gray-400 my-2" />
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 text-base transition-colors">
                            <i className="fas fa-tag mr-3"></i> Mã giảm giá
                        </li>
                        <hr className="border-none border-b border-gray-400 my-2" />
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 text-base transition-colors">
                            <i className="fas fa-gift mr-3"></i> Membership
                        </li>
                        <hr className="border-none border-b border-gray-400 my-2" />
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 text-base transition-colors">
                            <i className="fas fa-eye mr-3"></i> Sản phẩm đã xem
                        </li>
                    </ul>
                </div>

                {/* Content */}
                <div className="lg:w-3/4 w-full p-5">
                    <h1 className="text-2xl font-bold text-gray-800 mb-5">Thông Tin Tài Khoản</h1>
                    
                    <div className="flex flex-wrap mx-2">
                        {/* Personal Info */}
                        <div className="w-full lg:w-1/2 p-2 mb-6"> {/* Thêm khoảng cách dưới Personal Info */}
                            <h2 className="text-xl text-gray-800 mb-4">Thông Tin Cá Nhân</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Họ tên</label>
                                <input type="text" placeholder="Nhập họ tên" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Nickname</label>
                                <input type="text" placeholder="Nhập nickname" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div className="flex space-x-2 mb-4">
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Ngày</label>
                                    <select className="w-full p-2 border border-gray-300 rounded">
                                        <option value="">DD</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Tháng</label>
                                    <select className="w-full p-2 border border-gray-300 rounded">
                                        <option value="">MM</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Năm</label>
                                    <select className="w-full p-2 border border-gray-300 rounded">
                                        <option value="">YYYY</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Giới tính</label>
                                <div className="space-x-4">
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="gender" className="form-radio" defaultChecked /> Nam
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="gender" className="form-radio" /> Nữ
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="gender" className="form-radio" /> Khác
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Quốc tịch</label>
                                <select className="w-full p-2 border border-gray-300 rounded">
                                    <option>Chọn quốc tịch</option>
                                </select>
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-red-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all">Lưu</button>
                            </div>
                        </div>

                        {/* Account Info */}
                        <div className="w-full lg:w-1/2 p-2 mb-6 "> {/* Thêm khoảng cách dưới Account Info */}
                            <h2 className="text-xl text-gray-800 mb-4">Số điện thoại và Email</h2>
                            <div className="flex items-center mb-4">
                                <i className="icon-phone-call text-xl mr-2"></i>
                                <input type="text" placeholder="Số điện thoại" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div className="flex items-center mb-4">
                                <i className="icon-email text-xl mr-2"></i>
                                <input type="email" placeholder="Địa chỉ email" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <h2 className="text-xl text-gray-800 mb-4">Bảo mật</h2>
                            <div className="flex items-center mb-4 p-1  rounded">
                                <i className="icon-padlock text-xl mr-4"></i>
                                <span className="flex-grow w-full text-gray-800 font-semibold">Đổi mật khẩu</span>
                                <button className="bg-red-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all whitespace-nowrap w-100">Cập nhật</button>
                            </div>
                            <h2 className="text-xl text-gray-800 mb-4">Liên kết mạng xã hội</h2>
                            <div className="flex items-center justify-between mb-4">
                                <i className="fab fa-facebook text-2xl text-blue-600"></i>
                                <span className="text-lg flex-grow ml-4">Facebook</span>
                                <button className="bg-red-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all w-100">Liên kết</button>
                            </div>
                            <h2 className="text-xl text-gray-800 mb-4">Đã liên kết</h2>
                            <div className="flex items-center p-2 rounded">
                                <i className="fab fa-google text-2xl text-red-600"></i>
                                <span className="text-lg flex-grow ml-4">Google</span>
                            </div>
                        </div>
                    </div>

                    {/* Tier Info */}
                    <div className="mt-5 p-5 bg-gray-100 rounded-lg">
                        <h2 className="text-xl text-gray-800 mb-4">Tổng Quan Thứ Bậc</h2>
                        <p className="text-base mb-1">Hạng thành viên: <strong className="text-orange-500">Gold</strong></p>
                        <p className="text-base mb-1">Số điểm hiện tại: <strong className="text-orange-500">520 Điểm</strong></p>
                        <p className="text-base">Số điểm cần tích lũy thêm: <strong className="text-orange-500">480 Điểm</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;
