import React from "react";

const Footer = () => {
  return (
    <div className="mt-[50px] px-[16px] sm:px-[30px] md:px-[110px] lg:px-[150px]  py-[100px] bg-[#eceef1] w-full ">
      <div className=" w-full  px-[16px]  md:flex justify-between items-center md:gap-10 ">
        <div className=" md:text-[16px] ">
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
        <img
          src="/paylodelogo.png"
          alt=""
          className="lg:h-[45px] h-[38px] object-contain "
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px] md:gap-[30px] lg:gap-[50px]">
          <div className="">
            <h4 className="font-bold text-[20px] mb-2 ">Products</h4>
            <ul className="flex flex-col gap-2">
              <li className="text-[15px] hover:text-[#124072] ">
                {" "}
                <a href="/billvending">Billvending</a>
              </li>
              <li className="text-[15px] hover:text-[#124072]">
                {" "}
                <a href="/paymentlink">Payment Link</a>{" "}
              </li>
              <li className="text-[15px] hover:text-[#124072] ">Checkout</li>
              <li className="text-[15px] hover:text-[#124072]">
                {" "}
                <a href="/pricing">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-bold">Resources</h4>
            <ul className="flex flex-col gap-2">
              {" "}
              <li className="text-[15px] hover:text-[#124072]">Support</li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-bold">Legal</h4>
            <ul className="flex flex-col gap-2">
              <li className="text-[15px] hover:text-[#124072]">Terms of Use</li>
              <li className="text-[15px] hover:text-[#124072] ">Privacy Policy</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-2">
              <li className="font-bold"> Developers</li>
              <li className="text-[15px] "><a href="http://94.229.79.27:65123/">API Documentation</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="font-bold">Contact</h4>
            <ul className="flex flex-col gap-2">
              {" "}
              <li className="text-[15px] whitespace-nowrap ">
                +234-808-381-0030
              </li>
              <li className="text-[15px] ">sales@paylodeservices.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
