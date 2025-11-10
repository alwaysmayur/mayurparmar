"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { navLinks } from "@/public/data";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setIsSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  useEffect(() => {
    // Lock body scroll when sidebar is open
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Close on Escape key
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSidebar();
    };

    if (isSidebarOpen) document.addEventListener("keydown", onKey);

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", onKey);
    };
  }, [isSidebarOpen, closeSidebar]);

  return (
    <header className="bg-bgDark">
      <nav className="bg-bgDark">
        <div className="flex bg-bgDark w-full py-3 px-3 content-center items-center justify-between">
          <div className="log">
            <a href="">
              <Image
                src="/media/images/logo.png"
                width={50}
                height={50}
                alt="logo"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </a>
          </div>

          <div className="flex bg-bgDark md:hidden">
            <button onClick={openSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-textBlue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex text-md content-center items-center text-textGray">
            {navLinks.map(({ label, href, index }) =>
             (
                <Link key={index} href={href}>
                  <div className="flex items-center space-x-2 mr-5">
                    <span className="text-textBlue line-height-8 font-mono">
                      {index < 10 ? `0${index}.` : `${index}.`}
                    </span>
                    <span>{label}</span>
                  </div>
                </Link>
              )
            )}
          </div>

          {/* overlay - click to close */}
          <div
            className={`fixed inset-0 bg-black/40 transition-opacity duration-200 ${
              isSidebarOpen
                ? "opacity-100 z-40"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={closeSidebar}
            aria-hidden={!isSidebarOpen}
          />

          <aside
            id="mobile-sidebar"
            role="dialog"
            aria-modal="true"
            style={{ zIndex: 50 }}
            className={`md:hidden fixed right-0 top-0 h-full w-9/12 max-w-sm bg-bgNav text-white p-6 transform transition-transform duration-300 ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={closeSidebar}
              className="absolute top-4 right-4 p-2 text-white"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-textBlue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex justify-center items-center h-full">
              <div className="flex flex-col">
                {navLinks.map(({ label, href, index }) =>
                  index !== 0 ? (
                    <Link key={index} href={href}>
                      <div
                        onClick={closeSidebar}
                        className="flex flex-col items-center pb-5"
                      >
                        <span className="text-textBlue line-height-8 font-mono">
                          {index < 10 ? `0${index}.` : `${index}.`}
                        </span>
                        <span className="font-semibold">{label}</span>
                      </div>
                    </Link>
                  ) : (
                    ""
                  )
                )}
              </div>
            </nav>
          </aside>
        </div>
      </nav>
    </header>
  );
}
