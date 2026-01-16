import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="mt-10 md:mt-12.5 flex-1 bg-linear-to-br from-[#ffecec] via-[#edf1ff] to-[#fff6d6] p-6 md:p-0" >
        <section className="md:w-11/12 mx-auto min-h-screen">
          <Outlet></Outlet>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
