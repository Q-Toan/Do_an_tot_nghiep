'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const searchParams = useSearchParams();
  const id = searchParams.get('id'); // Lấy id từ query string

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setAccessToken(token);
  }, []);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/products/${id}`);
          setProduct(response.data);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch product details');
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity((prev) => prev - 1);

  const handleAddToCart = () => {
    if (!accessToken) {
      alert('Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!');
      return;
    }

    if (product.quantity === 0) {
      alert('Sản phẩm này đã hết hàng!');
      return;
    }

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex((item) => item._id === product._id);

    if (productIndex > -1) {
      if (cart[productIndex].quantity + quantity <= product.quantity) {
        cart[productIndex].quantity += quantity;
      } else {
        alert('Bạn đã thêm số lượng tối đa của sản phẩm này!');
        return;
      }
    } else {
      if (quantity <= product.quantity) {
        cart.push({ ...product, quantity });
      } else {
        alert('Số lượng vượt quá tồn kho!');
        return;
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-lg text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Hình ảnh sản phẩm */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Chi tiết sản phẩm */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-gray-600 mt-2">${product.price}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Số lượng */}
          <div className="flex items-center mt-6 space-x-4">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-lg"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center border border-gray-300 rounded"
            />
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-lg"
            >
              +
            </button>
          </div>

          {/* Nút thêm vào giỏ hàng */}
          <button
            onClick={handleAddToCart}
            className={`mt-6 px-6 py-3 rounded text-white font-medium transition ${
              product.quantity === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={product.quantity === 0}
          >
            {product.quantity === 0 ? 'Hết hàng' : 'Thêm vào giỏ hàng'}
          </button>
        </div>
      </div>
    </div>
  );
}
