import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="mt-1 mb-1">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
