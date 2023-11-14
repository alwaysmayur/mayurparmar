"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    // Check the state of the sidebar and add/remove the 'overflow-hidden' class accordingly
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSidebarOpen]);

  return (
    <header className="bg-bgDark">
      <nav className="bg-bgDark ">
        <div className="flex bg-bgDark w-full py-3 px-3 content-center items-center justify-between">
          <div className="log">
            <a href="">
              <Image
                src="/media/images/logo.png"
                width={50}
                height={50}
                alt="logo"
              />
            </a>
          </div>
          <div className="flex bg-bgDark lg:hidden">
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
          <div className="hidden lg:flex  text-md text-textGray">
            {/* <div className="flex items-center space-x-2 mr-5">
              <span className="text-textBlue  line-height-8 font-mono ">03.</span>
              <span  className=" font-smeibold">Work</span>
            </div> */}

            <Link href="#about">
              <div className="flex items-center space-x-2 mr-5">
                <span className="text-textBlue  line-height-8 font-mono ">
                  01.
                </span>
                <span className=" font-smeibold">About </span>
              </div>
            </Link>

            <Link href="#experience">
              <div className="flex items-center space-x-2 mr-5">
                <span className="text-textBlue  line-height-8 font-mono ">
                  02.
                </span>
                <span className=" font-smeibold">Experience</span>
              </div>
            </Link>

            <Link href="#contact">
              <div className="flex items-center space-x-2 mr-5">
                <span className="text-textBlue  line-height-8 font-mono ">
                  03.
                </span>
                <span className=" font-smeibold">Contact</span>
              </div>
            </Link>
          </div>

          <aside
            tabIndex={1}
            className={`lg:hidden w-9/12 fixed z-99 inset-y-0 right-0 bg-bgNav text-white p-8  ${
              isSidebarOpen ? "" : "hidden"
            }`}
          >
            <button
              onClick={closeSidebar}
              className="absolute top-0 right-4 p-2 text-white"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex justify-center content-center items-center h-full">
              <div className="flex flex-col">
                <Link href="#about">
                  <div onClick={closeSidebar} className="flex content-center flex-col items-center space-x-2 mr-5 pb-5">
                    <span className="text-textBlue  line-height-8 font-mono ">
                      01.
                    </span>
                    <span  className=" font-smeibold">
                      About
                    </span>
                  </div>
                </Link>

                <Link href="#experience">
                  <div onClick={closeSidebar} className="flex content-center flex-col items-center space-x-2 mr-5 pb-5">
                    <span className="text-textBlue  line-height-8 font-mono ">
                      02.
                    </span>
                    <span  className=" font-smeibold">
                      Experience
                    </span>
                  </div>
                </Link>

                <Link href="#contact">
                  <div  onClick={closeSidebar} className="flex content-center flex-col items-center space-x-2 mr-5 pb-5">
                    <span className="text-textBlue  line-height-8 font-mono ">
                      03.
                    </span>
                    <span  className=" font-smeibold">
                      Contact
                    </span>
                  </div>
                </Link>
              </div>
            </nav>
          </aside>
        </div>
      </nav>
    </header>
  );
}
