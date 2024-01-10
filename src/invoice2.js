/* eslint-disable */
import React, { useEffect, useState } from "react";
// import { NumericFormat } from "react-number-format";

const Invoice2 = () => {
  // const BaseApiUrl = "http://94.229.79.27:31221/v1";
  const BaseApiUrl = "https://paymentgatewayapi.paylodeservices.com/v1";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [merchantName, setMerchantName] = useState("");
  const [currency, setCurrency] = useState("");
  const [session, setSession] = useState("");
  const [expiry, setExpiry] = useState(true);
  const [merchantLogo, setMerchantLogo] = useState("");

  const Checkout = (event) => {
    console.log("email:", email);

    var handler = PaylodeCheckout.setup({
      firstname: "Payment",
      lastname: "Link",
      redirectUrl: "http://paylode.com",
      phonenumber: phoneNumber,
      publicKey: publicKey,
      email: email,
      amount: amount,
      currency: currency,
      // onClose: function (data) {
      //   alert("iFRAME CLOSED Now");
      //   console.log("Returned data:", data);
      // },
      onSuccess: function (data) {
        console.log("Returned data:", data);
      },
    });
    handler.openIframe();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.paylodeservices.com/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    // Grab the URL parameters
    const params = new URLSearchParams(window.location.search);
    const session = params.get("session");

    setSession(session);

    // setTimeout(() => {
    fetch(`${BaseApiUrl}/payment/preview?SessionReference=${session}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "Sessionreference": "",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.isSuccessful && res.data) {
          setPublicKey(res.data?.publicKey);
          setExpiry(res.data?.isExpired);
          setEmail(res.data?.customerEmail);
          setPhoneNumber(res.data?.customerPhoneNumber);
          setCurrency(res.data?.currency);
          setAmount(res.data?.amount);
          setMerchantName(res.data?.merchantName);
          setMerchantLogo(res.data?.merchantLogo)
          // setTimeout(() => {
          //   
          // }, 6000);
          
          console.log("email:", email);

        } else if (!res.isSuccessful) {
          console.log("error message:", res.message || res.title || "");
        }
      });
    
  },[] );

  useEffect(()=>{
    if(email){
       Checkout();
    }
   
  }, [email])

  return (
    <div className="bg-[#fafafa] h-screen flex justify-center flex-col relative ">
      <div className="bg-[rgb(18,64,114)] flex items-center justify-center gap-4 md:gap-5 z-[5000000] text-white  text-center  w-full py-8 rounded-br-2xl rounded-bl-2xl shadow-md absolute top-0">
        {merchantLogo? (<img src={merchantLogo} alt="logo" className="h-[30px]"/>): ""}
        <p className="font-bold text-xl">{merchantName}</p>
      </div>

      {amount.length > 0 ? (
        <section class="max-w-[700px] w-full md:w-[70%] lg:w-[60%] mx-auto p-[30px] bg-white rounded-lg">
          <div className="mb-9">
            <h2 className="text-2xl text-center font-bold text-gray-700">
              {merchantName}
            </h2>
            <p className="text-lg text-center text-gray-500 font-semibold mb-[46px] md:mb-[56px]"></p>
          </div>

          <form id="paymentForm">
            <div className="flex items-center mb-3">
              <div className="bg-[#F7F7F7] gap-2  border-gray-500 border py-4 flex items-center pl-1 rounded-bl-lg rounded-tl-lg">
                <p className="px-2 font-semibold">
                  {currency ? currency : "NGN"}
                </p>
              </div>
              <input
                placeholder="How much?"
                className="w-full h-full py-4 px-2 placeholder:text-[#A0AEC0] border-gray-500 placeholder:font-normal font-medium text-[#124072] text-[16px] leading-[24px] tracking-[0.3px] bg-white border  focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm rounded-tr-lg rounded-br-lg"
                autofocus
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div class="flex flex-col mb-3">
              <label className="text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                id="emailInput"
                className="w-full h-full py-4 px-2 rounded-lg placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#124072] text-[16px] leading-[24px] tracking-[0.3px] bg-white border  focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                name="emailInput"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="flex flex-col mb-3">
              <label className="text-gray-700 font-semibold">First Name</label>
              <input
                type="text"
                id="firstName"
                className="w-full h-full py-4 px-2 rounded-lg placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#124072] text-[16px] leading-[24px] tracking-[0.3px] bg-white border  focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                name="firstName"
                value={firstName}
                placeholder=""
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div class="flex flex-col mb-3">
              <label className="text-gray-700 font-semibold">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="w-full h-full py-4 px-2 rounded-lg placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#124072] text-[16px] leading-[24px] tracking-[0.3px] bg-white border  focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm "
                name="lastName"
                value={lastName}
                placeholder=""
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <button
              onClick={Checkout}
              type="submit"
              id="paymentButton"
              disabled={expiry === true ? true : false}
              className="bg-[#124072] text-center w-full rounded-lg text-white py-2 mt-3"
            >
              Make Payment
            </button>
          </form>
        </section>
      ) : (
        <div className="flex justify-center mb-10">
          <svg
            className="ml-4 w-6 h-6 text-[#124072] animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}

      <section className="w-full flex justify-center items-center gap-2 mt-5">
        <p class="secured">
          secured by{" "}
          <span className="text-[#124072] cursor-pointer">Paylode</span>{" "}
        </p>
        <img
          src="/paylodelogo.png"
          alt="paylode logo"
          className="w-[80px] object-contain"
        />
        <i class="fa fa-lock" aria-hidden="true"></i>
      </section>
    </div>
  );
};

export default Invoice2;
