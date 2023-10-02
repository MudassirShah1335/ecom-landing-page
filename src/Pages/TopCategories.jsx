import React from "react";
import CategoryCard from "../components/CategoryCard";
function TopCategories() {
  return (
    <div className="mx-10 mt-20 ">
      <div className="flex flex-col w-full h-full">
        <h1 className="text-4xl text-black font-bold flex items-center justify-center">
          Shope Our Top Categories
        </h1>
        <div className="flex flex-row w-full pb-10">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
}

export default TopCategories;
