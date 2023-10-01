import React from "react";
import Input from "../Shared/Input";
import { useForm } from "react-hook-form";

function AddBankModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Modal title
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <div className="mt-2">
                <Input
                  id="bankName"
                  label="Bank Name"
                  type="text"
                  register={register("bankName", { required: true })}
                />
                {errors.bankName && <p>Bank name is required.</p>}
              </div>
              <div className="mt-2">
                <Input
                  id="contactNumber"
                  label="Contact Number"
                  type="text"
                  register={register("contactNumber", { required: true })}
                />
                {errors.contactNumber && <p>Contact number is required.</p>}
              </div>
              <div className="mt-2">
                <Input
                  id="email"
                  label="Email Address"
                  type="email"
                  register={register("email", { required: true })}
                />
                {errors.email && <p>Email Address is required.</p>}
              </div>
              <div className="mt-2">
                <Input
                  id="website"
                  label="WebSite"
                  type="url"
                  register={register("website", { required: true })}
                />
                {errors.website && <p>website is required.</p>}
              </div>
              <div className="mt-2">
                <Input
                  id="bankLogoUrl"
                  label="Logo Url"
                  type="text"
                  register={register("bankLogoUrl", { required: true })}
                />
                {errors.bankLogoUrl && <p>url of logo is required.</p>}
              </div>
              <hr />
              <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBankModal;
