import React, { useState } from "react";
import Navbar from "./component/Navbar";
import GetStarted from "./component/GetStarted";
import Footer from "./component/Footer";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Pricing = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);
  const [faq7, setFaq7] = useState(false);
  const [faq8, setFaq8] = useState(false);

  const handleFaq1 = () => {
    setFaq1(!faq1);
  };
  const handleFaq2 = () => {
    setFaq2(!faq2);
  };
  const handleFaq3 = () => {
    setFaq3(!faq3);
  };
  const handleFaq4 = () => {
    setFaq4(!faq4);
  };
  const handleFaq5 = () => {
    setFaq5(!faq5);
  };
  const handleFaq6 = () => {
    setFaq6(!faq6);
  };
  const handleFaq7 = () => {
    setFaq7(!faq7);
  };
  const handleFaq8 = () => {
    setFaq8(!faq8);
  };

  return (
    <div>
      <Navbar />
      <section className="bg-[#FFF] w-full flex flex-col px-[16px]  md:px-[30px] justify-center lg:px-[90px] py-[50px]    ">
        <h1 className=" text-center text-[#15487D] text-[18px] font-semibold md:text-[28px] lg:text-[40px] leading-tight md:mx-[40px]  lg:mx-[180px] ">
          Empower Your Transactions with Seamless Pricing
        </h1>
        <h3 className=" text-center text-[#3BB75E] text-[17px] font-semibold md:text-[22px] lg:text-[26px] leading-tight md:mx-[40px]  lg:mx-[180px] mt-4 md:mt-7">
          "Explore our flexible and competitive pricing plans designed to
          optimize your payment gateway experience."
        </h3>{" "}
        <p className=" text-center text-[#15487D] text-[17px] font-semibold md:text-[22px] lg:text-[24px] leading-tight mt-7 md:mt-10">
          Collection for <span className="text-[#3BB75E]"> NIGERIA</span>
        </p>
      </section>

      <section className="bg-[#F3F6F8] w-full  px-[16px] md:px-[30px]  lg:px-[90px] py-[60px] md:py-[80px]">
        <div className="flex justify-between ">
          <div className=" flex  flex-col md:flex-row justify-between gap-5">
            <div className="md:w-[50%] w-full  bg-[#fff] shadow-md py-5 px-5">
              <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px] text-center mb-4">
                For Local Transactions
              </p>
              <div className="flex gap-1">
                {" "}
                <p className="text-[20px] md:text-[24px]  lg:text-[32px] font-bold flex  gap-2 text-[#15487DCC] self-end">
                  1.5%
                </p>
                <p className="text-[18px] md:text-[20px]  lg:text-[24px] font-semibold self-end">
                  Transaction Charge
                </p>
              </div>

              <div className="flex mt-5 gap-2">
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
                <p className="text-[18px]  text-[#3D3E3E] ">
                  ₦75 transaction fee for transactions above ₦5,000
                </p>{" "}
              </div>
              <div className="flex mt-5 gap-2">
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
                <p className="text-[18px]  text-[#3D3E3E] ">
                  ₦75 transaction fee for transactions above ₦5,000
                </p>{" "}
              </div>
            </div>

            <div className="md:w-[50%] w-full  bg-[#fff] shadow-md py-5 px-5">
            <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px] text-center mb-4">
                For International Transactions
              </p>
              <p className="text-[20px] md:text-[24px]  lg:text-[32px] font-bold text-center text-[#15487DCC] self-end">
                Available on request
              </p>
              <hr className="bg-[#15487DCC]" />
              <div className="flex mt-5 gap-2">
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

                <p className="text-[18px]  text-[#3D3E3E] ">
                  Transferring funds in USD to a domestic account with our
                  designated settlement bank.
                </p>
              </div>
              <div className="flex mt-5 gap-2">
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
                <p className="text-[18px]  text-[#3D3E3E] ">
                  Accept payments and receive funds from anyone, anywhere in the
                  world.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[16px]  gap-10  mt-10  md:px-[30px] lg:px-[90px]">
        <h1 className="text-[20px] md:text-[24px] font-bold mb-6  ">
          Frequently Asked Questions
        </h1>
        <div className="">
          <div className="py-7 border-t border-b ">
            <div
              onClick={handleFaq1}
              className="flex justify-between items-center mb-2 cursor-pointer"
            >
              <p className="text-gray-500 font-bold text-lg">
                When do i get my settlement?
              </p>{" "}
              {faq1 ? (
                <button>
                  <IoIosArrowUp />{" "}
                </button>
              ) : (
                <button onClick={handleFaq1}>
                  <IoIosArrowDown />
                </button>
              )}
            </div>
            {faq1 ? (
              <p className="py-4 px-5 bg-slate-100">
                All settlement will be received the next day for local payments.
                International payment varies depending on your region.
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="py-7  border-b ">
            <div
              onClick={handleFaq2}
              className="flex justify-between items-center mb-2 cursor-pointer"
            >
              <p className="text-gray-500 font-bold text-lg">
                Who pays for the transaction charge?
              </p>{" "}
              {faq2 ? (
                <button>
                  <IoIosArrowUp />{" "}
                </button>
              ) : (
                <button onClick={handleFaq2}>
                  <IoIosArrowDown />
                </button>
              )}
            </div>
            {faq2 ? (
              <p className="py-4 px-5 bg-slate-100">
                By default, your customers bear the transaction charges. You can
                change this on your dashboard anytime to your preference.
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="py-7  border-b ">
            <div
              onClick={handleFaq3}
              className="flex justify-between items-center mb-2 cursor-pointer"
            >
              <p className="text-gray-500 font-bold text-lg">
                Can I get settled in USD
              </p>{" "}
              {faq3 ? (
                <button>
                  <IoIosArrowUp />{" "}
                </button>
              ) : (
                <button onClick={handleFaq3}>
                  <IoIosArrowDown />
                </button>
              )}
            </div>
            {faq3 ? (
              <p className="py-4 px-5 bg-slate-100">
                Settlement in USD to a local domicilliary account in
                our settlement bank
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="py-7  border-b ">
            <div
              onClick={handleFaq4}
              className="flex justify-between items-center mb-2 cursor-pointer"
            >
              <p className="text-gray-500 font-bold text-lg">
                How can I contact support for other questions?
              </p>{" "}
              {faq4 ? (
                <button>
                  <IoIosArrowUp />{" "}
                </button>
              ) : (
                <button onClick={handleFaq4}>
                  <IoIosArrowDown />
                </button>
              )}
            </div>
            {faq4 ? (
              <p className="py-4 px-5 bg-slate-100">You can send an email to sales@paylodeservices.com
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="py-7  border-b ">
            <div
              onClick={handleFaq5}
              className="flex justify-between items-center mb-2 cursor-pointer"
            >
              <p className="text-gray-500 font-bold text-lg">
                I signed up for Paylode and I'm yet to receive a
                verification/confirmation email
              </p>{" "}
              {faq5 ? (
                <button>
                  <IoIosArrowUp />{" "}
                </button>
              ) : (
                <button onClick={handleFaq5}>
                  <IoIosArrowDown />
                </button>
              )}
            </div>
            {faq5 ? (
              <p className="py-4 px-5 bg-slate-100 text-justify">
                Double-check to confirm that the email you entered was accurate.
                Check your spam/promotion emails. Emails sent from Flutterwave
                are sent via sales@paylodeservices.com
t Please whitelist this address on
                your mailbox. <br /> <br /> If you still don't find the email,
                click the resend email link on your sign-up screen. <br />{" "}
                <br /> After 3 attempts and waiting for at least an hour, if you
                still don't receive a mail, please send a message to our support
                handles (Instagram & Facebook) or email us:
                sales@paylodeservices.com stating this issue. Learn more here
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="py-7  border-b ">
            <div
              onClick={handleFaq6}
              className="flex justify-between items-center mb-2 cursor-pointer"
            >
              <p className="text-gray-500 font-bold text-lg">
                How much does it cost to create a Paylode account?
              </p>{" "}
              {faq6 ? (
                <button>
                  <IoIosArrowUp />{" "}
                </button>
              ) : (
                <button onClick={handleFaq6}>
                  <IoIosArrowDown />
                </button>
              )}
            </div>
            {faq6 ? (
              <p className="py-4 px-5 bg-slate-100 text-justify">
                Nothing! You can create an account and set it up to receive
                payments on Paylode completely free. Paylode only charges
                fees per transaction on transfers and payments you receive. You
                can find more information on Paylode pricing{" "}
                <a
                  href="http://paylodeservices.com/pricing"
                  target="blank"
                  className="text-[#124072] underline"
                >
                  here
                </a>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Pricing;
