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
      <nav className="bg-bgDark  text-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        {/* <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ol className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ol>
          </div>
        </div> */}
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
