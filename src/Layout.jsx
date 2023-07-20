import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/FooterTryTwo";

export default function Layout() {
  return (
    <div id="main-parent">
      <Header />
      <main>
      <Outlet />
      </main>
      <Footer />
    </div>
  );
}
