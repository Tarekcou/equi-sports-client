import React from "react";

const NewsletterSubscription = () => {
  return (
    <div className="relative bg-blue-600 text-white">
      <div className="flex md:flex-row flex-col items-center mx-auto px-4 py-10 max-w-7xl">
        {/* Image Section */}
        <div className="md:w-1/2 max-h-72 overflow-hidden">
          <img
            src={
              "https://www.sportico.com/wp-content/uploads/2024/04/GettyImages-2131507355-e1713470095438.jpg?w=1280&h=718&crop=1"
            }
            alt="Basketball Player"
            className="rounded-md w-full overflow-hidden object-contain"
          />
        </div>

        {/* Text and Subscription Section */}
        <div className="mt-8 md:mt-0 md:pl-10 md:w-1/2 text-center md:text-left">
          <h2 className="mb-4 font-bold text-3xl">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
          <p className="mb-6 text-lg">
            Subscribe to our latest newsletter to get news about special
            discounts and upcoming sales.
          </p>
          <div className="flex sm:flex-row md:flex-col items-center gap-4 w-full">
            <input
              type="email"
              placeholder="Email"
              className="flex-grow px-4 py-2 rounded-md w-full sm:w-auto md:w-full text-black"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-md w-full font-bold text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
