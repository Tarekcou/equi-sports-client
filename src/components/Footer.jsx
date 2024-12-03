import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 text-white">
      <div className="mx-auto px-4 container">
        {/* Footer Top Section */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
          {/* About Us Section */}
          <div>
            <h3 className="font-semibold text-lg text-yellow-500">About Us</h3>
            <p className="mt-4 text-gray-400">
              At [Store Name] Sports, we are passionate about providing
              top-quality sports equipment and accessories to help athletes of
              all levels excel in their game.
            </p>
            <p className="mt-4 text-gray-400">
              Trusted by thousands of customers, we are your go-to store for
              premium sports gear.
            </p>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="font-semibold text-lg text-yellow-500">
              Categories
            </h3>
            <ul className="space-y-2 mt-4 text-gray-400">
              <li>⚽ Soccer</li>
              <li>🏀 Basketball</li>
              <li>🎾 Tennis</li>
              <li>🏋️ Fitness</li>
              <li>🏌️ Golf</li>
              <li>🎿 Winter Sports</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold text-lg text-yellow-500">
              Newsletter
            </h3>
            <p className="mt-4 text-gray-400">
              Sign up for our newsletter to stay updated on the latest offers,
              product launches, and sports news!
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg w-full text-gray-900"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 mt-2 py-2 rounded-lg w-full font-semibold text-gray-900"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="font-semibold text-lg text-yellow-500">
              Quick Links
            </h3>
            <ul className="space-y-2 mt-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  🏠 Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  ❓ FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  📦 Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  👤 My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  🛒 Shop Now
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-gray-700 my-8 border-t"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap justify-between items-center text-sm">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-600"
            >
              Facebook
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-600"
            >
              Twitter
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-600"
            >
              Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-600"
            >
              LinkedIn
            </a>
          </div>

          {/* Legal Section */}
          <p className="mt-4 md:mt-0 text-gray-500">
            © 2024 [Store Name] Sports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
