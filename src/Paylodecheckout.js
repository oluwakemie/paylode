import React from "react";
import Navbar from "./component/Navbar";
import GetStarted from "./component/GetStarted";
import Footer from "./component/Footer";
import { FaArrowRightLong } from "react-icons/fa6";

const Paylodecheckout = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-[#092E55]  w-full flex flex-col px-[16px]  md:flex-row md:px-[30px]  items-center lg:px-[90px] py-[20px]  justify-between  ">
        <div className="py-10 w-full text-white md:w-[50%]">
          <h2 className="text-[50px] font-bold">
            Embrace the Future with our payment gateway
          </h2>
          <div className="flex gap-1 mt-3">
            <img src="/Ellipse.svg" alt="" />
            <p>Simplify Your Checkout Experience.</p>
          </div>
          <div className="flex gap-1 mt-1">
            <img src="/Ellipse.svg" alt="" />
            <p>Secure and Seamless Payments at Your Fingertips.</p>
          </div>
          <div className="flex gap-1 mt-1">
            <img src="/Ellipse.svg" alt="" />
            <p>Fast Settlement</p>
          </div>
        </div>

        <div className="w-full md:w-[50%] flex justify-center">
          <img src="/paymentHero.png" alt="" />
        </div>
      </section>
      <section className=" w-full  px-[16px]  md:px-[30px] flex flex-col md:flex-row   items-center lg:px-[90px]  pt-[40px] md:pt-[60px] lg:pt-[80px] justify-between  ">
        <div className="w-full md:w-[50%]">
          <h1 className="text-[40px] mb-4 font-semibold w-full ">
            Payment Gateway system for{" "}
            <span className="text-[#3BB75E]">seamless transactions</span>{" "}
          </h1>
          <p className=" mb-3 ">
            Accept payments and receive funds seamlessly from anyone, anywhere
            in the world. Whether you're running a small business or a large
            enterprise, our payment platform is designed to meet your needs and
            help you grow your business.
            <br />
            <br />
            We are a marketplace that connects merchants with payment providers
            to allow consumers to pay wherever and whenever they want. We don't
            just enable payments, we build solutions that help merchants thrive.
          </p>
        </div>

        <div className="w-full md:w-[50%]"></div>
      </section>

      <section className=" w-full  px-[16px]  md:px-[30px] flex flex-col md:flex-row   items-center lg:px-[90px]  pt-[40px] md:pt-[60px] lg:pt-[80px] justify-between  ">
        <div className="w-full md:w-[50%]">
          {" "}
          <div>
            <h1 className="text-[40px] mb-4 font-semibold w-full ">
              Expands Payment Options
            </h1>
          </div>
          <div>
            <h3>
              We offer your customers a wide range of payment options. This
              flexibility can attract a broader customer base and increase
              conversion rates.
            </h3>
          </div>
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
              <p className="text-[16px] ">Card</p>
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
              <p className="text-[16px] ">Bank Transfer</p>
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
              <p className="text-[16px] ">USSD</p>
            </li>
          </ul>{" "}
        </div>
        <div className="w-full md:w-[50%]"></div>
      </section>
      <section className=" w-full  px-[16px] flex flex-col md:flex-row  md:px-[30px]  items-center lg:px-[90px]  pt-[40px] md:pt-[60px] lg:pt-[80px] justify-between  ">
        <div className="w-full md:w-[50%]">
          <h1 className="text-[40px] mb-4 font-semibold w-full ">
            Simple Integration and
            <span className="text-[#3BB75E]"> Seamless Payment</span>
          </h1>
          <p>
            {" "}
            Integrate the Paylode payment gateway seamlessly into your product
            to establish a streamlined payment experience that both you and your
            clients will appreciate. Obtain your API keys from your dashboard,
            integrate the payment checkout script, or utilize any of our
            provided SDKs. Receive immediate confirmation through Webhook for
            swift transaction processing.
          </p>
        </div>
        <div className="w-full md:w-[50%]"> </div>
      </section>
      <section className="px-[16px] flex flex-col md:flex-row  gap-10  mt-10 md:px-[30px] lg:px-[90px]">
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

          <button className="flex items-center gap-2 py-[10px] px-[20px] mt-10  hover:text-[#1f5a99] text-[#124072] rounded-lg ">
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
          we take your security seriously. Our advanced encryption technology
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
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Paylodecheckout;
