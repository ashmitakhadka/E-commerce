export const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>

          <p className="text-gray-500 mt-2 text-lg">
            Everything you need for a better shopping experience
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fast Delivery */}
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500">
              <i className="fa-solid fa-truck text-xl"></i>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Fast Delivery
            </h3>

            <p className="text-medium text-gray-500">
              Quick and reliable delivery right to your doorstep.
            </p>
          </div>

          {/* Secure Payment */}
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500">
              <i className="fa-solid fa-lock text-xl"></i>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Secure Payment
            </h3>

            <p className="text-medium text-gray-500">
              Safe and secure checkout for every purchase.
            </p>
          </div>

          {/* Easy Returns */}
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500">
              <i className="fa-solid fa-arrow-rotate-left text-xl"></i>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Easy Returns
            </h3>

            <p className="text-medium text-gray-500">
              Hassle-free returns for a worry-free shopping experience.
            </p>
          </div>

          {/* Customer Support */}
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500">
              <i className="fa-solid fa-headset text-xl"></i>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Customer Support
            </h3>

            <p className="text-medium text-gray-500">
              We're here to help whenever you need us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
