import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Header.css'
import logo from '../../assets/logo.png'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaBars, FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { HiX } from "react-icons/hi";
import { useState } from 'react';
const Header = () => {
  const { user, Logout, loding } = useContext(AuthContext);
  console.log(user);
    const [showName, setShowName] = useState(false);
  const [open, setOpen] = useState(false);
const handleHover = () => {
  setShowName(true);
};

const handleLeave = () => {
  setShowName(false);
  };
  


  const handlLogut = () => { 
    const process = confirm('Are you sure you want to log')
    if (process) {
       Logout()
         .then(() => {
           alert("You have been logged out");
         })
         .catch((error) => {
           // An error happened.
           console.log(error);
         });
    }
  

  }
  

  

  return (
    <div className="header  relative">
      <div className="top-nav hidden md:flex">
        <div className="flex gap-7 items-center">
          <span>
            <AiOutlineMail></AiOutlineMail>
          </span>{" "}
          <h1> bytoy@gmail.com</h1>
          <AiOutlinePhone></AiOutlinePhone>
          <h1>Phone:+008015845485</h1>
        </div>

        <div>
          <select className="select select-bordered select-xs w-full max-w-xs">
            <option disabled selected>
              USD
            </option>
            <option>Taka</option>
          </select>
        </div>
      </div>

      <div className="middle-nav flex justify-between items-center py-3 px-[2%] md:px-[5%] bg-slate-100">
        <img
          className="w-14 h-14 md:w-16 md:h-16 rounded-full "
          src={logo}
          alt=""
        />

        <span className="flex items-center md:w-[50%] relative">
          {" "}
          <input
            type="search"
            placeholder="search toy....."
            className="w-[100%] py-3 px-4 border rounded-md shadow-md "
          />
          <FaSearch className=" absolute  right-0 mr-2 text-blue-400"></FaSearch>
        </span>

        <span>
          {" "}
          <FaShoppingCart
            className="md:w-8 md:h-8
          w-6 h-6 text-blue-400"
          ></FaShoppingCart>
        </span>
      </div>

      <div className="navbar bg-slate-200 font-serif md:px-[10%] flex justify-between  items-center uppercase  relative">
        <a className="font-extrabold text-transparent text-2xl md:text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 ">
          asphalt 
        </a>

        <div className={`smalle ${open ? "top-[64px]" : "-top-[500px]"} text-blue-600`}>
          <ul className=" md:flex md:gap-10">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/alltoy"}>
              <li>All Toy</li>
            </NavLink>

            {user && (
              <>
                {" "}
                <NavLink to={"/mytoy"}>
                  <li>MyToy</li>
                </NavLink>
                <NavLink to={"/addtoy"}>
                  <li>Add Toy</li>
                </NavLink>
              </>
            )}
            <NavLink to={"/blog"}>
              <li>Blog</li>
            </NavLink>
          </ul>
          <div className="right-itm">
            <ul className="md:flex  md:gap-10 items-center ms-10">
              {user ? (
                <>
                  <NavLink to={"/profile"}>
                    <li
                      onMouseOver={handleHover}
                      onMouseLeave={handleLeave}
                      className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"
                    >
                      <img
                        className="w-10 h-10 rounded-full "
                        src={user?.photoURL}
                        alt=""
                      />
                    </li>
                    {showName && (
                      <span className=" absolute text-blue-600 z-50">
                        {user?.displayName}
                      </span>
                    )}
                  </NavLink>
                  <button onClick={handlLogut} className="btn btn-xs bg-blue-500">
                    Logout
                  </button>
                </>
              ) : (
                <NavLink to={"/signup"}>
                  <li>SignUp</li>
                </NavLink>
              )}

              <NavLink to={"/login"}>
                <li>Log in</li>
              </NavLink>
            </ul>
          </div>
        </div>

        <div onClick={() => setOpen(!open)} className="manubar md:hidden">
          {!open ? (
            <FaBars className="w-6 h-6"></FaBars>
          ) : (
            <HiX className="w-6 h-6"></HiX>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;