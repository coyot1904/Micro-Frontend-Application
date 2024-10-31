import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../components/Home";

test("renders welcome message", () => {
  render(<Home />);
  const linkElement = screen.getByText(
    /Welcome to Senior Frontend Developer Assignment/i
  );
  expect(linkElement).toBeInTheDocument();
});
