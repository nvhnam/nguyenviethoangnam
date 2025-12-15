/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu,
  MapPin,
  Mail,
  X,
  Github,
  GraduationCap,
  BookOpen,
  UserCircle,
  Linkedin,
} from "lucide-react";
import { descriptionText } from "@/constants";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-40 bg-gray-100 p-2 rounded-lg shadow-md"
        aria-label="Open menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>

      <span className="sr-only">{descriptionText}</span>

      <aside
        className={`fixed md:static z-30 top-0 left-0 h-full md:h-auto bg-white shadow-md w-64 overflow-y-auto overscroll-contain transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="p-6 flex flex-col items-center">
          <Image
            src="/profile/Nguyen Viet Hoang Nam picture.webp"
            alt={descriptionText}
            width={150}
            height={150}
            className="rounded-full object-cover w-32 h-32 mb-4 border-4 border-blue-200"
          />
          <h1 className="text-xl font-bold text-center">
            Nguyen Viet Hoang Nam
          </h1>
          <p className="text-sm text-center mt-2">
            Software Engineer & AI Researcher passionate about technology and
            human-centered design.
          </p>
          <div className="space-y-4 text-sm mt-5">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span>Ho Chi Minh, Vietnam</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />

              <p
                className="
                  text-sm
                  leading-snug
                  break-words
                  hyphens-auto
                  max-w-[11rem]
                  md:max-w-full
                "
              >
                <span className="block font-medium md:inline">
                  University of Information Technology
                </span>
                <span className="block text-xs text-gray-500 md:inline md:ml-1">
                  (VNU-HCM)
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-400" />
              <a href="mailto:nvhnam01@gmail.com">nvhnam01@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-blue-700" />
              <a
                href="https://www.linkedin.com/in/nguyenviethoangnam"
                target="_blank"
              >
                nvhnam01
              </a>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-blue-500" />
              <a href="https://x.com/nvh_nam" target="_blank">
                nvh_nam
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-black" />
              <a href="https://github.com/nvhnam" target="_blank">
                nvhnam
              </a>
            </div>

            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <a
                href="https://scholar.google.com/citations?user=EjUQvtUAAAAJ&hl=en"
                target="_blank"
              >
                Google Scholar
              </a>
            </div>
            <div className="flex items-center gap-2">
              <UserCircle className="w-4 h-4 text-green-600" />
              <a href="https://orcid.org/0009-0005-7710-6385" target="_blank">
                ORCID
              </a>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-orange-600" />
              <a
                href="https://www.scopus.com/authid/detail.uri?authorId=59772480900"
                target="_blank"
              >
                Scopus
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
