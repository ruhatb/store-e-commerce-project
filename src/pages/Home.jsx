import React from "react";
import { Outlet } from "react-router-dom";
import { Hero, Navbar } from "../components";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import CardComponent from "../components/CardComponent";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />

      <CardComponent />
      <Footer />
    </>
  );
};

export default Home;
