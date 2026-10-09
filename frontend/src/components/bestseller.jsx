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
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Our Best Sellers</h2>

          <p className="text-gray-500 mt-2">
            Discover our most popular products
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {product.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-52 bg-gray-50 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain p-5"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-1">
                  {item.category?.name}
                </p>

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-lg font-bold text-gray-900">
                    {item.price}
                  </p>

                  <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
