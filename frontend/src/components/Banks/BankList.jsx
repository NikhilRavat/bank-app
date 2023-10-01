import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiService from "../../ApiService/apiService";
import BankDetailCard from "./BankDetailCard";
import Loading from "../Shared/Loading";

function BankList() {
  const state = useSelector((state) => state.bank);

  const dispatch = useDispatch();

  const GetBanksData = async () => {
    dispatch(
      await apiService("Banks/GetBanks", "get", {
        type: "get_banks",
      })
    );
  };
  useEffect(() => {
    GetBanksData();
  }, []);
  return (
    <div className="card mt-3 h-100">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-12 d-grid">
            <button
              type="button"
              style={{ justifySelf: "end" }}
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Add New Bank
            </button>
          </div>
        </div>
        <div className="row h-100">
          <div className="col-lg-12 mt-3">
            {state.isLoading ? <Loading /> : ""}
            {state.error ?? ""}
            <div className="d-flex bank-list" style={{ flexWrap: "wrap" }}>
              {state.data.map((bank) => {
                return <BankDetailCard key={bank.id} {...bank} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankList;
