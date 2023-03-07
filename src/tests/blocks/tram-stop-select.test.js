import React from "react";
import { render } from "@testing-library/react";
import TramStopSelect from "../../components/blocks/tram-stop-select";

describe("TramStopSelect", () => {
  const { asFragment } = render(<TramStopSelect />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
