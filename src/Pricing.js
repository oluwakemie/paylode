import React from "react";
import Navbar from "./component/Navbar";
import GetStarted from "./component/GetStarted";
import Footer from "./component/Footer";

const Pricing = () => {
  
  return (
    <div>
      <Navbar />
      <section className="bg-[#FFF] w-full flex flex-col px-[16px]  md:flex-row md:px-[30px] justify-center lg:px-[90px] py-[50px]    ">
        <h1 className=" text-center text-[#15487D] text-[50px] font-bold md:text-[100px] leading-tight">
          Transparent <br />
          <span className="text-[#3BB75E]">pricing</span>
        </h1>
      </section>
      <section className="bg-[#F3F6F8] w-full flex px-[16px] justify-center md:px-[30px] lg:px-[90px] py-[50px]   ">
        <h1 className="text-[35px] text-[#3D3E3E] font-bold md:text-[45px] lg:text-[70px]">
          Collection for <span className="text-[#3BB75E]"> NIGERIA</span>
        </h1>
      </section>
      <section className="bg-[#F3F6F8] w-full flex flex-col px-[16px]  md:flex-row md:px-[30px] justify-between lg:px-[90px] py-[50px]">
        <div className="mt-10 grid grid-cols-1  md:grid-col-1 lg:grid-cols-2 gap-[60px] ">
          <div className="max-w-[500px] bg-[#fff] shadow-lg py-[50px] px-[30px]">
            <p className="font-bold text-[25px] text-center">
              For Local Transactions
            </p>
            <p className="text-[70px] text-[#15487DCC]">
              1.5%
              <span className="text-[25px] text-[#3D3E3E] font-semibold">
                {" "}
                Transaction Charge
              </span>
            </p>
            <div className="flex mt-5">
              <img src="/checkbutton.svg" alt="" />
              <p className="text-[20px] font-semibold text-[#3D3E3E] ">
                ₦75 transaction fee for transactions above ₦5,000
              </p>{" "}
            </div>
            <div className="flex mt-5">
              <img src="/checkbutton.svg" alt="" />
              <p className="text-[20px] font-semibold text-[#3D3E3E] ">
                ₦75 transaction fee for transactions above ₦5,000
              </p>{" "}
            </div>
          </div>
          <div className="max-w-[500px] bg-[#fff] shadow-lg py-[50px] px-[30px]">
            <p className="font-bold text-[25px] text-center">
              For International Transactions
            </p>
            <p className="text-[35px] text-center mt-5 text-[#15487DCC] font-semibold">
              Available on request
            </p>
            <hr className="bg-[#15487DCC]" />
            <div className="flex mt-10 gap-2">
              <img src="/checkbutton.svg" alt="" />
              <p className="text-[20px] font-semibold text-[#3D3E3E] ">
                Transferring funds in USD to a domestic account with our
                designated settlement bank.
              </p>{" "}
            </div>
            <div className="flex mt-10 gap-2">
              <img src="/checkbutton.svg" alt="" />
              <p className="text-[20px] font-semibold text-[#3D3E3E] ">
                Accept payments and receive funds from anyone, anywhere in the
                world.
              </p>{" "}
            </div>
          </div>
        </div>
      </section>
      <div className="text-[25px] bg-[#F3F6F8] w-full flex flex-col px-[16px]   md:flex-row md:px-[30px] md:text-[50px] justify-center lg:px-[90px] py-[50px] ">
        <h1>Frequently Asked Questions</h1>
      </div>
      <section className="bg-[#F3F6F8] w-full  px-[16px] shadow-md border-black  md:flex-row md:px-[30px]  lg:px-[90px] py-[50px]">
       <hr /> <div className="p-4 text-[25px] font-semibold flex justify-between">
          When do i get my settlement?
          <img src="/Button.svg" alt="" className="" />
        </div>
        <hr /> <div className="p-4 text-[25px] font-semibold flex justify-between">
        Who pay for the transaction charge?
          <img src="/Button.svg" alt="" className="" />
        </div>
        <hr /> <div className="p-4 text-[25px] font-semibold flex justify-between">
        Can I get settled in USD?
          <img src="/Button.svg" alt="" className="" />
        </div>
        <hr /> <div className="p-4 text-[25px] font-semibold flex justify-between">
        How can I contact support for other questions?
          <img src="/Button.svg" alt="" className="" />
        </div>
        <hr /> <div className="p-4 text-[25px] font-semibold flex items-center justify-between">
        How much does it cost to create a Paylode account
          <img src="/Button.svg" alt="" className="" />
        </div> <hr />
      </section>
      <GetStarted/>
      <Footer/>
    </div>
  );
};

export default Pricing;
