import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="main-parent">
      <Header />
      <main>
      <Outlet />
      </main>
      <footer>wgoegj</footer>
    </div>
  );
}
