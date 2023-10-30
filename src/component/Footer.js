import React from "react";

const Footer = () => {
  return (
    <div className="mt-[50px] px-[16px] sm:px-[30px] md:px-[110px] lg:px-[150px]  py-[100px] bg-[#D2D6DA] w-full ">
      <div className=" w-full  px-[16px]  md:flex justify-between items-center md:gap-10 ">
        <div className=" text-[20px]  text-[#15487D]">
          Paylode Services Limited enables the smooth <br /> and hassle-free
          reception and processing of payments <br /> from individuals and
          businesses worldwide
        </div>
        <div className=" flex flex-col gap-3 items-start ">
          <p className="text-[20px] text-[#15487D80]">Subscribe</p>
          <input
            type="email"
            name="email"
            class="mt-1 px-[16px] py-[11px] text-[16px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md w-[300px]"
            placeholder="Enter your email address"
          ></input>{" "}
          <button className=" py-[7px] px-[20px]  bg-[#124072] hover:bg-[#1f5a99] text-white text-[16px] font-bold rounded-lg ">
            Submit
          </button>
        </div>
      </div>
      <div className="mt-[100px] flex flex-col sm:flex-row gap-[30px] md:gap-[40px] lg:gap-[50px] ">
        <img src="/paylodelogo.png" alt="" className="lg:h-[45px] h-[38px] object-contain " />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px] md:gap-[40px] lg:gap-[50px]">
          <div className="mb-5">
            <h4 className="font-bold text-[20px] mb-2">Products</h4>
            <ul className="flex flex-col gap-2">
              <li className="text-[15px] ">Billvending</li>
              <li className="text-[15px] ">Payment Link</li>
              <li className="text-[15px] ">Checkout</li>
              <li className="text-[15px] ">Pricing</li>
            </ul>
          </div>
          <div className="mb-5">
            <h4 className="font-bold">Resources</h4>
            <ul className="flex flex-col gap-2">
              {" "}
              <li className="text-[15px] ">Support</li>
            </ul>
          </div>
          <div className="mb-5">
            <h4 className="font-bold">Legal</h4>
            <ul className="flex flex-col gap-2">
              <li className="text-[15px] ">Terms of Use</li>
              <li className="text-[15px] ">Privacy Policy</li>
            </ul>
          </div>
          <div className="mb-5">
            <ul className="flex flex-col gap-2">
              <li className="font-bold">Developers</li>
              <li className="text-[15px] ">API Documentation</li>
            </ul>
          </div>

          <div className="mb-5">
            <h4 className="font-bold">Contact</h4>
            <ul className="flex flex-col gap-2">
              {" "}
              <li className="text-[15px] whitespace-nowrap ">+234-808-381-0030</li>
              <li className="text-[15px] ">sales@paylodeservices.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
