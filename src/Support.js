import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const Support = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-[#FFF] w-full flex flex-col md:flex-row  px-[16px]  md: md:px-[30px] justify-center lg:px-[90px] py-[50px]   gap-10 ">
        <div className="w-full md:w-[50%]">
          <h1 className="text-[24px]  text-[#15487D] font-bold md:text-[50px]">
            Customer support available{" "}
            <span className="text-[#3BB75E]"> around the clock</span>
          </h1>
          <p className="text-[15px] font-semibold md:text-[18px] mt-5">
            Our unwavering commitment to customer satisfaction means that our
            dedicated support team is at your service 24/7, ready to assist with
            any inquiries or worries you may encounter. We deeply value our
            customers and are always here to help.
          </p>
        </div>
        <div className="w-full md:w-[50%]">
          <img src="/front.png" alt="" />
        </div>
      </section>
      <section className="bg-[#15487D] w-full flex flex-col items-center px-[16px]   md:px-[30px] justify-center lg:px-[90px] py-[50px]    ">
        <h1 className="text-[15px]  text-[#fff] font-bold md:text-[30px]">
          How can we help?
        </h1>
        <p className="text-[14px] font-normal text-center text-[#fff] md:text-[25px]">
          If you have a complaint or an enquiry, please feel free to inform us.
          We guarantee a response within 24 hours or even sooner
        </p>
      </section>
      
      <section className="bg-[#F3F6F8] w-full flex flex-col  px-[16px]   md:px-[30px] justify-between lg:px-[90px] py-[10px]">

      <h1 className="text-[20px] text-[#33475B] font-bold md:text-[28px] text-center py-6">
          How can we help you?
        </h1>
        <form action="">
          <label className="text-[16px] font-medium">First name*</label> <br />
          <input
            type="text"
            name="text"
            class="mt-1 px-[16px] py-[10px] text-[16px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded w-full max-w-[600px]"
            placeholder=""
          ></input>{" "}
          <div className="mt-3 flex flex-col ">
            <label className="text-[16px] font-medium">Second name*</label>{" "}
            <input
              type="text"
              name="text"
              class="mt-1 px-[16px] py-[10px]  text-[16px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded w-full max-w-[600px]"
              placeholder=""
            ></input>{" "}
          </div>
          <div className="mt-3 flex flex-col ">
            <label className="text-[16px] font-medium">Email</label>
            <input
              type="text"
              name="text"
              class="mt-1 px-[16px] py-[10px]  text-[16px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded w-full max-w-[600px]"
              placeholder=""
            ></input>{" "}
          </div>
          <div className="mt-3 flex flex-col ">
            <label className="text-[16px] font-medium">Phone number</label>
            <input
              type="text"
              name="text"
              class="mt-1 px-[16px] py-[10px]  text-[16px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded w-full max-w-[600px]"
              placeholder=""
            ></input>{" "}
          </div>
          <div className="mt-10">
            <h4 className="text-[#33475B] font-semibold text-[20px]">
              What type of support are you looking for?
            </h4>
            <div className="flex mt-2  gap-3 font-medium">
              <input type="checkbox" id="check" className="w-5" />
              <label for="check" className="text-[18px]">
                Tech issue
              </label>
            </div>
            <div className="flex mt-2  gap-3 font-medium">
              <input type="checkbox" id="check" className="w-5" />
              <label for="check" className="text-[18px]">
                Transaction issue
              </label>
            </div>
            <div className="flex mt-2  gap-3 font-medium">
              <input type="checkbox" id="check" className="w-5" />
              <label for="check" className="text-[18px]">
                Operational issue
              </label>
            </div>
            <div className="flex mt-2  gap-3 font-medium">
              <input type="checkbox" id="check" className="w-5" />
              <label for="check" className="text-[18px]">
                General inquiry
              </label>
            </div>
          </div>
          <div className="mt-5">
            <label className="text-[16px] font-medium ">
              Transaction Reference*
            </label>{" "}
            <br />
            <input
              type="text"
              name="text"
              class="mt-1 px-[16px] py-[10px] text-[16px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded w-full max-w-[800px]"
              placeholder=""
            ></input>{" "}
          </div>
          <div className="mt-5">
            <label className="text-[16px] font-medium ">Name issue*</label>{" "}
            <br />
            <input
              type="text"
              name="text"
              class="mt-1 px-[16px] py-[10px] text-[16px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded w-full max-w-[800px]"
              placeholder=""
            ></input>{" "}
          </div>
          <div className="mt-5">
            <label className="text-[16px] font-medium ">
              Issue description
            </label>{" "}
            <br />
            <textarea
              name=""
              id=""
            
              rows="5"
              className="border-slate-300 px-5 w-full py-5 focus:border-sky-500 focus:ring-sky-500 border rounded-md"
            ></textarea>
          </div>
          <div className="mt-5">
            <input type="file" name="file" />
          </div>
          <button
            type="submit"
            className="max-w-[500px]  bg-[#15487D] mt-10 font-semibold text-white w-full py-1 "
          >
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Support;
