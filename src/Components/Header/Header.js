import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const navigations = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "About",
      path: "/home/about",
    },
    {
      name: "Contact",
      path: "/home/contact",
    },
  ];

  return (
    <>
      <header className="text-gray-600 body-font bg-white shadow">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <Link
            to={"/home"}
            className="flex title-font font-medium items-center text-gray-900 md:mb-0 text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">ECommerce</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navigations.map((navigation) => {
              return (
                <Link to={navigation.path} className="mr-5 hover:text-gray-900 text-decoration-none text-black">
                  {navigation.name}
                </Link>
              );
            })}
          </nav>
          <Link to={'/home/cart'} className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700  rounded text-base md:mt-0 py-2">
            Go to Cart
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
