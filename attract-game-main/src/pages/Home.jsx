import React from "react";
import Layout from "../layouts/Layout";
import HeroSection from "../components/HeroSection";
import GamesCard from "../components/GamesCard";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <GamesCard />
    </Layout>
  );
}

export default Home;
