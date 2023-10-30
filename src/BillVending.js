import React from "react";
import Navbar from "./component/Navbar";
import GetStarted from "./component/GetStarted";
import Footer from "./component/Footer";
const BillVending = () => {
  return (
    <div>
      <Navbar />
      {/* hero section */}
      <section className="bg-[#092E55] w-full flex flex-col px-[16px]  md:flex-row md:px-[30px]  items-center lg:px-[100px] py-[20px]  justify-between  ">
        <div className="py-10 w-full text-white leading-tight md:w-[50%]">
          <h2 className="text-[50px] font-semibold  ">
            Experience the Speed and Convenience of Our Bill Vending Platform
          </h2>
          <p className="mt-[100px] text-[30px]">
            Experience the Speed and Convenience of Our Bill Vending Platform
          </p>
        </div>
        <div className="w-full md:w-[50%] flex justify-center">
          <img src="/Rectangle3.png" alt="" />
        </div>
      </section>
      <div className="bg-[#F3F6F8] px-[100px] py-[100px]">
        <h1 className="text-[30px] text-center font-bold ">
          Simplify Your Payment Experience
        </h1>
        <p className="text-left  w-full md:max-w-[50%] mt-5  text-[16px] md:text-[18px]">
          Take advantage of our cost-effective bill vending packages and enhance
          every aspect of your life. Whether you're a casual internet user or a
          frequent data consumer, we offer budget-friendly bill plans tailored
          to your needs.
        </p>
      </div>
      <section className=" bg-[#F3F6F8] w-full flex flex-col px-[16px] md:flex-row md:px-[30px] gap-10 items-center lg:px-[100px] py-[20px]  justify-between ">
        <div className="mt-10 grid grid-cols-1  md:grid-col-1 lg:grid-cols-2 gap-[60px] ">
          <div className="max-w-[500px] bg-[#FFF] rounded-xl shadow-lg px-[50px] py-[40px]  ">
            <h1 className="text-[20px] md:text-[30px] text-center font-bold">
              Electricity Bill
            </h1>
            <img src="/Frame2.png" alt="" className="mt-10" />
            <p className="text-center text-[15px] md:text-[20px] mt-5 mb-4">
              We serve you best way to pay your electricity bill instantly and
              electricity supply from any of the Nigerian Electricity Disco of
              your choice, below are the electricity disco available:
            </p>
            <div className="flex  items-center gap-2 text-[14px] md:text-[20px]">
              <img src="/checkbutton.svg" alt="" />
              <p>Abuja Electricity Distribution Plc (AEDC)</p>
            </div>
            <div className="flex items-center gap-2 mt-2  text-[14px] md:text-[20px]">
              <img src="/checkbutton.svg" alt="" />
              <p>Benin Electricity Distribution Plc (BEDC)</p>
            </div>
            <div className="flex items-center gap-2 mt-2  text-[14px] md:text-[20px]">
              <img src="/checkbutton.svg" alt="" />
              <p>Eko Electricity Distribution Plc (EKEDC)</p>
            </div>
            <div className="flex items-center gap-2 mt-2  text-[14px] md:text-[20px]">
              <img src="/checkbutton.svg" alt="" />
              <p>Enugu Electricity Distribution Plc (EEDC)</p>
            </div>
            <div className="flex items-center gap-2 mt-2  text-[14px] md:text-[20px]">
              <img src="/checkbutton.svg" alt="" />
              <p>Ibadan Electricity Distribution Plc (IBEDC)</p>
            </div>
            <div className="flex items-center gap-2 mt-2  text-[14px] md:text-[20px]">
              <img src="/checkbutton.svg" alt="" />
              <p>Ikeja Electricity Distribution Plc (IKEDC)</p>
            </div>
            <div className="flex items-center gap-2 mt-2  text-[14px] md:text-[20px]">
              <img src="/checkbutton.svg" alt="" />
              <p>Jos Electricity Distribution Plc (JEDC)</p>
            </div>
          </div>
          <div className="max-w-[500px]  bg-[#FFF] rounded-xl shadow-lg px-[50px] py-[100px]  ">
            <h1 className=" text-center font-bold text-[20px] md:text-[30px]">
              Airtime Top-up
            </h1>
            <img src="/Frame3.png" alt="" className="mt-[60px] " />
            <p className="text-center text-[20px] mt-[60px]">
              Get airtime from any of the registered Nigerian telecommunications
              service providers though our seamless channels.
            </p>
            <div className="mt-10 flex gap-7">
              <div className="flex items-center gap-1 text-[15px] md:text-[20px]">
                <img src="/checkbutton.svg" alt="" />
                <p>GLO</p>
              </div>
              <div className="flex items-center gap-1 text-[15px] md:text-[20px]">
                <img src="/checkbutton.svg" alt="" />
                <p>AIRTEL</p>
              </div>
              <div className="flex items-center gap-1 text-[15px] md:text-[20px]">
                <img src="/checkbutton.svg" alt="" />
                <p>9MOBILE</p>
              </div>
              <div className="flex items-center gap-1 text-[15px] md:text-[20px]">
                <img src="/checkbutton.svg" alt="" />
                <p>MTN</p>
              </div>
            </div>
          </div>
          <div className="max-w-[500px]  bg-[#FFF] rounded-xl shadow-lg px-[50px] py-[100px]  ">
            <h1 className="text-[30px] text-center font-bold">
              Buy Data Bundle
            </h1>
            <img src="/Frame3.png" alt="" className="mt-[60px] " />
            <p className="text-center text-[20px] mt-[60px]">
              Our server is entirely committed to providing data bundles around
              the clock, ensuring instant delivery.
            </p>
            <div className="mt-10 flex gap-7">
              <div className="flex items-center gap-2">
                <img src="/checkbutton.svg" alt="" />
                <p>GLO</p>
              </div>
              <div className="flex items-center gap-1">
                <img src="/checkbutton.svg" alt="" />
                <p>AIRTEL</p>
              </div>
              <div className="flex items-center gap-1">
                <img src="/checkbutton.svg" alt="" />
                <p>9MOBILE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#15487D] w-full flex flex-col justify-center px-[18px]  md:flex-row md:px-[30px]  md:justify-between items-center lg:px-[100px] py-[20px] relative ">
        <div className="w-full md:max-w-[60%]">
          <h1 className="text-white font-bold text-[30px]">Why Paylode?</h1>
          <div className=" flex items-start gap-2 mt-5 ">
            <img src="/Paybill.svg" alt=""  className=" w-[30px] md:w-[50px]"/>
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
            <img src="/safe.svg" alt="" className=" w-[30px] md:w-[50px]"/>
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
          </div> </div>
          <div className="w-full md:max-w-[40%] absolute bottom-0 right-0 ">
            <img src="/sunglasses.png" alt="" className="" />
          </div>
       
      </section>
      <GetStarted/>
      <Footer/>
    </div>
  );
};

export default BillVending;
