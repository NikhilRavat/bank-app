import React from "react";
import AddBankModal from "./AddBankModal.jsx";
import BankList from "./BankList.jsx";

function Banks() {
  return (
    <div>
      <AddBankModal />
      <div className="container-fluid pageWrapper">
        <div className="row h-100">
          <div className="col-lg-8">
            <BankList />
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Banks;
