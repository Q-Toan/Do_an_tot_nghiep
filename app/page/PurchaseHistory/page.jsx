"use client";
import { useEffect, useState } from "react";
import "../../../public/assets/css/lichsu.css";

function Lichsu() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("accessToken"); // Lấy accessToken từ localStorage

      if (!token) {
        console.error("Token not found!");
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/orders", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Gửi token trong header
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        console.log("Fetched Orders Data:", data); // Log dữ liệu lấy được
        setOrders(data); // Lưu danh sách đơn hàng vào state
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []); // Chỉ gọi lần đầu khi component được mount

  return (
    <section className="purchase-history py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Lịch Sử Mua Hàng
        </h2>
        <div className="overflow-x-auto">
          <div className="bg-white shadow-lg rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left text-gray-600">Mã Đơn Hàng</th>
                  <th className="py-3 px-4 border-b text-left text-gray-600">Ngày Mua</th>
                  <th className="py-3 px-4 border-b text-left text-gray-600">Số Lượng</th>
                  <th className="py-3 px-4 border-b text-left text-gray-600">Giá</th>
                  <th className="py-3 px-4 border-b text-left text-gray-600">Tổng Giá</th>
                  <th className="py-3 px-4 border-b text-left text-gray-600">Trạng Thái</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="py-3 px-4 border-b text-center text-gray-600">
                      Không có đơn hàng nào
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    order.products.map((product, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b">{`#${order._id}`}</td>
                        <td className="py-3 px-4 border-b">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4 border-b">{product.quantity}</td>
                        <td className="py-3 px-4 border-b">${product.price}</td>
                        <td className="py-3 px-4 border-b">${product.totalPrice}</td>
                        <td className="py-3 px-4 border-b">{order.status}</td>
                      </tr>
                    ))
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lichsu;
