/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import Home from "@/components/Home";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Cv from "@/components/Cv";
import ProjectsPage from "./projects/page";

const navItems = ["Home", "Experience", "Projects", "Publications", "CV"];

export default function PortfolioLayout() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <div className="flex min-h-screen bg-slate-50 text-slate-800">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="w-full md:w-2/3 lg:w-2/3 p-6 mt-15 md:mt-0">
          <nav className="top-0 bg-slate-50 z-10 border-b border-gray-200 mb-6">
            <div className="overflow-x-auto scrollbar-hide">
              <ul className="flex space-x-4 p-2 text-sm font-medium whitespace-nowrap">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => setActive(item)}
                      className={`px-3 py-2 cursor-pointer rounded transition-all duration-200 ${
                        active === item
                          ? "bg-blue-100 text-blue-700"
                          : "hover:bg-slate-200"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <section>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow"
            >
              {active === "Home" && <Home />}
              {active === "Experience" && <Experience />}
              {active === "Projects" && <ProjectsPage />}
              {active === "Publications" && <Publications />}
              {active === "CV" && <Cv />}
            </motion.div>
          </section>
        </main>
      </div>
    </>
  );
}
