import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TermAndCondition from "./T&C";
import Home from "./Home";
import Paylodecheckout from "./Paylodecheckout";
// import Developer from "./developer";
// import Overview from "./doc/overview";
// import Paylodecheckout from "./paylodecheckout";
import Support from "./Support";
// import Payment from "./Payment";
import BillVending from "./BillVending";
import Pricing from "./Pricing";
import DeviceInfo from "./DeviceInfo";
import PaymentLink from "./PaymentLink";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/termsofuse" element={<TermAndCondition />} />
        <Route path="/paymentlink" element={<PaymentLink />} />
        <Route path="/billvending" element={<BillVending />} />
        <Route path="/support" element={<Support />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/payment" element={<Paylodecheckout />} />
        <Route path="/deviceinfo" element={<DeviceInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
