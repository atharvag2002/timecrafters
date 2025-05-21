import React from 'react';

import omega from '../assets/watches/omega.jpg';
import rolex from '../assets/watches/rolex.jpeg';
import tag from '../assets/watches/tag.png';
import tissot from '../assets/watches/tissot.png';
import casio from '../assets/watches/casio.avif';

const watches = [
  { id: 1, name: "Omega Seamaster", price: "₹3,20,000", image: omega },
  { id: 2, name: "Rolex Submariner", price: "₹8,50,000", image: rolex },
  { id: 3, name: "Tag Heuer Carrera", price: "₹2,70,000", image: tag },
  { id: 4, name: "Tissot PRX", price: "₹95,000", image: tissot },
  { id: 5, name: "Casio Edifice", price: "₹12,999", image: casio },
   { id: 1, name: "Omega Seamaster", price: "₹3,20,000", image: omega },
  { id: 2, name: "Rolex Submariner", price: "₹8,50,000", image: rolex },
  { id: 3, name: "Tag Heuer Carrera", price: "₹2,70,000", image: tag },
  { id: 4, name: "Tissot PRX", price: "₹95,000", image: tissot },
  { id: 5, name: "Casio Edifice", price: "₹12,999", image: casio },
    { id: 1, name: "Omega Seamaster", price: "₹3,20,000", image: omega },
  { id: 2, name: "Rolex Submariner", price: "₹8,50,000", image: rolex },
  { id: 3, name: "Tag Heuer Carrera", price: "₹2,70,000", image: tag },
  { id: 4, name: "Tissot PRX", price: "₹95,000", image: tissot },
  { id: 5, name: "Casio Edifice", price: "₹12,999", image: casio },
];


const NewArrivals = () => {
  return (
    <div className="px-6 py-8">
      <h2 className="text-3xl font-semibold mb-4 text-white">New Arrivals</h2>

      <div className=" overflow-x-scroll whitespace-nowrap flex gap-20 scrollbar-thin scrollbar-thumb-[#00564D] scrollbar-track-transparent px-4 py-2 pb-16 ">
        {watches.map(watch => (
  <div
    key={watch.id}
    className="inline-block bg-white rounded-lg shadow-md text-black min-w-[200px] p-4 transition-colors duration-300 hover:bg-gray-200"
  >
    <img
      src={watch.image}
      alt={watch.name}
      className="w-auto flex h-[180px] object-cover rounded-md mb-2 mx-auto"
    />
    <h3 className="font-semibold text-lg">{watch.name}</h3>
    <p className="text-sm text-gray-600">{watch.price}</p>
  </div>
))}
      </div>
    </div>
  );
};

export default NewArrivals;
