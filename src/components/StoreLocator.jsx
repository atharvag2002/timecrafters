import React, { useState } from 'react';
import bg from '../assets/bg.jpg';

const storesData = {
  Mumbai: [
    { name: "Lorem ipsum", desc: "eiusmod tempor incididunt ut labore et dolore magna aliqua" },
    { name: " dolor sit amet ", desc: "eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
    { name: "ipsum dolor", desc: "eiusmod tempor incididunt ut labore et dolore magna aliqua.   " },
  ],
  Pune: [
    { name: " dolor sit amet ", desc: "eiusmod tempor incididunt ut labore et dolore magna aliqua.  " },
    { name: "Lorem ipsum", desc: "eiusmod tempor incididunt ut labore et dolore magna aliqua.   " },
    { name: " ipsum dolor", desc: "eiusmod tempor incididunt ut labore et dolore magna aliqua.  " }
  ],
  Nashik: [
    { name: "ipsum dolor", desc: "eiusmod tempor incididunt ut labore et dolore magna aliqua.   " },
    { name: " dolor sit amet ", desc: "eiusmod tempor incididunt ut labore et dolore magna aliqua.   " },
    { name: "Lorem ipsum", desc: "eiusmod tempor incididunt ut labore et dolore magna aliqua.   " },
  ],
  
};

const cities = Object.keys(storesData);

const StoreLocator = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="max-w-screen-xl mx-auto p-6">
        {/* Title */}
        <h1 className="text-5xl font-semibold font-logo text-center my-16">Store Locator</h1>

        {/* Tabs */}
        <div className="flex justify-center text-center items-center border-b border-gray-300 pb-3 mb-16">
          <div className="flex gap-8 md:gap-52 text-2xl font-medium">
            {cities.map(city => (
              <div
                key={city}
                className={`cursor-pointer pb-1 ${selectedCity === city ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"}`}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </div>
            ))}
          </div>
        </div>

     
        {/* Store Cards */}
        <div className="flex flex-col md:flex-row justify-between overflow-x-auto gap-3 pb-4 scrollbar-thin scrollbar-thumb-blue-500">
          {storesData[selectedCity].map((store, idx) => (
            <div
              key={idx}
              className="min-w-[0] md:min-w-[350px] min-h-[200px] bg-gray-100 border border-black rounded-xl p-4 shadow-sm text-center hover:shadow-md transition text-black flex flex-col"
            >
              <h2 className="font-semibold mb-2">{store.name}</h2>
              <p className="text-gray-500 text-sm mb-4">{store.desc}</p>
              <div className="flex justify-between items-center text-sm text-black px-4 mt-auto">
                <div className="flex items-center gap-1 cursor-pointer">
                  <span className="material-icons text-base">location_on</span>
                  Get Direction
                </div>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span className="material-icons text-base">call</span>
                  Contact
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-40 mb-20">
          <h2 className="text-5xl font-light text-center mb-10">CUSTOMER TESTIMONIALS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b py-10">
            {[1, 2, 3].map((_, i) => (
             <div
  key={i}
  className={`px-6 
    ${i !== 2 ? 'border-b border-black md:border-b-0 md:border-r' : ''}`
  }
>
                <div className="text-5xl text-teal-600 leading-none mb-4">“</div>
                <p className="text-gray-700 text-md mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-teal-600 font-semibold text-center">Customer Name</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
