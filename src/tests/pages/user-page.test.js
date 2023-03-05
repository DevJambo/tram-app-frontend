import React from "react";
import { render } from "@testing-library/react";
import UserPage from "../../components/pages/user-page";

describe("UserPage", () => {
  const { asFragment } = render(<UserPage />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
