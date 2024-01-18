import React, { useState } from "react";
import Navbar from "./component/Navbar";
import { Carousel } from "react-responsive-carousel";
import Footer from "./component/Footer";
import GetStarted from "./component/GetStarted";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const [org, setOrg] = useState("sme");
  return (
    <div class>
      <Navbar />
      <section className="px-[16px] flex flex-col justify-center gap-10  mt-10 md:flex-row md:px-[30px] lg:px-[90px] ">
        <div className="py-10 w-full  z-10 ">
          <h1 className="text-[#124072]  text-[30px] md:text-[40px] lg:text-[60px]  font-bold w-[90%]  md:w-[70%] lg:w-[70%] ">
            ADVANCED PAYMENT GATEWAY FOR{" "}
            <span className=" text-[#3BB75E]">AFRICA</span>
          </h1>
          <p className="text-[20px] text-[#fff] mt-4 md:mt-6 lg:mt-10">
            A broad range of payment options{" "}
          </p>
          <div className="mt-4 md:mt-6 lg:mt-10 flex items-center gap-5">
            <a
              href="https://pgmerchants.paylodeservices.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button className=" py-[10px] px-[20px] bg-[#124072] text-white rounded-lg ">
                Create an Account
              </button>
            </a>
            <p className="font-semibold text-[#124072] md:text-[#fff] cursor-pointer">
              Contact Us
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col px-[16px] h-[450px] md:h-[700px] md:flex-row md:px-[30px] lg:px-[90px] py-[50px]  justify-between  ">
        <div className="absolute top-0 right-0 left-0 -z-10">
          <img
            src="/heroimage.png"
            alt="heroimgae "
            className="object-cover h-[600px] w-full md:h-[700px]"
          />
        </div>
        <div className="py-10 w-full  z-10 ">
          <h1 className="text-[#fff]  text-[30px] md:text-[40px] lg:text-[60px]  font-bold w-[90%]  md:w-[70%] lg:w-[70%] ">
            ADVANCED PAYMENT GATEWAY FOR{" "}
            <span className=" text-[#3BB75E]">AFRICA</span>
          </h1>
          <p className="text-[20px] text-[#fff] mt-4 md:mt-6 lg:mt-10">
            A broad range of payment options{" "}
          </p>
          <div className="mt-4 md:mt-6 lg:mt-10 flex items-center gap-5">
            <button className=" py-[10px] px-[20px] bg-[#124072] text-white rounded-lg ">
              <a
                href="https://pgmerchants.paylodeservices.com/"
                target="_blank"
                rel="noreferrer"
              >
                Create an Account
              </a>
            </button>
            <p className="font-semibold text-[#124072] md:text-[#fff] cursor-pointer">
              Contact Us
            </p>
          </div>
        </div>
        {/* <div className="w-full md:w-[50%] flex justify-center">
          <img src="HeroImg.png" alt="" className="w-[500px]" />
        </div> */}
      </section>
      <section className=" flex flex-col-reverse gap-10 px-[30px] md:px-[50px] md:flex-row  justify-between items-center lg:px-[70px] py-[50px] ">
        <div className="w-full md:w-[50%] flex justify-center">
          {" "}
          <img src="/globe.png" alt="" className="h-[260px]" />
        </div>
        <div className="w-full md:w-[50%] ">
          <p className="text-[40px]  font-bold">
            Explore integrated{" "}
            <span className="text-[#3BB75E]">bill vending solutions</span>
          </p>
          <p className="text-[18px] ">
            Leverage on our cheap bill vending solutions so <br /> you can spend
            less time worrying about bills and more time enjoying life.
          </p>
          <div className="flex flex-col gap-2 mt-10  ">
            <div className="flex items-center gap-1">
              <img src="checkbutton.svg" alt="" />
              <p>Airtime/ Data Bills</p>
            </div>
            <div className="flex items-center gap-1">
              <img src="checkbutton.svg" alt="" />
              <p>Electricity</p>
            </div>
          </div>
          <Link to="/billvending">
            <button className="flex items-center gap-2 py-[10px] px-[20px] mt-10  hover:text-[#1f5a99] text-[#124072] rounded-lg ">
              Read More <FaArrowRightLong />
            </button>
          </Link>
        </div>{" "}
      </section>

      <section className="px-[16px] flex flex-col justify-center gap-10  mt-10 md:flex-row md:px-[30px] lg:px-[90px] ">
        <div className="w-full md:w-[50%] leading-none ">
          <h1 className="text-[40px] mb-4 font-semibold">
            Intuitive Payment Gateway system for{" "}
            <span className="text-[#3BB75E]">seamless transactions</span>{" "}
          </h1>
          <p className="leading-relaxed text-[18px]  ">
            With our secure and reliable payment gateway, you can accept
            payments and receive funds quickly and easily from anyone, anywhere
            in the world. Whether you're running a small business or a large
            enterprise, our gateway is designed to meet your needs and help your
            business to grow. We connect merchants with the solutions that
            allows their customers to pay wherever and whenever they want.
          </p>
          <div className=" mt-[24px] md:mt-[32px] flex flex-row gap-4 md:gap-5  ">
            <div className="flex flex-col gap-5 ">
              <div className="flex items-center gap-2">
                <img src="/checkbutton.svg" alt="" className="w-[35px]" />
                <p className="text-[13px]">Mobile and Internet Transfer</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="/checkbutton.svg" alt="" className="w-[35px]" />
                <p className="text-[13px]">Debit and Credit Card</p>
              </div>
              <div className="flex items-center gap-2 ">
                <img src="/checkbutton.svg" alt="" className="w-[35px]" />
                <p className="text-[13px]">POS</p>
              </div>
            </div>
            <div className="flex flex-col gap-5   ">
              <div className="flex items-center gap-2">
                <img src="/checkbutton.svg" alt="" className="w-[35px]" />
                <p className="text-[13px]">USSD Code</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="/checkbutton.svg" alt="" className="w-[35px]" />
                <p className="text-[13px]">QR Code</p>
              </div>
            </div>
          </div>
          <Link to="/billvending">
            <button className="flex items-center gap-2 py-[10px] px-[20px] mt-10  hover:text-[#1f5a99] text-[#124072] rounded-lg ">
              Read More <FaArrowRightLong />
            </button>
          </Link>
        </div>
        <div className="w-full hidden md:block md:w-[50%] ">
          <div>
            <img src="payment.png" alt="" className="h-[400px]" />
          </div>
          {/* <Carousel
            autoPlay={true}
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={1000}
          >
            <div>
              <img src="/transparent-pos.png" alt="" className="h-[400px]" />
            </div>
            <div>
              <img src="/POS1.png" alt="" className="h-[400px]" />
            </div>
            <div>
              <img src="hand.png" alt="" className="h-[400px]" />
            </div>
            <div>
              <img src="payment.png" alt="" className="h-[400px]" />
            </div>
          </Carousel> */}
        </div>
      </section>

      <section className="px-[16px] flex flex-col justify-center gap-10   mt-10 md:flex-row-reverse items-center md:px-[30px] lg:px-[90px] ">
        <div className="w-full md:w-[50%] leading-none ">
          <h1 className="text-[40px] mb-4 font-semibold">
            Payment <span className="text-[#3BB75E]">Link</span>{" "}
          </h1>
          <p className="leading-relaxed font-normal text-[18px]">
            {" "}
            No website? No worries. Paylode Payment Links allow you to accept
            online payments via the dedicated Payment Link feature, requiring no
            integration. Payment links enable businesses to accept payments from
            customers around the world, facilitating international transactions
            and expanding market reach
          </p>

          <Link to="/billvending">
            <button className="flex items-center gap-2 py-[10px] px-[20px] mt-10  hover:text-[#1f5a99] text-[#124072] rounded-lg ">
              Read More <FaArrowRightLong />
            </button>
          </Link>
        </div>
        <div>
          <img src="/Rectangle.png" alt="" />
        </div>
      </section>
      <section className="px-[16px]  gap-10  mt-10  md:px-[30px] lg:px-[90px]">
        <h1 className="text-[40px] mb-4 font-semibold">
          {" "}
          Paylode helps your{" "}
          <span className="text-[#3BB75E]"> Business grow</span>
        </h1>

        <p className="w-full md:w-[50%] text-[18px] md:text-[22px] ">
          Payment gateway is crucial for businesses in this digital age,
          providing a secure and efficient means to handle financial
          transactions
        </p>
      </section>

      <section className="px-[16px] flex   gap-10  mt-10 flex-row md:px-[30px] lg:px-[90px]">
        <button
          onClick={() => setOrg("sme")}
          className={` ${
            org === "sme"
              ? "text-[#15487D] border-b-2 border-b-[#15487D]"
              : "text-[#747C91]"
          }  items-center pb-2 font-semibold`}
        >
          FOR SMEs
        </button>

        <button
          onClick={() => setOrg("large")}
          className={` ${
            org === "large"
              ? "text-[#15487D] border-b-2 border-b-[#15487D]"
              : "text-[#747C91]"
          }  items-center pb-2 font-semibold`}
        >
          FOR LARGE ORGANIZATIONS
        </button>
      </section>
      {org === "sme" ? (
        <div className="px-[16px] flex flex-col  gap-10  mt-10 md:flex-row md:px-[30px] lg:px-[90px]">
          <div className=" w-full md:w-[50%] px-10 py-[96px]  rounded-tr-lg rounded-br-lg shadow-lg bg-[#F3F6F8]">
            <p className="text-[16px] md:text-[18px] tracking-wide  max-w-[501px]">
              Paylode payment gateways enable SMEs to accept online payments,
              expanding their customer base beyond physical locations. This
              convenience can attract more customers and increase sales. We also
              offer competitive pricing, allowing SMEs to avoid the high costs
              associated with setting up traditional merchant accounts.
            </p>
            <button className=" py-[10px] px-[20px] mt-[100px] bg-[#124072] hover:bg-[#1f5a99] text-white rounded-lg ">
              Read More
            </button>
          </div>
          <div className="w-full md:w-[50%]">
            <img
              src="/people.png"
              alt=""
              className="h-[600px] object-contain"
            />
          </div>
        </div>
      ) : org === "large" ? (
        <div className="px-[16px] flex flex-col  gap-10  mt-10 md:flex-row md:px-[30px] lg:px-[90px]">
          {" "}
          <div className=" w-full md:w-[50%] px-10 py-[96px]  rounded-tr-lg rounded-br-lg shadow-lg bg-[#F3F6F8]">
            <p className="text-[16px]   max-w-[501px]">
              <ul className="flex flex-col gap-3">
                <li>
                  <span className="font-semibold">Customer Convenience:</span>{" "}
                  Large organizations deal with a high volume of transactions.
                  Payment gateways enable them to offer various payment options
                  (credit cards, debit cards, e-wallets, etc.), making it
                  convenient for customers to make purchases.
                </li>
                <li>
                  <span className="font-semibold">Global Reach:</span> Large
                  organizations often operate internationally. Payment gateways
                  support multiple currencies and facilitate transactions across
                  borders, allowing businesses to cater to a global customer
                  base.
                </li>
                <li>
                  <span className="font-semibold">Security:</span> offers
                  Ensuring secure transactions is paramount. Payment gateways
                  implement encryption and security protocols to protect
                  sensitive financial information, reducing the risk of fraud
                  and ensuring customer trust.
                </li>
                <li>
                  <span className="font-semibold">Regulatory Compliance:</span>
                  Complies with industry standards and regulations. For large
                  organizations dealing with a significant volume of
                  transactions, adherence to these standards is crucial to avoid
                  penalties and maintain credibility.
                </li>
                <li>
                  <span className="font-semibold">Reduced Payment Risks:</span>
                  features like fraud detection and prevention mechanisms on the
                  gateway reduce the risks associated with unauthorized
                  transactions and potential chargebacks.
                </li>
              </ul>
            </p>
            <button className=" py-[10px] px-[20px] mt-[100px] bg-[#124072] hover:bg-[#1f5a99] text-white rounded-lg ">
              Read More
            </button>
          </div>
          <div className="w-full md:w-[50%]">
            <img
              src="/people2.png"
              alt=""
              className="h-[600px] object-contain"
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {/* <section className="px-[16px] flex flex-col-reverse  gap-10  mt-10 md:flex-row md:px-[30px] lg:px-[90px]">
        <div className="">
          <p className="font-semibold text-[#747C91]">FOR SMEs</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-[#15487D] ">
            FOR LARGE ORGANIZATIONS
            <img src="/Tablist2.svg" alt="" />
          </p>
        </div>
      </section>
      <section className="px-[16px] flex flex-col  gap-10  mt-10 md:flex-row md:px-[30px] lg:px-[90px]">
       
       
      </section> */}

      <section className="px-[16px] flex   gap-10  mt-10 flex-row md:px-[30px] lg:px-[90px]">
        <div className="bg-[#031931] px-3 md:px-7 lg:px-10  py-3 md:py-7 lg:py-10 rounded-2xl md:rounded-3xl">
          <h1 className="text-[40px] md:text-[60px] text-white">
            Unified <span className="text-[#3BB75E]">APl System</span>{" "}
          </h1>

          <p className="text-[15px] md:text-[18px] lg:text-[22px] mt-10 text-white">
            We've finalized the fundamental aspects of payment integrations and
            abstractions, streamlining the process for your team to effortlessly
            link up with our APIs and utilize a diverse array of payment
            features.
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
      </section>
      <section className="py-[52px] relative px-[16px] md:px-[50px] lg:px-[60px]">
        <h2 className="text-[28px] text-[#124072de] text-center font-bold mb-[48px]">
          WHY PAYLODE?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 ">
          <div className="shadow rounded-lg bg-slate-100 text-center py-4 px-3">
            <img src="/home.png" alt="" className="h-[64px]  mx-auto mb-5" />
            <h2 className="text-[24px] text-[#124072de] font-bold">
              Accessible Dashboard
            </h2>
            <p className="text-gray-500">
              Paylode services makes transaction easy by creating a
              user-friendly transaction dashboard for every day business track
              and to optimize user data
            </p>
          </div>
          <div className="shadow rounded-lg bg-slate-100 text-center py-4 px-3">
            <img
              src="/cashless-payment.png"
              alt=""
              className="h-[64px] mx-auto mb-5"
            />
            <h2 className="text-[24px] text-[#124072de] font-bold">
              Easy Payment
            </h2>
            <p className="text-gray-500">
              We allow your customers make payment easily at anytime and
              anywhere in the world through our seamless channels.
            </p>
          </div>
          <div className="shadow rounded-lg bg-slate-100 text-center py-4 px-3">
            <img
              src="/secure-payment.png"
              alt=""
              className="h-[64px] mx-auto mb-5"
            />
            <h2 className="text-[24px] text-[#124072de] font-bold">
              Secured Payment
            </h2>
            <p className="text-gray-500">
              Our online payment system uses advanced security measures
              including multi-factor authentication to ensure the safety of user
              account.
            </p>
          </div>
        </div>
      </section>
      <GetStarted />
      <Footer />
    </div>
  );
};
export default Home;
