import React from 'react'

const GetStarted = () => {
  return (
    <section className="px-[16px] flex flex-col justify-center gap-10  mt-10 md:flex-row md:px-[30px] md:justify-between lg:px-[90px] ">
    <div className=" w-full md:w-[70%]">
      <p className="text-[#15487DCC] text-[22px] ">Experience Paylode today</p>
      <p className="text-[48px] text-[#124072] font-bold leading-tight">Initiate the process of receiving payments as swiftly as feasible.</p>
    </div>
    <div className="">
    <button className=" py-[8px] px-[24px] bg-[#124072]  mt-4 text-white font-semibold rounded-md">
        <a
          href="https://pgmerchants.paylodeservices.com/"
          target="_blank"
          rel="noreferrer"
        >
          Get Started
        </a>
      </button>
    </div>
</section>
  )
}

export default GetStarted