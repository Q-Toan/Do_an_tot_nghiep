"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Order {
    _id: string;
    userId: string;
    addressId: string;
    totalAmount: number;
    orderId: string;
    orderDate: string;
    status: string;
}

interface Address {
    _id: string;
    userId: string;
    address: string;
    isDefault?: boolean; // Nếu có
}

interface User {
    _id: string;
    username: string;
    email: string;
}


const OrderPage: React.FC = () => {
    // State
    const [orders, setOrders] = useState<Order[]>([]);
    const [userData, setUserData] = useState<User | null>(null);
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        const fetchOrdersAndUser = async () => {
            try {
                setLoading(true);

                // Giải mã token để lấy userId
                const tokenPayload = JSON.parse(atob(accessToken!.split(".")[1]));
                const userId = tokenPayload.id || tokenPayload._id;

                // Lấy danh sách đơn hàng
                const ordersResponse = await axios.get<Order[]>(
                    `http://localhost:5000/api/orders/user/${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                // Lấy thông tin người dùng
                const userResponse = await axios.get<User>(
                    `http://localhost:5000/api/users/${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                // Lấy thông tin địa chỉ (nếu cần)
                const addressIds = ordersResponse.data.map((order) => order.addressId);
                const addressPromises = addressIds.map((addressId) =>
                    axios.get<Address>(`http://localhost:5000/api/delivery-addresses/${addressId}`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    })
                );
                const addressResponses = await Promise.all(addressPromises);

                setOrders(ordersResponse.data);
                setUserData(userResponse.data);
                setAddresses(addressResponses.map((response) => response.data));
            } catch (err: any) {
                setError(err.message || "Failed to load data.");
            } finally {
                setLoading(false);
            }
        };

        fetchOrdersAndUser();
    }, [accessToken]);

    if (loading) return <p className="text-center text-gray-500">Đang tải dữ liệu...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <section className="order-page py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Xem đơn hàng</h2>
                <div className="flex flex-wrap">
                    {/* Bảng danh sách đơn hàng */}
                    <div className="w-full lg:w-2/3 px-4">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="py-2 px-4 border-b">Mã Đơn Hàng</th>
                                        <th className="py-2 px-4 border-b">Ngày Đặt Hàng</th>
                                        <th className="py-2 px-4 border-b">Tổng Tiền</th>
                                        <th className="py-2 px-4 border-b">Địa Chỉ Giao Hàng</th>
                                        <th className="py-2 px-4 border-b">Trạng Thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.length > 0 ? (
                                        orders.map((order, index) => (
                                            <tr key={order._id}>
                                                <td className="py-4 px-4 border-b">{order.orderId}</td>
                                                <td className="py-4 px-4 border-b">
                                                    {new Date(order.orderDate).toLocaleDateString()}
                                                </td>
                                                <td className="py-4 px-4 border-b">
                                                    ${order.totalAmount.toFixed(2)}
                                                </td>
                                                <td className="py-4 px-4 border-b">
                                                    {addresses[index]?.address || "Không tìm thấy địa chỉ"}
                                                </td>
                                                <td className="py-4 px-4 border-b">{order.status}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="text-center py-4">
                                                Không có đơn hàng nào.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Thông tin khách hàng */}
                    <div className="w-full lg:w-1/3 px-4">
                        <div className="bg-white shadow-md rounded-lg mb-4">
                            <div className="p-4">
                                <h5 className="font-semibold">Thông tin khách hàng</h5>
                                <address className="mt-2">
                                    {userData?.username || "N/A"}
                                    <br />
                                    Email: {userData?.email || "N/A"}
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderPage;
