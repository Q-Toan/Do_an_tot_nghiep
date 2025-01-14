"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AddressManager = () => {
    // State quản lý dữ liệu
    const [userData, setUserData] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const [newAddress, setNewAddress] = useState("");
    const [editAddress, setEditAddress] = useState(null);
    const [editValue, setEditValue] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const accessToken = localStorage.getItem("accessToken");

    // Lấy dữ liệu user và danh sách địa chỉ
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const tokenPayload = JSON.parse(atob(accessToken.split(".")[1]));
                const userId = tokenPayload.id || tokenPayload._id;

                const userResponse = await axios.get(`http://localhost:5000/api/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const addressResponse = await axios.get(
                    `http://localhost:5000/api/delivery-addresses/user/${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                setUserData(userResponse.data);
                setAddresses(addressResponse.data);
            } catch (err) {
                setError(err.message || "Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [accessToken]);

    // Thêm địa chỉ mới
    const handleAddAddress = async () => {
        try {
            if (!newAddress.trim()) {
                alert("Please enter a valid address.");
                return;
            }

            const tokenPayload = JSON.parse(atob(accessToken.split(".")[1]));
            const userId = tokenPayload.id || tokenPayload._id;

            const response = await axios.post(
                "http://localhost:5000/api/delivery-addresses",
                { userId, address: newAddress },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            setAddresses((prev) => [...prev, response.data]);
            setNewAddress("");
            alert("Address added successfully!");
        } catch (err) {
            alert("Failed to add address. Please try again.");
        }
    };

    // Cập nhật địa chỉ
    const handleEditAddress = async (id) => {
        try {
            if (!editValue.trim()) {
                alert("Please enter a valid address.");
                return;
            }

            const response = await axios.put(
                `http://localhost:5000/api/delivery-addresses/${id}`,
                { address: editValue },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            setAddresses((prev) =>
                prev.map((addr) =>
                    addr._id === id ? { ...addr, address: response.data.address.address } : addr
                )
            );
            setEditAddress(null);
            setEditValue("");
            alert("Address updated successfully!");
        } catch (err) {
            alert("Failed to update address. Please try again.");
        }
    };

    // Xóa địa chỉ
    const handleDeleteAddress = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/delivery-addresses/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            setAddresses((prev) => prev.filter((addr) => addr._id !== id));
            alert("Address deleted successfully!");
        } catch (err) {
            alert("Failed to delete address. Please try again.");
        }
    };

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Manage Addresses</h1>

            {/* Hiển thị thông tin user */}
            {userData && (
                <div className="mb-6 border-b pb-4">
                    <p className="text-gray-700">
                        <strong>Username:</strong> {userData.username}
                    </p>
                    <p className="text-gray-700">
                        <strong>Email:</strong> {userData.email}
                    </p>
                    <p className="text-gray-700">
                        <strong>Role:</strong> {userData.role}
                    </p>
                    <p className="text-gray-700">
                        <strong>Account Created:</strong>{" "}
                        {new Date(userData.createdAt).toLocaleDateString()}
                    </p>
                </div>
            )}

            {/* Hiển thị danh sách địa chỉ */}
            <ul className="space-y-4">
                {addresses.length > 0 ? (
                    addresses.map((address) => (
                        <li
                            key={address._id}
                            className="flex items-center justify-between bg-gray-100 p-4 rounded-md"
                        >
                            {editAddress === address._id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                        className="border p-2 rounded-md flex-1 mr-4"
                                    />
                                    <button
                                        onClick={() => handleEditAddress(address._id)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditAddress(null)}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span className="flex-1">{address.address}</span>
                                    <button
                                        onClick={() => {
                                            setEditAddress(address._id);
                                            setEditValue(address.address);
                                        }}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteAddress(address._id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No addresses found.</p>
                )}
            </ul>

            {/* Thêm địa chỉ mới */}
            <div className="mt-6">
                <input
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    placeholder="Enter new address"
                    className="border p-2 rounded-md w-full mb-4"
                />
                <button
                    onClick={handleAddAddress}
                    className="bg-green-500 text-white px-6 py-2 rounded-md w-full"
                >
                    Add Address
                </button>
            </div>
        </div>
    );
};

export default AddressManager;
