import React from 'react';
import celebImg from '../assets/celebrity.jpg';
import menImg from '../assets/men.jpg';
import womenImg from '../assets/women.jpg';
import accessoriesImg from '../assets/accessories.jpg';

const Categories = () => {
  return (
    <div className="max-w-4xl mx-auto mt-40">
      <h2 className="text-4xl font-semibold text-center mb-4 font-logo text-5xl pb-10">
        Shop By Categories
      </h2>

      <div className="grid md:grid-cols-2 items-stretch p-10 md:p-0 gap-5">
        {/* Left - Celebrity */}
        <div className="relative rounded-3xl overflow-hidden h-full group">
          <img
            src={celebImg}
            alt="Celebrity"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <p className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold pointer-events-none transform transition-transform duration-300 group-hover:scale-110">
            SHOP BY CELEBRITY
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-rows-2 gap-7">
          {/* Top - Accessories */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
            <img
              src={accessoriesImg}
              alt="Accessories"
              className="object-cover w-full h-full rounded-3xl"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold pointer-events-none transform transition-transform duration-300 group-hover:scale-110">
              Accessories
            </p>
          </div>

          {/* Bottom - Women + Men */}
          <div className="grid grid-cols-2 gap-2">
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src={womenImg}
                alt="Women"
                className="object-cover w-full h-full rounded-3xl"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold pointer-events-none transform transition-transform duration-300 group-hover:scale-110">
                Women
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src={menImg}
                alt="Men"
                className="object-cover w-full h-full rounded-3xl"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold pointer-events-none transform transition-transform duration-300 group-hover:scale-110">
                Men
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
