import React from "react";
import { render } from "@testing-library/react";
import TramMap from "../../components/pages/tram-map";

describe("HomePage", () => {
  const { asFragment } = render(<TramMap />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
