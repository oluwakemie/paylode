import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Pricing from "./pricing";
import TermAndCondition from "./T&C";
import Home from "./Home";

// import Developer from "./developer";
// import Overview from "./doc/overview";
// import Paylodecheckout from "./doc/paylodecheckout";
// import Support from "./support";
// import Billvending from "./billvending";
import Payment from "./Payment";
import BillVending from "./BillVending";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/termsofuse" element={<TermAndCondition />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/billvending" element={<BillVending />} />
        {/* // <Route path="/support" element={<Support />}/>  */}
        {/* <Route path="/pricing" element={<Pricing />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
