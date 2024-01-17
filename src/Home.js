import React, { useState } from "react";
import Navbar from "./component/Navbar";
import { Carousel } from "react-responsive-carousel";
import Footer from "./component/Footer";
import GetStarted from "./component/GetStarted";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import AccordionWrapper from "./component/AccordionWrapper";
import AccordionItem from "./component/Accordion";

const Home = () => {
  const [org, setOrg] = useState("sme");
  const data = [
    {
      title: "When do i get my settlement?",
      description:
        "All settlement will be received the next day for local payments. International payment varies depending on your region.",
    },
    {
      title: "Who pay for the transaction charge?",
      description:
        "By default, your customers bear the transaction charges. You can change this on your dashboard anytime to your preference.",
    },
    {
      title: "Can I get settled in USD",
      description:
        "Settlement in USD to a local domicilliary account in our settlement bank",
    },
    {
      title: "How much does it cost to create a Paylode account?",
      description:
        "Nothing! You can create an account and set it up to receive payments on Paylode completely free. Paylode only charges fees per transaction on transfers and payments you receive. You can find more information on Paylode pricing here",
    },
  ];
  return (
    <div class>
      <Navbar />

      <section className="w-full mt-10 flex flex-col px-[16px] h-[450px] md:h-[700px] md:flex-row md:px-[30px] lg:px-[90px] py-[50px]  justify-between  ">
        <div className="absolute top-0 right-0 left-0 -z-10">
          <img
            src="/heroimage.png"
            alt="heroimgae "
            className="object-cover h-[600px] w-full md:h-[700px]"
          />
        </div>
        <div className="py-10 w-full  z-10 ">
          <h1 className="text-[#fff]  text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold w-[100%]  md:w-[70%] lg:w-[70%] ">
            ADVANCED PAYMENT GATEWAY FOR{" "}
            <span className="bg-white text-[#124072]">AFRICA</span>
          </h1>
          <p className="text-[20px] text-[#fff] mt-4 ">
            A broad range of payment options{" "}
          </p>
          <div className="mt-4 md:mt-6  flex items-center gap-5">
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
            <p className=" text-[#fff] cursor-pointer">Contact Us</p>
          </div>
        </div>
        {/* <div className="w-full md:w-[50%] flex justify-center">
          <img src="HeroImg.png" alt="" className="w-[500px]" />
        </div> */}
      </section>
      <section className="px-[16px] flex flex-col justify-center gap-10  mt-10 md:flex-row md:px-[30px] lg:px-[90px] ">
        <div className="w-full md:w-[50%] ">
          <h1 className="text-[20px] md:text-[30px] lg:text-[40px] mb-4 font-semibold">
            Explore integrated{" "}
            <span className="text-[#3BB75E]">bill vending solutions</span>
          </h1>
          <p className="text-[18px] ">
            Leverage on our cheap bill vending solutions so <br /> you can spend
            less time worrying about bills and more time enjoying life.
          </p>
          <div className="flex flex-col gap-2 mt-10  ">
            <div className="flex items-center gap-2">
              <svg
                width="23"
                height="22"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                  fill="#2C3847"
                />
                <path
                  d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                  fill="#2C3847"
                />
              </svg>
              <p>Airtime/ Data Bills</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="23"
                height="22"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                  fill="#2C3847"
                />
                <path
                  d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                  fill="#2C3847"
                />
              </svg>
              <p>Electricity</p>
            </div>
          </div>
          <Link to="/billvending">
            <button className="flex items-center gap-2 py-[10px] px-[20px] mt-10  hover:text-[#1f5a99] text-[#124072] rounded-lg ">
              Read More <FaArrowRightLong />
            </button>
          </Link>
        </div>{" "}
        <div className="w-full md:w-[50%] flex justify-center">
          {" "}
          <img src="/globe.png" alt="" className="h-[260px]" />
        </div>
      </section>

      <section className="px-[16px] flex flex-col justify-center gap-[80px]  mt-10 md:flex-row md:px-[30px] lg:px-[90px] ">
        <div className="w-full md:w-[50%] leading-none ">
          <h1 className="text-[20px] md:text-[30px] lg:text-[40px] mb-4 font-semibold">
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
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                    fill="#2C3847"
                  />
                  <path
                    d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                    fill="#2C3847"
                  />
                </svg>{" "}
                <p className="text-[13px]">Mobile and Internet Transfer</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                    fill="#2C3847"
                  />
                  <path
                    d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                    fill="#2C3847"
                  />
                </svg>{" "}
                <p className="text-[13px]">Debit and Credit Card</p>
              </div>
              <div className="flex items-center gap-2 ">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                    fill="#2C3847"
                  />
                  <path
                    d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                    fill="#2C3847"
                  />
                </svg>
                <p className="text-[13px]">POS</p>
              </div>
            </div>
            <div className="flex flex-col gap-5   ">
              <div className="flex items-center gap-2">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                    fill="#2C3847"
                  />
                  <path
                    d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                    fill="#2C3847"
                  />
                </svg>
                <p className="text-[13px]">USSD Code</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                    fill="#2C3847"
                  />
                  <path
                    d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                    fill="#2C3847"
                  />
                </svg>
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
        <div className="w-full flex flex-col items-center justify-center md:w-[50%] ">
          <div>
            <img src="payment2.png" alt="" className="h-[400px]" />
          </div>
        </div>
      </section>

      <section className="px-[16px] flex flex-col justify-center gap-10   mt-10 md:flex-row-reverse items-center md:px-[30px] lg:px-[90px] ">
        <div className="w-full md:w-[50%] leading-none ">
          <h1 className="text-[20px] md:text-[30px] lg:text-[40px] mb-4 font-semibold">
            Payment <span className="text-[#3BB75E]">Link</span>{" "}
          </h1>
          <p className="leading-relaxed font-normal text-[16px] md:text-[18px] ">
            {" "}
            No website? No worries. Paylode Payment Links allow you to accept
            online payments via the dedicated Payment Link feature, requiring no
            integration. Payment links enable businesses to accept payments from
            customers around the world, facilitating international transactions
            and expanding market reach
          </p>

          <Link to="/billvending">
            <button className="flex items-center gap-2 pl-[10px] mt-4  hover:text-[#1f5a99] text-[#124072]  ">
              Read More <FaArrowRightLong />
            </button>
          </Link>
        </div>
        <div>
          <img src="/Rectangle.png" alt="" />
        </div>
      </section>
      <section className="px-[16px]  gap-10  mt-10  md:px-[30px] lg:px-[90px]">
        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] mb-4 font-semibold">
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
          <div className=" w-full md:w-[50%] px-2 md:px-5 lg:px-10 py-[36px] md:py-[46px] lg:py-[96px]  rounded-tr-lg rounded-br-lg shadow-lg bg-[#F3F6F8]">
            <p className="text-[16px] md:text-[18px] tracking-wide  max-w-[501px]">
              Paylode payment gateway enable SMEs to accept online payments,
              expanding your customer base beyond physical locations. This
              convenience can attract more customers and increase sales. We also
              offer competitive pricing, allowing SMEs to avoid the high costs
              associated with setting up traditional merchant accounts.
            </p>
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
          <div className=" w-full md:w-[50%] px-2 md:px-5 lg:px-10 py-[36px] md:py-[46px] lg:py-[96px]  rounded-tr-lg rounded-br-lg shadow-lg bg-[#F3F6F8]">
            <p className="text-[16px]   max-w-[501px]">
              <ul className="flex flex-col gap-3">
                <li>
                  <span className="font-semibold">Customer Convenience:</span>{" "}
                  Large organizations deal with a high volume of transactions.
                  payment gateway enable you to offer various payment options
                  (credit cards, debit cards, e-transfer, etc.), making it
                  convenient for customers to make purchases.
                </li>
                <li>
                  <span className="font-semibold">Global Reach:</span> Large
                  organizations often operate internationally.Paylode ayment
                  gateway support multiple currencies and facilitate
                  transactions across borders, allowing businesses to cater to a
                  global customer base.
                </li>
                <li>
                  <span className="font-semibold">Security:</span>
                  Ensuring secure transactions is paramount. Our gateway
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

      <section className="px-[16px] flex  flex-col md:flex-row gap-10  mt-10  md:px-[30px] lg:px-[90px]">
        <div className=" md:px-7 lg:px-10  py-3 md:py-7 lg:py-10 w-full md:w-[60%]">
          <h1 className="text-[20px] md:text-[30px] lg:text-[40px] mb-4 font-semibold">
            Unified <span className="text-[#3BB75E]">APl System</span>{" "}
          </h1>

          <p className="text-[15px] md:text-[18px] text-black ">
            Our extensively documented APIs offer everything necessary for
            constructing your personalized projects and products, We've
            finalized the fundamental aspects of payment integrations and
            abstractions, streamlining the process for your team to effortlessly
            link up with our APIs and utilize a diverse array of payment
            features.
          </p>
          <ul className="flex flex-col gap-2 mt-5">
            <li className="flex gap-2 items-center">
              <svg
                width="23"
                height="22"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                  fill="#2C3847"
                />
                <path
                  d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                  fill="#2C3847"
                />
              </svg>

              <p className="text-[16px] ">Easy Integration</p>
            </li>
            <li className="flex gap-2 items-center">
              <svg
                width="23"
                height="22"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                  fill="#2C3847"
                />
                <path
                  d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                  fill="#2C3847"
                />
              </svg>
              <p className="text-[16px] ">Security and Compliance</p>
            </li>
            <li className="flex gap-2 items-center">
              <svg
                width="23"
                height="22"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                  fill="#2C3847"
                />
                <path
                  d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                  fill="#2C3847"
                />
              </svg>
              <p className="text-[16px]">Automated Transactions</p>
            </li>
            <li className="flex gap-2 items-center">
              <svg
                width="23"
                height="22"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                  fill="#2C3847"
                />
                <path
                  d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                  fill="#2C3847"
                />
              </svg>
              <p className="text-[16px]">Payment Notifications</p>
            </li>
            <li className="flex gap-2 items-center">
              <svg
                width="23"
                height="22"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                  fill="#2C3847"
                />
                <path
                  d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                  fill="#2C3847"
                />
              </svg>
              <p className="text-[16px]">API Uptime and Reliability</p>
            </li>
            <li className="flex gap-2 items-center">
              <svg
                width="23"
                height="22"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                  fill="#2C3847"
                />
                <path
                  d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                  fill="#2C3847"
                />
              </svg>
              <p className="text-[16px]">Cross-Platform Compatibility</p>
            </li>
          </ul>

          <button className="flex items-center gap-2 pl-[10px] mt-4  hover:text-[#1f5a99] text-[#124072]  ">
            Read API Docs <FaArrowRightLong />
          </button>
        </div>
        <div className="flex justify-center items-center w-full md:w-[40%]">
          <img src="api.png" />
        </div>
      </section>
      <section className="px-[16px]  gap-10  mt-10  md:px-[30px] lg:px-[90px]">
        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] mb-4 font-semibold">
          Robust Security Measures
        </h1>

        <p className="w-full md:w-[50%] text-[16px] md:text-[18px] ">
          We take your security seriously. Our advanced encryption technology
          ensures that your sensitive information remains confidential and
          protected against unauthorized access encryption as mandated by the
          payment card industry data security standard (PCIDSS).
        </p>
        <ul className="flex flex-col gap-2 mt-5">
          <li className="flex gap-2 items-center">
            <svg
              width="23"
              height="22"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                fill="#2C3847"
              />
              <path
                d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                fill="#2C3847"
              />
            </svg>

            <p className="text-[16px] font-bold">
              Licenced by the Central Bank of Nigeria
            </p>
          </li>
          <li className="flex gap-2 items-center">
            <svg
              width="23"
              height="22"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.538 3.37072L11.4875 15.188L6.87761 10.3104C6.71586 10.1518 6.47323 10.1518 6.31148 10.2707C6.14973 10.3897 6.14973 10.6673 6.27104 10.8259L11.2044 16.0207C11.2853 16.1 11.3662 16.1397 11.4875 16.1397C11.6088 16.1397 11.6897 16.1 11.7706 16.0207L24.1041 3.92589C24.2658 3.76727 24.2254 3.48968 24.0636 3.37072C23.9019 3.25175 23.6997 3.25175 23.538 3.37072Z"
                fill="#2C3847"
              />
              <path
                d="M4.97696 23.6743H19.5345C22.0012 23.6743 23.9827 21.7312 23.9827 19.3122V11.4209C23.9827 11.1829 23.8209 11.0243 23.5783 11.0243C23.3357 11.0243 23.1739 11.1829 23.1739 11.4209V19.3122C23.1739 21.295 21.5564 22.8812 19.5345 22.8812H4.97696C2.95507 22.8812 1.33756 21.295 1.33756 19.3122V5.03639C1.33756 3.05363 2.95507 1.46742 4.97696 1.46742H18.0383C18.281 1.46742 18.4427 1.3088 18.4427 1.07087C18.4427 0.832937 18.281 0.674316 18.0383 0.674316H4.97696C2.51026 0.674316 0.528809 2.61742 0.528809 5.03639V19.3122C0.528809 21.7312 2.51026 23.6743 4.97696 23.6743Z"
                fill="#2C3847"
              />
            </svg>

            <p className="text-[16px] font-bold">PCIDSS Certified</p>
          </li>
        </ul>
        <p className="font-bold mt-3"></p>
      </section>
      <section className="py-[52px] relative px-[16px] md:px-[50px] lg:px-[60px]">
        <h2 className="text-[28px] text-center font-bold mb-[48px]">
          WHY PAYLODE?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 ">
          <div className="shadow rounded-lg  text-center py-4 px-3">
            <img
              src="/home.png"
              alt=""
              className="h-[40px] md:h-[64px] mx-auto mb-5"
            />
            <h2 className="text-[18px] md:text-[22px] font-bold">
              Accessible Dashboard
            </h2>
            <p className="">
              Paylode services makes transaction easy by creating a
              user-friendly transaction dashboard for every day business track
              and to optimize user data
            </p>
          </div>
          <div className="shadow rounded-lg  text-center py-4 px-3">
            <img
              src="/cashless-payment.png"
              alt=""
              className="h-[40px] md:h-[64px] mx-auto mb-5"
            />
            <h2 className="text-[18px] md:text-[22px] font-bold">
              Easy Payment
            </h2>
            <p className="">
              We allow your customers make payment easily at anytime and
              anywhere in the world through our seamless channels.
            </p>
          </div>
          <div className="shadow rounded-lg  text-center py-4 px-3">
            <img
              src="/secure-payment.png"
              alt=""
              className="h-[40px] md:h-[64px] mx-auto mb-5"
            />
            <h2 className="text-[18px] md:text-[22px] font-bold">
              Secured Payment
            </h2>
            <p className="">
              Our online payment system uses advanced security measures
              including multi-factor authentication to ensure the safety of user
              account.
            </p>
          </div>
        </div>
      </section>
      <section className="py-[52px] relative px-[16px] md:px-[50px] lg:px-[60px]">
        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] mb-4 font-semibold w-full md:w-[50%] lg:w-[40%]">
          Frequently Asked Questions
        </h2>
        <div className="flex md:flex-row flex-col gap-5">
          <div className="w-full  md:w-[60%]">
            <AccordionWrapper>
              {data.map((item, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </AccordionWrapper>
          </div>
          <div className="w-full md:w-[40%]">
            <div className="rounded-lg border h-full pt-[42px] px-3">
              <img src="/chat.svg" alt="" className="mx-auto mb-[40px]" />

              <p className="text-[14px] text-center mb-[92px]">
                We value our customers, and our dedicated support team is
                available round the clock to assist you with any queries or
                concerns you may have.
              </p>
              <button className="text-white bg-[#124072] py-3 text-center w-full rounded-lg">
                Shoot a direct mail
              </button>
            </div>
          </div>
        </div>
      </section>

      <GetStarted />
      <Footer />
    </div>
  );
};
export default Home;
