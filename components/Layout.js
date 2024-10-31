import React from "react";
import Navigation from "./Navigation";
import "./Layout.css";

const Layout = ({ children }) => (
  <div className="app-layout">
    <Navigation />
    <main className="content">{children}</main>
    <footer className="footer">
      © 2024 Koznek Assignment Front-end Developer (React.js)
    </footer>
  </div>
);

export default Layout;
