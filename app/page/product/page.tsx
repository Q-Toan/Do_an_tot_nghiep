"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PriceRangeFilter from "../../component/PriceRangeFilter";
import Link from "next/link";

interface Product {
  _id: string;
  productName: string;
  price: number;
  inStock: boolean;
  quantity: number;
  description: string;
  categoryName: string;
  brandName: string;
  image: string;
}

interface Category {
  _id: string;
  categoryName: string;
  parentId: string | null;
}

interface Brand {
  _id: string;
  brandName: string;
  logoUrl: string;
}

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>("http://localhost:5000/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchBrands = async () => {
      try {
        const response = await axios.get<Brand[]>("http://localhost:5000/api/brands");
        setBrands(response.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:5000/api/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (err: any) {
        setError(err?.message || "An unknown error occurred.");
        setLoading(false);
        console.error("Error fetching products:", err);
      }
    };

    fetchCategories();
    fetchBrands();
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.categoryName === selectedCategory);
    }

    if (selectedBrand) {
      filtered = filtered.filter((product) => product.brandName === selectedBrand);
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedBrand, searchQuery, products]);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const handleBrandClick = (brandName: string) => {
    setSelectedBrand(brandName);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleAddToCart = (product: Product) => {
    // Kiểm tra trạng thái còn hàng dựa trên quantity
    if (product.quantity <= 0) {
        alert("Sản phẩm này đã hết hàng và không thể thêm vào giỏ.");
        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = cart.findIndex((item: Product) => item._id === product._id);

    if (productIndex > -1) {
        if (cart[productIndex].quantity < product.quantity) {
            cart[productIndex].quantity += 1;
        } else {
            alert(`Không thể thêm quá số lượng tồn kho. trong kho chỉ còn ${product.quantity} sản phẩm.`);
            return;
        }
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
};


  if (loading) {
    return <div>Đang tải chờ xíu...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: "url(/images/banner/banner6.png)" }}
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
                    <li key={category._id}>
                      <a
                        href="#"
                        onClick={() => handleCategoryClick(category.categoryName)}
                        className={`text-gray-700 ${selectedCategory === category.categoryName ? "font-bold" : ""}`}
                      >
                        {category.categoryName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product__brands product__sidebar__item">
                <h3 className="product__sidebar__title">Brands</h3>
                <ul className="list-unstyled">
                  {brands.map((brand) => (
                    <li key={brand._id}>
                      <a
                        href="#"
                        onClick={() => handleBrandClick(brand.brandName)}
                        className={`text-gray-700 ${selectedBrand === brand.brandName ? "font-bold" : ""}`}
                      >
                        {brand.brandName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            <div className="col-span-3 filter-option">
              <div className="flex justify-between items-center mb-4 filter-option-inner">
                <p className="text-lg">Showing {filteredProducts.length} Results</p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 product__item">
                {filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className={`bg-white product__item wow fadeInUp animated ${!product.inStock ? "opacity-50" : ""}`}
                  >
                    <div className="mb-4">
                      <Link href={`/page/product-detail?id=${product._id}`}>
                        <img
                          src={product.image}
                          alt={product.productName}
                          width={100}
                          height={100}
                          className="w-full h-full product__item__image"
                        />
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-[#1e1d1d] text-xl">{product.productName}</h4>
                      <span className="price text-lg">{product.price}</span>
                    </div>
                    <button
                      className={`px-4 py-2 text-white font-medium ml-[90px] mb-[20px] rounded-md transition ${
                        !product.inStock
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-blue-600"
                      }`}
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                    >
                      {!product.inStock ? "Hết hàng" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
