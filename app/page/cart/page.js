"use client";
import React, { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import Image from "next/image";
import axios from "axios";


export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [selectedAddressId, setSelectedAddressId] = useState("");
    const [subtotal, setSubtotal] = useState(0);
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [shippingMethod, setShippingMethod] = useState("cod");
    const accessToken = localStorage.getItem("accessToken");

    // Hàm xử lý xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (_id) => {
        const updatedCart = cartItems.filter((item) => item._id !== _id);
        syncLocalStorage(updated)
    }

    // Lấy dữ liệu từ localStorage khi component được render lần đầu
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        if (!accessToken) {
            alert("Please log in to view your addresses.");
            return;
        }
        const tokenPayload = JSON.parse(atob(accessToken.split(".")[1]));
        const userId = tokenPayload.id;
        axios
            .get(`http://localhost:5000/api/delivery-addresses/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                setAddresses(response.data);
            })
            .catch((error) => {
                console.error("Error fetching addresses:", error);
                alert("Failed to fetch delivery addresses. Please try again.");
            });
    }, [accessToken]);



    // Tính toán lại subtotal khi cartItems hoặc discount thay đổi
    useEffect(() => {
        const newSubtotal = cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        setSubtotal(newSubtotal - discount);
    }, [cartItems, discount]);

    // Đồng bộ trạng thái giỏ hàng vào localStorage
    const syncLocalStorage = (updatedCart) => {
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Hàm xử lý tăng/giảm số lượng sản phẩm
    const updateQuantity = async (_id, delta) => {
        try {
            // Lấy dữ liệu sản phẩm từ API
            const response = await axios.get(`http://localhost:5000/api/products/${_id}`);
            const product = response.data;
            // Kiểm tra và cập nhật số lượng sản phẩm trong giỏ hàng
            const updatedCart = cartItems.map((item) => {
                if (item._id === _id) {
                    const newQuantity = item.quantity + delta;
                    if (newQuantity > product.quantity) {
                        alert(`Không thể thêm quá ${product.quantity} sản phẩm. Hiện có ${product.quantity} trong kho.`);
                        return item;
                    }
                    if (newQuantity <= 0) {
                        alert("Số lượng không hợp lệ.");
                        return item;
                    }
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });

            // Cập nhật localStorage và state
            syncLocalStorage(updatedCart);
        } catch (error) {
            console.error("Lỗi khi cập nhật số lượng sản phẩm:", error);
            alert("Không thể cập nhật số lượng sản phẩm. Vui lòng thử lại.");
        }
    };

    const handleApplyCoupon = async (e) => {
        e.preventDefault();
        try {
            // Gửi yêu cầu lấy danh sách tất cả các mã giảm giá
            const response = await fetch("http://localhost:5000/api/coupons", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Nếu API yêu cầu xác thực
                },
            });
            if (!response.ok) {
                throw new Error("Failed to fetch coupons. Please try again.");
            }
            // Lấy danh sách mã giảm giá từ phản hồi
            const coupons = await response.json();
            // Tìm mã giảm giá phù hợp với `couponCode` do người dùng nhập
            const coupon = coupons.find((c) => c.code === couponCode);
            if (!coupon) {
                alert("Mã giảm giá không hợp lệ");
                return;
            }
            // Kiểm tra điều kiện áp dụng mã giảm giá
            if (subtotal < coupon.minOrderValue) {
                alert(`Đơn hàng phải lớn hơn ${coupon.minOrderValue} để áp dụng mã giảm giá.`);
                return;
            }
            // Tính giảm giá
            let discount = 0;
            if (coupon.discountType === "percentage") {
                discount = (subtotal * coupon.discountValue) / 100;
                // Giới hạn mức giảm tối đa nếu có
                if (coupon.maxDiscount && discount > coupon.maxDiscount) {
                    discount = coupon.maxDiscount;
                }
            } else if (coupon.discountType === "fixed") {
                discount = coupon.discountValue;
            }

            // Cập nhật giảm giá
            setDiscount(discount);
            alert(`Mã giảm giá được áp dụng thành công! Bạn được giảm $${discount}.`);
        } catch (error) {
            console.error("Error applying coupon:", error);
            alert(`Không thể áp dụng mã giảm giá. Vui lòng thử lại.`);
        }
    };


    const handleCheckout = async () => {
        if (!selectedAddressId) {
            alert("Please select a delivery address before proceeding.");
            return;
        }

        if (!accessToken) {
            alert("Please log in to proceed with checkout.");
            return;
        }

        try {
            const tokenPayload = JSON.parse(atob(accessToken.split(".")[1]));
            const userId = tokenPayload.id;

            // Tính tổng tiền đơn hàng (trước giảm giá)
            const totalAmount = cartItems.reduce(
                (sum, product) => sum + product.price * product.quantity,
                0
            );

            // Payload để tạo đơn hàng
            const orderPayload = {
                userId,
                addressId: selectedAddressId,
                totalAmount,
            };

            // Gửi yêu cầu tạo đơn hàng
            const orderResponse = await fetch("http://localhost:5000/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(orderPayload),
            });

            if (!orderResponse.ok) {
                const error = await orderResponse.json();
                throw new Error(error.message || "Failed to create order.");
            }

            // Lấy `orderId` từ phản hồi
            const order = await orderResponse.json();
            const orderId = order.orderId;

            console.log("Order created successfully:", orderId);

            // Tạo chi tiết đơn hàng
            for (const product of cartItems) {
                const payload = {
                    orderId,
                    productId: product._id,
                    quantity: product.quantity,
                    price: product.price,
                };

                const response = await fetch("http://localhost:5000/api/order-details", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                    body: JSON.stringify(payload),
                });

                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "Failed to create order detail.");
                }
            }

            // Sau khi thanh toán thành công
            alert(`Order placed successfully`);

            // Xóa giỏ hàng
            localStorage.removeItem("cart");
            setCartItems([]);

            // Đặt lại subtotal
            setSubtotal(); // Giả sử giỏ hàng được xóa hoàn toàn
        } catch (error) {
            console.error("Error during checkout:", error);
            alert(`Failed to complete the checkout process: ${error.message}`);
        }
    };



    return (
        <div>
            <section className="cart-page section-space bg-[#ffffff]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="col-xl-8 w-full xl:w-2/3 px-4">
                            <div className="overflow-x-auto">
                                <table className="table-auto cart-page__table w-full">
                                    <thead>
                                        <tr className="text-left">
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Sub Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.length === 0 ? (
                                            <tr>
                                                <td colSpan="5" className="text-center">
                                                    Your cart is empty.
                                                </td>
                                            </tr>
                                        ) : (
                                            cartItems.map((item) => (
                                                <tr key={item._id}>
                                                    <td>
                                                        <div className="cart-page__table__meta flex items-center">
                                                            <div className="cart-page__table__meta__img mr-4">
                                                                <Image
                                                                    src={item.image}
                                                                    alt={item.name}
                                                                    width={64}
                                                                    height={64}
                                                                    className="w-16 h-16 object-cover"
                                                                />
                                                            </div>
                                                            <h3 className="cart-page__table__meta__title">
                                                                <a
                                                                    href="/page/product-detail"
                                                                    className="text-blue-500 hover:underline"
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            </h3>
                                                        </div>
                                                    </td>
                                                    <td>${item.price.toFixed(2)}</td>
                                                    <td>
                                                        <div className="product-details__quantity">
                                                            <div className="flex items-center quantity-box">
                                                                <button
                                                                    type="button"
                                                                    className="sub bg-gray-300 p-2"
                                                                    onClick={() => updateQuantity(item._id, -1)}
                                                                    disabled={item.quantity <= 1}
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    type="text"
                                                                    value={item.quantity}
                                                                    className="border border-gray-300 px-2 w-12 text-center"
                                                                    readOnly
                                                                />
                                                                <button
                                                                    type="button"
                                                                    className="add bg-gray-300 p-2"
                                                                    onClick={() => updateQuantity(item._id, 1)}
                                                                    disabled={item.quantity >= item.stock}
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => removeFromCart(item._id)}
                                                            className="cart-page__table__remove text-red-500 hover:no-underline"
                                                        >
                                                            Remove
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-page__coupone">
                                <h5 className="cart-page__coupone__title">Coupon:</h5>
                                <form onSubmit={handleApplyCoupon}>
                                    <input
                                        type="text"
                                        placeholder="Enter Coupon Code"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        className="border border-gray-300 px-2 py-1 w-full"
                                    />
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                                        Apply Code
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-4 w-full xl:w-1/3 px-4">
                            <div className="cart-page__cart-checkout bg-white p-4">
                                <div className="mb-4">
                                    {!addresses || addresses.length === 0 ? (
                                        <p>No delivery addresses found. Please add one.</p>
                                    ) : (
                                        <select
                                            value={selectedAddressId}
                                            onChange={(e) => setSelectedAddressId(e.target.value)}
                                            className="w-full border border-gray-300 px-2 py-1"
                                        >
                                            <option value="" disabled>
                                                Select a delivery address
                                            </option>
                                            {addresses.map((item) => (
                                                <option key={item._id} value={item._id}>
                                                    {item.address}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </div>
                                <ul className="cart-page__cart-total list-none">
                                    <li>
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </li>
                                </ul>
                                <div className="mt-4">
                                    <h5 className="text-lg font-semibold">Shipping Method</h5>
                                    <div className="mt-2">
                                        <label className="block">
                                            <input
                                                type="radio"
                                                name="shipping"
                                                value="cod"
                                                checked={shippingMethod === "cod"}
                                                onChange={(e) => setShippingMethod(e.target.value)}
                                                className="mr-2"
                                            />
                                            Cash on Delivery (COD)
                                        </label>
                                        <label className="block">
                                            <input
                                                type="radio"
                                                name="shipping"
                                                value="paypal"
                                                checked={shippingMethod === "paypal"}
                                                onChange={(e) => setShippingMethod(e.target.value)}
                                                className="mr-2"
                                            />
                                            PayPal
                                        </label>
                                    </div>
                                </div>
                                {shippingMethod === "cod" ? (
                                    <button
                                        className="bg-green-500 text-white px-4 py-2 block text-center mt-4"
                                        onClick={handleCheckout}
                                    >
                                        Checkout
                                    </button>
                                ) : (
                                    <PayPalButton
                                        amount={subtotal.toFixed(2)}
                                        onSuccess={(details, data) => {
                                            alert("Transaction completed by " + details.payer.name.given_name);
                                            localStorage.removeItem("cart");
                                            return fetch("/paypal-transaction-complete", {
                                                method: "post",
                                                headers: {
                                                    "Content-Type": "application/json",
                                                },
                                                body: JSON.stringify({
                                                    orderID: data.orderID,
                                                }),
                                            });
                                        }}
                                        onError={(err) => {
                                            console.error("PayPal Checkout Error: ", err);
                                            alert("Payment failed. Please try again.");
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
