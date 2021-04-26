import React from "react";

function Header() {
  const darkMode = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };
  return (
    <div className="relative bg-mobile-light dark:bg-mobile-dark bg-no-repeat bg-cover h-[200px] z-0">
      <h2 className="absolute text-2xl font-bold top-[23%] left-[25px] text-white">
        TODO
      </h2>
      <div
        className="absolute bg-icon-light bg-cover bg-no-repeat h-6 w-6 top-[26%] right-[22px] cursor-pointer dark:bg-icon-dark"
        onClick={() => {
          console.log("darkmode activate");
          darkMode();
        }}
      ></div>
    </div>
  );
}

export default Header;
