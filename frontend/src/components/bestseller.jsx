import { useEffect, useState } from "react";
import api from "../services/api";

export const BestSeller = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/best-sellers");
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching best sellers:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Our Best Sellers
          </h2>

          <p className="mt-2 text-gray-500">
            Discover our most popular products
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {product.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="relative flex h-60 items-center justify-center bg-gray-50 p-5">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="p-5">
                <h3 className="truncate text-base font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="mt-2 line-clamp-2 min-h-10 text-sm text-gray-500">
                  {item.description || "Explore this product for more details."}
                </p>

                {/* Price */}
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-[16px] font-bold text-gray-700">
                    Rs. {Number(item.price).toLocaleString()}
                  </p>
                </div>

                {/* Add to Cart */}
                <button
                  type="button"
                  className="mt-5 w-full rounded-xl border border-cyan-500 px-4 py-3 font-semibold text-cyan-500 transition-all duration-200 hover:bg-cyan-500 hover:text-white active:scale-[0.98]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {product.length === 0 && (
          <p className="py-10 text-center text-gray-500">
            No best-selling products available right now.
          </p>
        )}
      </div>
    </section>
  );
};
