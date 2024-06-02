import React, { useState } from "react";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import logo from "/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch className="text-Black w-6 h-6 cursor-pointer hidden md:block" />
        <a href="/" className="">
          <img src={logo} alt="" />
        </a>

        {/* account and shopping btn */}
        <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-2 ">
            <FaUser /> Account
          </a>
          <a href="/" className="flex items-center gap-2 container">
            <FaShoppingBag /> Shoping
          </a>
        </div>

        <div className="sm:hidden">
            <button onClick={toggleMenu}>
                {
                    isMenuOpen ? <FaTimes className="w-6 h-6 text-black"/> : <FaBars className="w-6 h-6 text-black"/>
                }
            </button>
        </div>
      </nav>
      <hr />
      {/* nav items */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-black hidden">
          {navItems.map(({ title, path}) => (
            <li key={title} className=" hover:text-orange-500">
              <NavLink
                to={path}
                className={({ isActive}) => isActive ? "active" : ""}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu items */}
      <div>
        <ul className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
          {navItems.map(({ title, path }) => (
            <li key={title} className=" hover:text-orange-500 my-3 cursor-pointer">
              <Link
                to={path}
                onClick={toggleMenu}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      
    </header>
  );
};

export default Navbar;














// import {React} from 'react';
// import { FaSearch, FaTimes } from "react-icons/fa";
// import {logo} from "../public/company/logo.png"
// const Navbar = () => {

//     const [isMenuOpen, setIsMenuOpen]= useState(false);
//     const toggleMenu =() =>{
//         setIsMenuOpen(isMenuOpen)

//     }

//     const navItems =[
//         {title: "Men and women collection", path:"/"},
//         {title: "Clothing and shoes", path:"/"},
//         {title: "Home and living ", path:"/"},
//         {title: "Wedding and party ", path:"/"},
//         {title: "Art and collectables", path:"/"},
//         {title: "craft supplies and tools", path:"/"},
//     ]
//     return (
//     <header className= 'max-w-screen-2xl xl:px-28 px-4'>
//     <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3 ">
//         <FaSearch className= "text-Black w-5 h-5 cursor-pointer hidden md:block"/>
//         {/* logo  */}
//         <a href="/"><img src="{logo}" alt="" /></a>
//         {/* /* acoount and 
//         shopping button  */}
//         <div className='text-lg text-black sm:flex items-center gap-4 hidden' >
//         <a href="/" className='flex item-center gap-2'><FaUser /> Account</a>
//         <a href="/" className='flex item-center gap-2'><FaShoppingBag /> Add to cart</a>
//         </div>
//         {/* navbar for mobile */}
//         <div className='sm:hidden '>
//             <button onClick={toggleMenu}>
//                 {
//                 isMenuOpen ? <FaTimes className="w-5 h-5 text"/>:  <FaBars className="w-5 h-5 text"/>}
//             </button>

//         </div>
//         </nav>
//         <hr/>
//         {/* category list */}
//         <div className="pt-4">
//             <ul className="lg:flex items-center justify-between text-black hidden">
//                 {
//                 navItems.map(({title, path}) => (
//                     <li key={title} className='hover:text-stone-400'>
//                         <Link to="/">{title}</Link>
//                     </li>

//                 ))
// }
//             </ul>
//         </div>
//         {/* only mobile menu items */}
//     </header>
//     );
// };

// export default Navbar;