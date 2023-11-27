import React from "react";
import Navbar from "./component/Navbar";
import GetStarted from "./component/GetStarted";
import Footer from "./component/Footer";
const Paylodecheckout = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-[#092E55] w-full flex flex-col px-[16px]  md:flex-row md:px-[30px]  items-center lg:px-[90px] py-[20px]  justify-between  ">
        <div className="py-10 w-full text-white md:w-[50%]">
          <h2 className="text-[50px] font-bold">
            Embrace the Future with our payment gateway
          </h2>
          <div className="flex gap-1 mt-10">
            <img src="/Ellipse.svg" alt="" />
            <p>Simplify Your Checkout Experience.</p>
          </div>
          <div className="flex gap-1 mt-3">
            <img src="/Ellipse.svg" alt="" />
            <p>Secure and Seamless Payments at Your Fingertips.</p>
          </div>
          <div className="flex gap-1 mt-3">
            <img src="/Ellipse.svg" alt="" />
            <p>Fast Settlement</p>
          </div>
        </div>

        <div className="w-full md:w-[50%] flex justify-center">
          <img src="/circle.png" alt="" />
        </div>
      </section>
      <section className="bg-[#F3F6F8] w-full flex flex-col px-[16px]  md:px-[30px]  items-center lg:px-[90px] py-[40px]  justify-between  ">
        <div className="w-full flex justify-center ">
          <h1 className="text-[20px] md:text-[30px] text-center font-bold">
            Our Checkout features
          </h1>{" "}
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[60px] ">
          <div className="px-9 py-8 shadow-lg bg-[#fff] rounded-lg">
            <img src="/Split.svg" alt="" />
            <p className=" font-semibold mb-2 text-[22px]">
              Improved Checkout Experience
            </p>
            <p className="text-[16px]">
              A seamless and user-friendly checkout process provided by payment
              gateways can reduce cart abandonment rates and improve the overall
              customer experience.
            </p>
          </div>
          <div className="px-9 py-8 shadow-lg bg-[#fff] rounded-lg">
            <img src="/Success.svg" alt="" />
            <p className=" text-[22px] font-semibold mb-2">
              Time and Cost Savings
            </p>
            <p className="text-[16px]">
              A seamless and user-friendly checkout process provided by payment
              gateways can reduce cart abandonment rates and improve the overall
              customer experience.
            </p>
          </div>
          <div className="px-9 py-8 shadow-lg bg-[#fff] rounded-lg">
            <img src="/Coin.svg" alt="" />
            <p className="text font-semibold text-[22px] mb-2">
              Cross Boarder Transactions
            </p>
            <p className="text-[16px]">
              A seamless and user-friendly checkout process provided by payment
              gateways can reduce cart abandonment rates and improve the overall
              customer experience.
            </p>
          </div>
          <div className="px-9 py-8 shadow-lg bg-[#fff] rounded-lg">
            <img src="/Topup.svg" alt="" />
            <p className="text font-semibold text-[22px] mb-2">
              Expands Payment Options
            </p>
            <p className="text-[16px]">
              Businesses can offer customers a wide range of payment options,
              including credit/debit cards, digital wallets, bank transfers, and
              more. This flexibility can attract a broader customer base and
              increase conversion rates.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#092E55] w-full flex flex-col px-[26px]  md:flex-row md:px-[30px] gap-[70px] items-center lg:px-[90px] py-[30px]  ">
        <div className="w-full md:w-[50%]">
          <h4 className="text-[30px]  font-semibold text-white md:text-[48px]">
            Robust Security Measures
          </h4>
          <p className="text-[18px]  mt-5 text-white md:text-[28px] ">
            With advanced encryption technology and multiple layers of
            protection, Paylode checkout shields your sensitive data from
            unauthorized access, safeguarding your financial transactions. Rest
            easy knowing that your personal and financial information is in safe
            hands
          </p>
        </div>
        <div className="w-full md:w-[50%]">
          <img src="/paymentlogo.png" alt="" />
        </div>
      </section>
      <section
      className="bg-cover bg-center relative h-[1000px] md:h-[1300px]lg:"
      style={{ backgroundImage: 'url("/blue.png")' }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white ">
      <div className=" w-[600px] ">
          <h1 className="text-[40px] md:text-[60px] text-white">
            Unified <span className="text-[#3BB75E]">APl System</span>{" "}
          </h1>

          <p className="text-[15px] md:text-[18px] lg:text-[22px] mt-10 text-white">
            We've completed the foundational work on payment integrations and
            abstractions, making it simple for your team to seamlessly connect
            with our APIs and leverage a wide range of payment functionalities
          </p>
          <div className="mt-10 text-white flex items-center gap-3">
            <img src="/List.svg" alt="" />
            <p className="text-[15px] md:text-[20px]">Easy Integration</p>
          </div>
          <div className="mt-5 text-white flex items-center gap-3">
            <img src="/List.svg" alt="" />
            <p className="text-[15px] md:text-[20px]">
              Security and Compliance
            </p>
          </div>
          <div className="mt-5 text-white flex items-center gap-3">
            <img src="/List.svg" alt="" />
            <p className="text-[15px] md:text-[20px]">Automated Transactions</p>
          </div>
          <div className="mt-5 text-white flex items-center gap-3">
            <img src="/List.svg" alt="" />
            <p className="text-[15px] md:text-[20px]">Payment Notifications</p>
          </div>
          <div className="mt-5 text-white flex items-center gap-3">
            <img src="/List.svg" alt="" />
            <p className="text-[15px] md:text-[20px]">
              API Uptime and Reliability
            </p>
          </div>
          <div className="mt-5 text-white flex items-center gap-3">
            <img src="/List.svg" alt="" />
            <p className="text-[15px] md:text-[20px]">
              Cross-Platform Compatibility
            </p>
          </div>
          <button className=" py-[10px] px-[20px] mt-[100px] bg-[#FFF] hover:bg-[#1f5a99] text-[15px] text-[#124072] rounded-lg ">
            Read the API docs
          </button>
        </div>
      </div>
    </section>
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Paylodecheckout;
