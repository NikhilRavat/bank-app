import React, { useState } from "react";
import Input from "../Shared/Input";
import { useForm } from "react-hook-form";
import "./Login.css";
import apiService from "./../../ApiService/apiService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  const userState = useSelector((state) => state.user);
  const LoginSubmit = async (formData) => {
    const user = await apiService(
      `Account/Login/${formData.userName}/${formData.Password}`,
      "get",
      {
        type: "login_user",
      }
    );
    var userData = parseJwt(user.payload);

    const userModel = {
      userName: userData.unique_name,
      role: userData.role,
      token: user.payload,
    };

    dispatch({
      type: "login_user",
      payload: userModel,
    });

    navigate('/')
  };

  const parseJwt = (token) => {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-lg-12 d-grid"
          style={{ placeContent: "center", minHeight: "100vh" }}
        >
          <div className="card login-card p-4">
            <form onSubmit={handleSubmit((data) => LoginSubmit(data))}>
              {userState.error ? (
                <div className="text-danger">{userState.error}</div>
              ) : (
                ""
              )}
              <div className="mt-2">
                <Input
                  id="userName"
                  label="User Name"
                  type="text"
                  register={register("userName", { required: true })}
                />
                {errors.userName && (
                  <p className="text-danger">Bank name is required.</p>
                )}
              </div>
              <div className="mt-2 password-input">
                <Input
                  id="password"
                  label="Password"
                  type={showPassword ? "text" : "Password"}
                  register={register("Password", { required: true })}
                />
                <i
                  className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"
                    } input-icon`}
                  onClick={ShowPasswordHandler}
                ></i>
                {errors.Password && (
                  <p className="text-danger">Bank name is required.</p>
                )}
              </div>
              <hr />
              <input
                type="submit"
                className="btn btn-primary float-end"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
