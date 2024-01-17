import React from "react";
import Navbar from "./component/Navbar";
import GetStarted from "./component/GetStarted";
import Footer from "./component/Footer";
const PaymentLink = () => {
  return (
    <div class>
      <Navbar />
      {/* hero section */}
      <section className="w-full relative flex flex-col px-[16px]  md:flex-row md:px-[30px] h-[70vh] md:h-[90vh] items-center lg:px-[90px] py-[40px]  justify-between  ">
        <img
          src="/vector.png"
          alt="curved vector"
          className="absolute right-0 top-0 -z-10 "
        />
        <img
          src="/paymentlinkhero.png"
          alt="payment link hero"
          className="absolute bottom-0 right-0 h-[450px] hidden lg:block"
        />
        <div className="py-10 w-full text-white md:w-[60%] lg:w-[50%]">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] text-[#15487D] font-bold">
            Receive Payments Through Simple Payment Links.
          </h2>
          <p className="mt-[20px] text-[#15487D] text-[16px] lg:text-[18px]">
            Payment links offer your client a hassle-free way to make payments.
            Receive payments from around the world through simple payment links
          </p>

          <div className="mt-4 md:mt-4 flex items-center gap-5">
            <button className=" py-[10px] px-[20px] bg-[#124072] text-white rounded-lg ">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-center">
          {/* <img src="/Rectangle1.png" alt="" className="" /> */}
        </div>
        <div className=""></div>
      </section>
      {/* no website no worry section */}
      <section className="bg-white w-full flex flex-col-reverse px-[16px]  md:flex-row md:px-[30px]  lg:px-[90px] py-[20px]  justify-between items-center pt-10 md:pt-[60px]">
        <div className="w-full md:w-[50%]">
          <img src="/Rectangle.png" alt="" className="w-[550px]" />
        </div>
        <div className="w-full  md:w-[50%] ">
          <h4 className="text-[#15487D] text-[20px] md:text-[22px] lg:text-[28px] font-bold">
            No Website? <span className="text-[#3BB75E]">No Worries</span>
          </h4>
          <p className="text-[16px] mt-[20px]">
            No website? No worries. Paylode Payment Links allow you to accept
            online payments via the dedicated Payment Link feature, requiring no
            integration.
            <br />
            <br />
            Payment links enable businesses to accept payments from customers
            around the world, facilitating international transactions and
            expanding market reach
          </p>
        </div>
      </section>

      <section className="bg-white w-full flex flex-col-reverse px-[16px]  md:flex-row md:px-[30px]  lg:px-[90px] py-[20px]  justify-between items-center pt-10 md:pt-[60px]">
      <div className="w-full  md:w-[50%] ">
          <h4 className="text-[#15487D] text-[20px] md:text-[22px] lg:text-[28px] font-bold">
            Monitor and Keep Records Of Payment Status
          </h4>
          <p className="text-[16px] mt-[20px]">
            We offer tracking features that allow you to monitor payment
            statuses and keep records of transactions for accounting purposes.
            <br />
            <br />
            This ensures thorough and precise documentation of all online
            payment-related information in your accounting records, preventing
            any oversight in transactions and ensuring proper allocation of each
            transaction
          </p>
        </div>
        <div className="w-full md:w-[50%]">
          <img src="/tracking.png" alt="" className="w-[550px]" />
        </div>
       
      </section>
      {/* <section className="bg-gray-100 w-full md:flex-row md:px-[30px]  lg:px-[90px] py-[20px] justify-center">
        <img src="/man.png" alt="" className="" />
      </section> */}
      <section className="  md:flex-row md:px-[30px]  lg:px-[90px] py-[20px]  w-full">
        <div className=" grid grid-cols-1  md:grid-col-3 lg:grid-cols-3 gap-[40px] md:gap-[60px]  ">
          <div className="w-full  ">
            <p className="w-[32px] h-[32px]  md:w-[48px] md:h-[48px]  flex justify-center items-center font-bold text-[18px] md:text-[24px] text-[#15487D] rounded-full bg-[#15487D4D] mb-2 ">
              1{" "}
            </p>
            <p className="text-[18px] md:text-[20px]  font-bold mb-2  ">
              Register on Paylode Services
            </p>
            <p className="text-14px md:text-[16px] ">
              Create a free Paylode service account and navigate to "Payment
              Link."
            </p>
          </div>
          <div className="w-full  ">
            <p className="w-[32px] h-[32px]  md:w-[48px] md:h-[48px]  flex justify-center items-center font-bold text-[18px] md:text-[24px] text-[#15487D] rounded-full bg-[#15487D4D] mb-2 ">
              2{" "}
            </p>
            <p className="text-[20px] md:text-[22px] font-bold mb-2">
              Generate your link
            </p>
            <p className="text-14px md:text-[16px] ">
              Provide your information and then press the "send" button.
            </p>
          </div>
          <div className="w-full ">
            <p className="w-[32px] h-[32px]  md:w-[48px] md:h-[48px]  flex justify-center items-center font-bold text-[18px] md:text-[24px] text-[#15487D] rounded-full bg-[#15487D4D] mb-2 ">
              3{" "}
            </p>
            <p className="text-[20px] md:text-[22px] font-bold mb-2">
              Share your Link
            </p>
            <p className="text-14px md:text-[16px] ">
              Copy your link and share on chat, social media, in-store, Email,
              SMS, Messenger…etc and start receiving payments."
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white w-full flex flex-col-reverse px-[16px]  md:flex-row md:px-[30px]  lg:px-[90px] py-[20px]  justify-between items-center pt-10 md:pt-[60px]">
        <div className="w-full md:w-[50%] flex justify-center items-center">
          <img src="/paycode.png" alt="" className="h-[400px]" />
        </div>
        <div className="w-full md:w-[50%] ">
          <h4 className="text-[#15487D] text-[20px] md:text-[22px] lg:text-[28px] font-bold">
            Generate QR Code For Payment Links
          </h4>
          <p className="text-[16px] mt-[20px]">
            Our payment websites leverage QR codes to simplify online
            transactions, allowing your client to initiate payments by scanning
            a website-generated QR code, verifying transaction details, and
            securely completing the process with ease.
          </p>
        </div>
      </section>
      <GetStarted />
      <Footer />
    </div>
  );
};

export default PaymentLink;
