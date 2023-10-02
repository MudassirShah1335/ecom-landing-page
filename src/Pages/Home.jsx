import React from "react";
import MainLayout from "../MainLayout/MainLayout";
import Carusal from "../components/Carusal";
import EcommerceCard from "../components/Card";
import TopCategories from "./TopCategories";
import PopularProduct from "../components/PopularProduct";
import SliderShow from "../components/SliderShow";
import Category from "../components/Category";
function Home() {
  return (
    <MainLayout>
      <Carusal />
      <Category />
      <TopCategories />
      <PopularProduct />
      <SliderShow />
    </MainLayout>
  );
}

export default Home;
