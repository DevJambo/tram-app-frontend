import React from "react";
import { render } from "@testing-library/react";
import Results from "../../components/blocks/results";

describe("Results", () => {
  const { asFragment } = render(<Results />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
