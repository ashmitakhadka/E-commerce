export const Category = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Shop By Category</h2>

          <p className="text-gray-500 mt-2">
            Explore our collection of products
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Category 1 */}
          <div className="bg-amber-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-32 flex items-center justify-center mb-4">
              <img src="" alt="Laptop" className="max-h-full object-contain" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">Laptops</h3>
          </div>

          {/* Category 2 */}
          <div className="bg-amber-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-32 flex items-center justify-center mb-4">
              <img
                src=""
                alt="Smartphones"
                className="max-h-full object-contain"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">Smartphones</h3>
          </div>

          {/* Category 3 */}
          <div className="bg-amber-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-32 flex items-center justify-center mb-4">
              <img src="" alt="Audio" className="max-h-full object-contain" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">Audio</h3>
          </div>

          {/* Category 4 */}
          <div className="bg-amber-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-32 flex items-center justify-center mb-4">
              <img src="" alt="Gaming" className="max-h-full object-contain" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">Gaming</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
