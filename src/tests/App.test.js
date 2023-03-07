import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

test("renders text: 'Tram App'", () => {
  render(<App />);
  const linkElement = screen.getByText(/Tram App/i);
  expect(linkElement).toBeInTheDocument();
});

describe("App", () => {
  const { asFragment } = render(<App />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
