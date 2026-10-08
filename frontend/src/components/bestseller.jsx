export const BestSeller = () => {
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
          {/* Product 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-52 bg-gray-50 flex items-center justify-center">
              <img
                src=""
                alt="Mechanical Keyboard"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-500 mb-1">Electronics</p>

              <h3 className="text-lg font-semibold text-gray-900">
                Mechanical Keyboard
              </h3>

              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-gray-900">$79.99</p>

                <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-52 bg-gray-50 flex items-center justify-center">
              <img
                src=""
                alt="Wireless Headphones"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-500 mb-1">Audio</p>

              <h3 className="text-lg font-semibold text-gray-900">
                Wireless Headphones
              </h3>

              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-gray-900">$129.99</p>

                <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-52 bg-gray-50 flex items-center justify-center">
              <img
                src=""
                alt="Gaming Mouse"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-500 mb-1">Gaming</p>

              <h3 className="text-lg font-semibold text-gray-900">
                Gaming Mouse
              </h3>

              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-gray-900">$49.99</p>

                <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-52 bg-gray-50 flex items-center justify-center">
              <img
                src={null}
                alt="Smartphone"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-500 mb-1">Smartphones</p>

              <h3 className="text-lg font-semibold text-gray-900">
                Smartphone
              </h3>

              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-gray-900">$699.99</p>

                <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
