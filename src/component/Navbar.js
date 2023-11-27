import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [productOption, setProductOption] = useState(false);

  const handleOption = () => {
    setProductOption(!productOption);
  };

  useEffect(() => {
   
  });

  const handleMouseEnter = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("mouse enter");
  };

  // const handleMouseLeave = () => {
  //   setIsDropdownOpen(false);
  //   console.log("mouse leave");
  // };

  const handleToggle = () => {
    setToggle(!toggle);
    setShowMenu(!showMenu);
  };

  return (
    <div className="sticky w-full bg-white z-1000 lg:relative shadow ">
      <div className="flex flex-row items-center   justify-between relative px-[30px] md:px-[50px] lg:px-[60px] py-[12px]">
        <Link to="/">
          <img
            src="/paylodelogo.png"
            alt=""
            className="lg:h-[45px] h-[38px] mr-5"
          />
        </Link>
        <nav className="hidden  lg:inline-block">
          <ul className="flex flex-row space-x-3 items-center text-[#124072]  gap-[30px]  ">
            <li
              onClick={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              className="cursor-pointer border-b  hover:text-[##990019] hover:border-b hover:border-b-lg hover:border-b-[#124072] py-3"
            >
              Products
            </li>

            <Link to="/pricing">
              <li className="cursor-pointer hover:text-[##990019] border-b  hover:border-b hover:border-b-lg hover:border-b-[#124072] py-3">
                Pricing
              </li>
            </Link>
            <Link to="https://docs.paylodeservices.com/" target="_blank" rel="noreferrer">
              <li className="cursor-pointer hover:text-[##990019] border-b  hover:border-b hover:border-b-lg hover:border-b-[#124072] py-3">
                Developer
              </li>
            </Link>
            <Link to="/support">
              <li className="cursor-pointer hover:text-[##990019] border-b  hover:border-b hover:border-b-lg hover:border-b-[#124072] py-3">
                Support
              </li>
            </Link>
          </ul>
        </nav>
        <button className=" py-[8px] px-[24px] bg-[#124072] text-white rounded-lg hidden lg:inline-block">
          <a
            href="https://pgmerchants.paylodeservices.com/"
            target="_blank"
            rel="noreferrer"
          >
            Get Started
          </a>
        </button> 
        <button onClick={handleToggle} className="lg:hidden md:inline-block">
          {toggle ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>
      </div>
      {showMenu && (
        <div className="bg-gray-100  right-1 rounded-md shadow -bottom-[320px] lg:hidden w-full py-5 px-3 z-10">
          <ul className="flex flex-col space-y-8 mb-2 ">
            <Link to="/">
              <li className="cursor-pointer border-b text-[#124072] hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                Home
              </li>
            </Link>

            <li className="cursor-pointer border-b text-[#124072] hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
              <button
                onClick={handleOption}
                className="flex justify-between items-center mb-2 cursor-pointer w-full"
              > 
              
                Products{" "}
                {productOption ? (
                  <button>
                    <IoIosArrowUp />{" "}
                  </button>
                ) : (
                  <button onClick={handleOption}>
                    <IoIosArrowDown />
                  </button>
                )}
              </button>

              {productOption && (
                <div className="mt-6">
                  <ul className="flex flex-col gap-y-3">
                    <Link to="/payment">
                      <li className="cursor-pointer border-b text-[#124072] hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                        Payments
                      </li>
                    </Link>
                    <Link to="/billvending">
                      <li className="cursor-pointer border-b text-[#124072] hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                        Bill Vending
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>

            <Link to="/pricing">
              <li className="cursor-pointer border-b text-[#124072] hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                Pricing
              </li>
            </Link>
            <Link to="http://94.229.79.27:65123/" target="_blank">
            <li className="cursor-pointer border-b text-[#124072] hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
              Developer
            </li>
            </Link>
            {/* <li className="cursor-pointer border-b hover:text-[##990019] hover:border-b-[#124072]">
                Event
              </li> */}
          </ul>
          <button className=" py-[8px] px-[24px] bg-[#124072] mt-4 text-white font-bold rounded-md">
            <a
              href="https://pgmerchants.paylodeservices.com/"
              target="_blank"
              rel="noreferrer"
            >
              Get Started
            </a>
          </button>
        </div>
      )}

      {isDropdownOpen && (
        <div
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          className={`bg-gray-100 absolute left-[30%] rounded-md shadow -bottom-[80px] hidden lg:block min-w-[200px] py-5 px-3 z-10`}
        >
          <ul>
            <Link to="/payment">
              <li className="cursor-pointer border-b text-[#124072] hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                Payments
              </li>
            </Link>
            <Link to="/billvending">
              <li className="cursor-pointer border-b text-[#124072] hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                Bill Vending
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;