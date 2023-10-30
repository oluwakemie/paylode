import React from "react";
import Navbar from "./component/Navbar";
import GetStarted from "./component/GetStarted";
import Footer from "./component/Footer";
const payment = () => {
  return (
    <div class>
      <Navbar />
      {/* hero section */}
      <section className="bg-[#092E55] w-full flex flex-col px-[16px]  md:flex-row md:px-[30px]  items-center lg:px-[90px] py-[20px]  justify-between  ">
       <div></div>
        <div className="py-10 w-full text-white md:w-[50%]">
          <h2 className="text-[50px] font-bold">
            Receive Payments from anywhere in the world
          </h2>
          <p className="mt-[100px] text-[30px]">
            Bill your clients securely with our QR Code <br /> and Payment Link
          </p>
        </div>
        <div className="w-full md:w-[50%] flex justify-center">
          <img src="/Rectangle1.png" alt="" />
        </div>
        <div className=""></div>
      </section>
      {/* about section */}
      <section className="bg-gray-100 w-full flex flex-col-reverse px-[16px]  md:flex-row md:px-[30px]  lg:px-[90px] py-[20px]  justify-between ">
        <div className="py-10 w-full md:w-[50%]">
          <img src="/Rectangle.png" alt="" className="w-[550px]" />
        </div>
        <div className="w-full py-[200px] md:w-[50%] ">
          <h4 className="text-[#15487D] text-[50px]">Payment Link</h4>
          <p className="text-[18px] md:text-[22px] mt-[40px]">
            No website? No worries. Paylode Payment Links allow you to accept
            online payments via the dedicated Payment Link feature, requiring no
            integration. Payment links enable businesses to accept payments from
            customers around the world, facilitating international transactions
            and expanding market reach
          </p>
        </div>
      </section>
      <section className="bg-gray-100 w-full md:flex-row md:px-[30px]  lg:px-[90px] py-[20px] justify-center">
        <img src="/man.png" alt="" className="" />
      </section>
      <section className="  md:flex-row md:px-[30px]  lg:px-[90px] py-[20px] bg-gray-100 w-full">
        <div className=" mt-10 grid grid-cols-1  md:grid-col-3 lg:grid-cols-3 gap-[60px]  ">
          {" "}
          <div className="w-full  ">
            <p className="w-[48px] h-[48px]  flex justify-center items-center font-bold text-[24px] text-[#15487D] rounded-full bg-[#15487D4D] mb-2 ">
              1{" "}
            </p>
            <p className="text-[22px] md:text-[24px]  font-bold mb-2  ">
              Register on Paylode Services
            </p>
            <p className="text-18px md:text-[18px] ">
              Create a free Paylode service account and navigate to "Payment
              Link."
            </p>
          </div>
          <div className="w-full  ">
            <p className="w-[48px] h-[48px]  flex justify-center items-center font-bold text-[24px] text-[#15487D] rounded-full bg-[#15487D4D] mb-2">
              2{" "}
            </p>
            <p className="text-[22px] md:text-[24px] font-bold mb-2">Generate your link</p>
            <p className="text-18px md:text-[18px] ">Provide your information and then press the "send" button.</p>
          </div>
          <div className="w-full ">
            <p className="w-[48px] h-[48px] flex justify-center items-center font-bold text-[24px] text-[#15487D] rounded-full bg-[#15487D4D] mb-2">
              3{" "}
            </p >
            <p className="text-[22px] md:text-[24px]  font-bold mb-2">Share your Link</p>
            <p className="text-18px md:text-[18px] ">Copy your link ,share and start receiving payments."</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100  w-full flex flex-col px-[16px]  md:flex-row md:px-[30px]  items-center lg:px-[90px] py-[20px]  justify-between ">
        <div className="py-10 w-full md:w-[50%]">
          <img src="/Rectangle2.png" alt="" className="w-[750px]" />
        </div>
        <div className="w-full md:w-[50%] ">
          <h4 className="text-[#15487D] text-[30px]">QR Code</h4>
          <p className="text-[18px] md:text-[22px] mt-[40px]">
            Our payment websites leverage QR codes to simplify online
            transactions, allowing you to initiate payments by scanning a
            website-generated QR code, verifying transaction details, and
            securely completing the process with ease.
          </p>
        </div>
      </section>
      <GetStarted/>
      <Footer/>
    </div>
  );
};

export default payment;
