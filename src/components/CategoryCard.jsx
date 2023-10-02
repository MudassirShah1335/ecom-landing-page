import React from "react";

function CategoryCard({ image, title, desc }) {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
      <img
        src="https://cdn.cdkeys.com/245x340/media/catalog/product/n/e/new_project_-_2023-06-22t124310.801_1.jpg"
        alt="University of Southern California"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <h3 className="z-10 mt-3 text-3xl font-bold text-white">Forza</h3>
      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        Forza Horizon 4 Xbox One/PC
      </div>
    </article>
  );
}

export default CategoryCard;
