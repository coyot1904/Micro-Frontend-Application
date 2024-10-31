import React from "react";

import "./Home.css";

const Home = () => (
  <div className="home">
    <h1>Welcome to Senior Frontend Developer Assignment</h1>
    <p>
      Explore our products, view your order history, and log in for more
      features!
    </p>

    <section className="info-section">
      <h2>About the Project</h2>
      <p>This project consists of three micro-frontends:</p>
      <div className="card-container">
        <div className="card">
          <h3>Product List</h3>
          <ul>
            <li>List products with filtering and searching options.</li>
            <li>Includes a shopping basket feature.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Login/Register</h3>
          <ul>
            <li>User authentication with registration and login forms.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Orders List</h3>
          <ul>
            <li>Displays a list of user orders.</li>
            <li>This micro-frontend is developed using TypeScript.</li>
          </ul>
        </div>
      </div>
      <p>
        For managing dependencies across all three micro-frontends, I created a
        Node.js script that installs all packages with a single command. You can
        also start all micro-frontends along with the parent application using{" "}
        <code>yarn start:containers</code>.
      </p>
      <p>
        For state management, I utilized Redux to ensure that the parent and
        child components work seamlessly together. The entire application is
        built using Webpack, and while the designs are sample, they are
        responsive across all components.
      </p>
      <p>
        Additionally, I created tests using Jest, which can be found in the test
        folder of the project.
      </p>
    </section>
  </div>
);

export default Home;
