import { BrowserRouter, NavLink } from "react-router-dom";

// Pages
import { Index } from "../../pages/Index";
import { Fridge } from "../../pages/Fridge";
import { Recipe } from "../../pages/Recipe";
import { Contact } from "../../pages/Contact";

// iconimport
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { RiFridgeLine } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export const NavBar = () => {
  const [itemSearch, setItemSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setItemSearch(e.target.value);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(itemSearch);
    }
  };

  const navBarList = [
    { name: "Home", icon: <IoMdHome />, path: "/", element: <Index /> },
    {
      name: "Fridge",
      icon: <RiFridgeLine />,
      path: "/fridge",
      element: <Fridge />,
    },
    {
      name: "Recipe",
      icon: <IoBookSharp />,
      path: "/recipe",
      element: <Recipe />,
    },
    {
      name: "Contact",
      icon: <MdPhone />,
      path: "/contact",
      element: <Contact />,
    },
  ];

  return (
    <BrowserRouter>
      <section className="fixed flex items-center justify-center left-12 sm:left-2 top-2 z-30 overflow-hidden">
        <button className="hidden sm:block h-10 w-10 p-[9.2px] rounded-lg hover:border hover:border-gray-400">
          <RxHamburgerMenu className="h-5 w-5" />
        </button>
        <p className="px-1 py-2 m-0 text-lg pointer-events-none">
          Sepintaslalu Sdn Bhd
        </p>
      </section>
      <div
        id="sidenav"
        className="relative flex flex-col h-screen w-60 bg-violet-300 overflow-hidden"
      >
        <ul className="mt-16 ml-2">
          {navBarList.map((item) => (
            <li
              key={item.path}
              className={`px-2 py-4 rounded-l-lg hover:bg-violet-500 ${""}`}
            >
              <NavLink to={item.path} className="flex items-center space-x-5">
                <span className="h-4 w-4">{item.icon}</span>
                <span className="text-normal">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <section className="fixed bottom-0 left-0 w-full px-2 py-4">
          <input
            type={"text"}
            placeholder="Search ..."
            value={itemSearch}
            className="px-4 py-2 z-20 rounded-lg text-left border border-gray-500"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
          <button className="fixed bottom-7 left-48 z-30">
            <IoSearchOutline className="h-5 w-5" />
          </button>
        </section>
      </div>
    </BrowserRouter>
  );
};
