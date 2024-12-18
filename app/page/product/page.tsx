"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PriceRangeFilter from "../../component/PriceRangeFilter";
import Link from "next/link";

interface Product {
  _id?: string;
  id?: number;
  name: string;
  price: number;
  img: string;
  category: string;
  quantity?: number;
}

interface Category {
  id: number;
  name: string;
}

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string | null>(null); // Lưu trữ Access Token

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);

    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>('http://localhost:3000/api/categories');
        setCategories(response.data);
        console.log("Fetched categories:", response.data); // Log danh mục lấy được
      } catch (err: any) {
        setError(err?.message || "An error occurred while fetching categories.");
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  // Lấy sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://localhost:3000/api/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
        console.log("Fetched products:", response.data); // Log sản phẩm lấy được
      } catch (err: any) {
        setError(err?.message || "An unknown error occurred.");
        setLoading(false);
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // Lọc sản phẩm theo danh mục, tìm kiếm và sắp xếp
  useEffect(() => {
    let filtered = products;
    if (selectedCategory) {
      filtered = products.filter(product => product.category === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else {
      filtered.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(filtered);
    console.log("Filtered products:", filtered); // Log các sản phẩm sau khi lọc
  }, [selectedCategory, products, sortOrder, searchQuery]);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    console.log("Selected category:", categoryName); // Log danh mục đã chọn
  };

  const handleSortChange = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    console.log("Sort order changed to:", order); // Log trạng thái sắp xếp
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    console.log("Search query:", event.target.value); // Log từ khóa tìm kiếm
  };

  const handleAddToCart = (product: Product) => {
    // Lấy giỏ hàng từ localStorage hoặc khởi tạo giỏ hàng rỗng
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  
    // Tìm sản phẩm trong giỏ hàng (dựa theo id)
    const productIndex = cart.findIndex((item: Product) => item._id === product._id);
  
    if (productIndex > -1) {
      // Nếu sản phẩm đã tồn tại, tăng số lượng
      cart[productIndex].quantity += 1;
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
      cart.push({ ...product, quantity: 1 });
    }
  
    // Cập nhật giỏ hàng trong localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // Thông báo người dùng
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(/images/banner/banner6.png)",
          }}
        />
        <div className="container mx-auto">
          <h2 className="page-header__title">Shop left sidebar</h2>
          <ul className="boskery-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li><span>Shop</span></li>
          </ul>
        </div>
      </section>

      <section className="product-page product-page--left section-space-bottom bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <aside className="product__sidebar col-span-1">
              <div className="product__search-box product__sidebar__item">
                <form action="#" className="product__search flex">
                  <input
                    type="text"
                    placeholder="Search Items"
                    className="border border-gray-300 rounded-l px-2 py-1 flex-grow"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button
                    type="submit"
                    aria-label="search submit"
                    className="bg-gray-300 rounded-r px-3"
                  >
                    <span className="icon-search" />
                  </button>
                </form>
              </div>
              <PriceRangeFilter />
              <div className="product__categories product__sidebar__item">
                <h3 className="product__sidebar__title product__categories__title">Categories</h3>
                <ul className="list-unstyled">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <a
                        href="#"
                        onClick={() => handleCategoryClick(category.name)}
                        className="text-gray-700"
                      >
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="col-span-3 filter-option">
              <div className="flex justify-between items-center mb-4 filter-option-inner">
                <p className="text-lg">Showing {filteredProducts.length} Results</p>
                <div className="flex space-x-4">
                  <button
                    className="px-4 py-2 bg-gray-300 rounded-md"
                    onClick={() => handleSortChange('asc')}
                  >
                    Sort by Price (Low to High)
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-300 rounded-md"
                    onClick={() => handleSortChange('desc')}
                  >
                    Sort by Price (High to Low)
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 product__item">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white product__item wow fadeInUp animated">
                    <div className="mb-4">
                      <Link href={`/page/product-detail`}>
                        <img
                          src={product.img}
                          alt={product.name}
                          width={100}
                          height={100}
                          className="w-full h-full product__item__image"
                        />
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-[#1e1d1d] text-xl">{product.name}</h4>
                      <span className="price text-lg">{product.price}</span>
                    </div>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>

              <div className="product__pagination mt-4">
                <ul className="pagination flex justify-center items-center">
                  <li>
                    <button className="prev">&#x2039;</button>
                  </li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li>
                    <button className="next">&#x203a;</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
