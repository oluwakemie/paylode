import React from "react";
import Navbar from "./component/Navbar";
import GetStarted from "./component/GetStarted";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";
import GetStartedBillVending from "./component/GetStartedBillVending";
const BillVending = () => {
  return (
    <div>
      <Navbar />
      {/* hero section */}
      <section className="bg-[#092E55] flex flex-col px-[16px] h-[70vh]  md:flex-row md:px-[30px]  items-center lg:px-[100px] py-[50px] md:py-[50px] lg:py-[70px]  justify-between relative ">
        <div className=" w-full text-white leading-tight md:w-[50%]">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] text-[#fff] font-bold">
            Experience the Speed and Convenience of Our Bill Vending Platform
          </h2>
          <p className="mt-[10px] text-[18px] md:text-[20px]">
            Experience the Speed and Convenience of Our Bill Vending Platform
          </p>

          <div className="mt-4 md:mt-6  flex items-center gap-5">
            <a
              href="https://billvendingclient.paylodeservices.com/login"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button className=" py-[10px] px-[20px] bg-white text-[#124072] rounded-lg hover:bg-slate-100">
                Create an Account
              </button>
            </a>
            <Link to="/support"> <p className=" text-[#fff] cursor-pointer">Contact Us</p></Link>
           
          </div>
        </div>
        <img src="/billvendingDashboard.png" alt="" className="h-[300px] md:h-[400px]  absolute right-3  -bottom-[70px] md:bottom-1 rounded-lg  md:block" />
        {/* <div className="w-full md:w-[50%] flex justify-center">
          <img src="/Rectangle3.png" alt="" />
        </div> */}
      </section>

      <section className=" bg-[#F3F6F8] w-full  px-[16px]  md:px-[30px] gap-10 items-center lg:px-[100px] py-[20px]  justify-between ">
        <div className="bg-[#F3F6F8]  pt-[80px]">
          <h1 className="text-[18px] md:text-[24px] lg:text-[30px] text-center font-bold ">
            Simplify Your Payment Experience
          </h1>
          <p className="text-left  w-full md:max-w-[70%] lg:max-w-[50%] mt-5  text-[16px] ">
            Take advantage of our cost-effective bill vending platform/API and
            enhance every aspect of your life. Whether you're a casual internet
            user or a frequent data consumer, we offer budget-friendly bill
            plans tailored to your needs.
          </p>
        </div>
        <div className="mt-[60px] mb-[60px]">
          <div className="flex flex-col md:flex-row items-center gap-[24px] mb-[40px] md:mb-[70px] lg:mb-[90px]">
            <div className="w-full md:w-[50%] lg:px-5">
              <img src="/Frame2.png" alt=" " />
            </div>
            <div className="w-full md:w-[50%]">
              {" "}
              <h1 className="text-[20px] md:text-[30px] font-bold">
                Electricity   <span className="text-[#3BB75E]">Bill</span>
              </h1>{" "}
              <p className="text-[16px] md:text-[18px] mt-5 mb-4">
                We serve you best way to pay your electricity bill instantly and
                electricity supply from any of the Nigerian Electricity Disco of
                your choice, below are the electricity disco available:
              </p>
              <div className="flex flex-col gap-1 ">
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>Abuja Electricity Distribution Plc (AEDC)</p>
                </div>
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>Benin Electricity Distribution Plc (BEDC)</p>
                </div>
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>Eko Electricity Distribution Plc (EKEDC)</p>
                </div>
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>Enugu Electricity Distribution Plc (EEDC)</p>
                </div>
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>Ibadan Electricity Distribution Plc (IBEDC)</p>
                </div>
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>Ikeja Electricity Distribution Plc (IKEDC)</p>
                </div>
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>Jos Electricity Distribution Plc (JEDC)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  flex-col md:flex-row-reverse items-center gap-[24px] mb-[40px] md:mb-[70px] lg:mb-[90px] ">
            <div className="w-full md:w-[50%] lg:px-5">
              <img src="/Frame3.png" alt=" " />
            </div>
            <div className="w-full md:w-[50%]">
              {" "}
              <h1 className="text-[20px] md:text-[30px] font-bold">
                Airtime   <span className="text-[#3BB75E]">Top-up</span>
              </h1>{" "}
              <p className="text-[16px] md:text-[18px] mt-5 mb-4">
                Get airtime from any of the registered Nigerian
                telecommunications service providers though our seamless
                channels.
              </p>
              <div className="flex flex-col gap-1 ">
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>MTN</p>{" "}
                </div>
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>9MOBILE</p>{" "}
                </div>
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>AIRTEL</p>
                </div>
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>GLO</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  items-center gap-[24px] ">
            <div className="w-full md:w-[50%] lg:px-5">
              <img src="/networkprovider.jpg" alt=" " />
            </div>
            <div className="w-full md:w-[50%]">
              {" "}
              <h1 className="text-[20px] md:text-[30px] font-bold">
                Buy   <span className="text-[#3BB75E]">Data Bundle</span>
              </h1>{" "}
              <p className="text-[16px] md:text-[18px] mt-5 mb-4">
                Our server is entirely committed to providing data bundles
                around the clock, ensuring instant delivery.
              </p>
              <div className="flex flex-col gap-1 ">
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>MTN</p>{" "}
                </div>
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>9MOBILE</p>{" "}
                </div>
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>AIRTEL</p>
                </div>
                <div className="flex  items-center gap-2 text-[16px] ">
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
                  <p>GLO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-[#15487D] w-full flex flex-col justify-center px-[18px]  md:flex-row md:px-[30px]  md:justify-between items-center lg:px-[100px] py-[50px] relative ">
        <div className="w-full md:max-w-[50%]">
          <h1 className="text-white font-bold text-[30px]">Why Paylode?</h1>
          <div className=" flex items-start gap-2 mt-5 ">
            <img src="/Paybill.svg" alt="" className=" w-[30px] md:w-[50px]" />
            <p className="text-[14px] md:text-[18px] leading-tight text-white">
              Pay Any Bill, Anytime, Anywhere: Whether it's mobile recharges,
              internet data, electricity bills, or more, we've got you covered.
            </p>
          </div>
          <div className=" flex items-start gap-2 mt-5 ">
            <img src="/Instant.svg" alt="" className=" w-[30px] md:w-[50px]" />
            <p className="text-[14px] md:text-[18px] leading-tight text-white">
              Instant and Hassle-Free: No more waiting in long queues or dealing
              with complicated payment processes. With Paylode, your
              transactions are completed in a matter of seconds!
            </p>
          </div>
          <div className=" flex items-start gap-2 mt-5 ">
            <img src="/safe.svg" alt="" className=" w-[30px] md:w-[50px]" />
            <p className="text-[14px] md:text-[18px] leading-tight text-white">
              Safe and Secure: Be rest assured that every payment is encrypted
              and secure, providing you with peace of mind.
            </p>
          </div>
          <div className=" flex items-start gap-2 mt-5 ">
            <img src="/tailored.svg" alt="" className=" w-[30px] md:w-[50px]" />
            <p className="text-[14px] md:text-[18px] leading-tight text-white">
              Tailored for Everyone: Are you a light user or a heavy data
              consumer? No problem! We offer a wide range of affordable plans to
              suit your specific needs.
            </p>
          </div>
          <div className=" flex items-start gap-2 mt-5 ">
            <img src="/user.svg" alt="" className=" w-[30px] md:w-[50px]" />
            <p className="text-[14px] md:text-[18px] leading-tight text-white">
              User-Friendly Interface: Our platform is designed for simplicity.
              Whether you're tech-savvy or not, you'll find Paylode incredibly
              easy to navigate.
            </p>
          </div>
          <div className=" flex items-start gap-2 mt-5 ">
            <img src="/track.svg" alt="" className=" w-[30px] md:w-[50px]" />
            <p className="text-[14px] md:text-[18px] leading-tight text-white">
              Track Your Spending: Stay in control of your finances with
              detailed transaction histories and easy-to-read summaries.
            </p>
          </div>{" "}
        </div>
        <div className="w-full md:max-w-[40%] absolute bottom-0 right-0 hidden md:block "></div>
      </section> */}
      <GetStartedBillVending />
      <Footer />
    </div>
  );
};

export default BillVending;
