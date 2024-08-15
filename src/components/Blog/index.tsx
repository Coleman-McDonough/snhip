"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import SingleWhiteBlog from "./SingleWhiteBlog"; // Import SingleWhiteBlog
import blogData from "./blogData";

const Listings = () => {
  const [isForSale, setIsForSale] = useState(true);

  return (
    <section
      id="blog"
      className="dark:bg-bg-color-dark bg-gray-light py-16 pt-40 md:py-20 md:pt-48 lg:py-28 lg:pt-48"
    >
      <div className="container">
        <SectionTitle
          title="Prime Commercial Listings"
          paragraph="Explore our latest commercial properties available for sale or rent. Each listing is selected to provide exceptional business opportunities and strategic locations. Discover the perfect space to grow your business."
          center
        />
        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsForSale(true)}
              className={`${
                isForSale
                  ? "pointer-events-none text-primary"
                  : "dark:text-white text-dark"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              For Sale
            </span>
            <div
              onClick={() => setIsForSale(!isForSale)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isForSale ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsForSale(false)}
              className={`${
                isForSale
                  ? "dark:text-white text-dark"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              For Lease
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              {isForSale ? (
                <SingleWhiteBlog blog={blog} />
              ) : (
                <SingleBlog blog={blog} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;
