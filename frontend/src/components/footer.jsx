import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-gray-100">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="/"
              className="text-xl font-bold text-gray-900 tracking-tight block mb-4"
            >
              TechMart
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Premium electronics and accessories designed for simplicity and
              everyday use.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Audio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Wearables
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              Get notified about new drops and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-50 border border-gray-200 text-sm px-3 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300 transition"
              />
              <button className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} TechMart. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
