"use client";
import React, { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import Image from "next/image";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [shippingMethod, setShippingMethod] = useState("cod"); 

    // Lấy dữ liệu từ localStorage khi component được render lần đầu
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

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

    // Cập nhật số lượng sản phẩm
    const updateQuantity = (_id, newQuantity) => {
        const updatedCart = cartItems.map((item) =>
            item._id === _id
                ? { ...item, quantity: Math.max(newQuantity, 1) }
                : item
        );
        syncLocalStorage(updatedCart);
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (_id) => {
        const updatedCart = cartItems.filter((item) => item._id !== _id);
        syncLocalStorage(updatedCart);
    };

    // Áp dụng mã giảm giá
    const handleApplyCoupon = (e) => {
        e.preventDefault();
        if (couponCode === "DISCOUNT10") {
            setDiscount(10);
        } else {
            alert("Mã giảm giá không hợp lệ");
        }
    };

    // Xử lý khi nhấn nút Checkout
    const handleCheckout = async () => {
        // Lấy AccessToken, userId và giỏ hàng từ localStorage
        const accessToken = localStorage.getItem("accessToken");
        const cartItems = JSON.parse(localStorage.getItem("cart"));
    
        if (!accessToken) {
            alert("Please log in to proceed with checkout.");
            console.error("No accessToken found. User might not be logged in.");
            return;
        }
    
        if (!cartItems || cartItems.length === 0) {
            alert("Your cart is empty. Please add items to the cart before checking out.");
            console.error("Cart is empty.");
            return;
        }
    
        try {
            // Giải mã accessToken để lấy userId
            const tokenPayload = JSON.parse(atob(accessToken.split(".")[1]));
            const userId = tokenPayload.userId;
    
            // Chuẩn bị payload cho API
            const payload = {
                accessToken,
                userId,
                products: cartItems.map((item) => ({
                    productId: item._id,
                    quantity: item.quantity,
                })),
            };
    
            // Gửi yêu cầu POST tới API /orders
            const response = await fetch("http://localhost:3000/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                alert("Order placed successfully!");
                console.log("Order created successfully:", data.order);
    
                // Xóa giỏ hàng khỏi localStorage sau khi đặt hàng thành công
                localStorage.removeItem("cart");
            } else {
                console.error("Failed to create order:", data.message);
                alert(`Failed to place the order: ${data.message}`);
            }
        } catch (error) {
            console.error("Error during checkout:", error);
            alert("Something went wrong during checkout. Please try again.");
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
                                                    <td className="cart-page__table__price px-4 py-2">
                                                        ${item.price.toFixed(2)}
                                                    </td>
                                                    <td>
                                                        <div className="product-details__quantity">
                                                            <div className="flex items-center quantity-box">
                                                                <button
                                                                    type="button"
                                                                    className="sub bg-gray-300 p-2"
                                                                    onClick={() =>
                                                                        updateQuantity(item._id, item.quantity - 1)
                                                                    }
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
                                                                    onClick={() =>
                                                                        updateQuantity(item._id, item.quantity + 1)
                                                                    }
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="cart-page__table__total px-4 py-2">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </td>
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
                                <ul className="cart-page__cart-total list-none">
                                    <li>
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </li>
                                </ul>

                                {/* Lựa chọn phương thức giao hàng */}
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
