/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import Home from "@/components/Home";
import Experience from "@/components/Experience";
import Head from "next/head";
import Publications from "@/components/Publications";

const navItems = [
  "Home",
  "Experience",
  "Projects",
  "Publications",
  "CV",
  "Contact",
];

export default function PortfolioLayout() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nguyen Viet Hoang Nam",
              affiliation: "International University, VNU-HCMC",
              jobTitle: "Undergraduate Researcher",
              sameAs: [
                "https://github.com/nvhnam",
                "https://orcid.org/0009-0005-7710-6385",
                "https://scholar.google.com/citations?user=EjUQvtUAAAAJ&hl=en",
                "https://linkedin.com/in/nvhnam01",
              ],
            }),
          }}
        />
      </Head>
      <div className="flex min-h-screen bg-slate-50 text-slate-800">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="w-full md:w-2/3 lg:w-2/3 p-6 mt-15 md:mt-0">
          <nav className="sticky top-0 bg-slate-50 z-10 border-b border-gray-200 mb-6">
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
              {active === "Publications" && <Publications />}
            </motion.div>
          </section>
        </main>
      </div>
    </>
  );
}
