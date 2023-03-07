import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../../components/blocks/navbar";

describe("Navbar", () => {
  const { asFragment } = render(<Navbar />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
