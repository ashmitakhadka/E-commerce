import api from "../services/api";
import { useEffect, useState } from "react";

export const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await api.get("/categories");
        console.log(response.data);
        setCategory(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategory();
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-gray-900 tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-[2px] bg-pink-300 mx-auto mt-3"></div>
        </div>

        {/* Categories Grid (5 columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {category.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Image Container with Rounded Corners */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-pink-50 mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Category Title */}
              <h3 className="text-sm font-semibold tracking-wider text-gray-800 uppercase mb-1">
                {item.name}
              </h3>

              {/* Shop Now CTA */}
              <div className="flex items-center gap-1 text-xs font-medium text-gray-600 group-hover:text-pink-600 transition-colors">
                <span>SHOP NOW</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
