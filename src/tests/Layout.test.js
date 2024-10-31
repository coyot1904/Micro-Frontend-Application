import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout";
import "@testing-library/jest-dom";

jest.mock("../../components/Navigation", () => () => (
  <nav>Mock Navigation</nav>
)); // Mocking Navigation component

describe("Layout Component", () => {
  test("renders navigation component", () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    const navElement = screen.getByText("Mock Navigation");
    expect(navElement).toBeInTheDocument();
  });

  test("renders footer text", () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    const footerText = screen.getByText(
      /© 2024 Koznek Assignment Front-end Developer \(React.js\)/i
    );
    expect(footerText).toBeInTheDocument();
  });

  test("renders children inside main content area", () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    const content = screen.getByText("Test Content");
    expect(content).toBeInTheDocument();
  });
});
