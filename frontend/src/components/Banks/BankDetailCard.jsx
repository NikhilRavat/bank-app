import React from "react";

function BankDetailCard({
  id,
  bankName,
  contactNumber,
  email,
  website,
  bankLogoUrl,
}) {
  return (
    <div className="card bank-card" style={{ width: "270px" }}>
      <img
        src={bankLogoUrl}
        className="card-img-top"
        alt="Bank_LOGO"
        style={{ width: "250px", margin: "0 auto" }}
      />
      <div className="card-body">
        <h5 className="card-title">{bankName}</h5>
        <hr />
        <div className="row">
          <div className="col-lg-6 field">Contanct No.</div>
          <div className="col-lg-6 value">{contactNumber}</div>
          <div className="col-lg-6 field">Email Address</div>
          <div className="col-lg-6 value">
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="col-lg-6 field">WebSite</div>
          <div className="col-lg-6 value">
            <a href={website}>{website}</a>
          </div>
        </div>
        <button className="btn btn-primary mt-3">Edit Bank</button>
        <button className="btn btn-danger mt-3 ms-2">Remove Bank</button>
      </div>
    </div>
  );
}

export default BankDetailCard;
