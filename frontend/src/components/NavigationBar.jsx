import React from 'react';
import SquareButton from "./SquareButton"

const NavigationBar = () => {
  return (
    <nav
      className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="flex flex-wrap items-center justify-between mx-auto py-1 px-8">
        <a href={process.env.PUBLIC_URL} className="flex items-center">
        <img src={process.env.PUBLIC_URL + '/edusight-logo.svg'} className="h-9 mr-3" alt="Edusight Logo" />
        </a>
        <div className="flex md:order-2">
          <SquareButton text="Anmelden" link={process.env.PUBLIC_URL} isDark={false}/>
          <div className="hidden sm:block">
          <SquareButton text="Registrieren" link={process.env.PUBLIC_URL} isDark={true}/>
          </div>
          {/* <button data-collapse-toggle="navbar-sticky" type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button> */}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
