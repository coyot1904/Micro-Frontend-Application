import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {
  const [authError, setAuthError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is Required"),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post("/api/auth/register", values);
        setAuthError("");
        alert("Registration successful! Please login.");
      } catch (error) {
        console.error("Registration failed:", error);
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
      <button type="submit">Register</button>
      {authError && <div className="error-message">{authError}</div>}
    </form>
  );
};

export default Register;
