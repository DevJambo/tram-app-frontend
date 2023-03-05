import React from "react";
import { render } from "@testing-library/react";
import HomePage from "../../components/pages/home";

describe("HomePage", () => {
  const { asFragment } = render(<HomePage />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
