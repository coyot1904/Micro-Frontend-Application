import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // You may need to install Yup for validation
import axios from "axios";

const Login = ({ onLogin }) => {
  const [authError, setAuthError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/api/auth/login", {
          email: values.email,
          password: values.password,
        });
        const token = response.data.token;
        localStorage.setItem("token", token);
        setAuthError("");
        onLogin(token);
      } catch (error) {
        console.error("Login failed:", error);
        setAuthError("Login failed. Please check your credentials.");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error-message">{formik.errors.email}</div>
      ) : null}
      <input
        type="password"
        placeholder="Password"
        {...formik.getFieldProps("password")}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="error-message">{formik.errors.password}</div>
      ) : null}
      <button type="submit">Login</button>
      {authError && <div className="error-message">{authError}</div>}
    </form>
  );
};

export default Login;
