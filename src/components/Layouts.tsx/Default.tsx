import { useState } from "react";
import { NavBar } from "./NavBar";

// iconimport
import { RxHamburgerMenu } from "react-icons/rx";

export const Default = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);
  return (
    <>
      <div className="hidden sm:flex sticky top-0">
        <NavBar />
      </div>
      <button
        className={`fixed p-[9.2px] left-2 top-2 h-10 w-10 z-50 shadow-md rounded-full flex items-center justify-center border border-gray-300 sm:hidden ${
          isActive ? "bg-violet-400" : ""
        }`}
        onClick={handleClick}
      >
        <RxHamburgerMenu className="h-5 w-5" />
      </button>
      {isActive && (
        <section>
          <NavBar />
        </section>
      )}
    </>
  );
};
