import React from "react";
import { render } from "@testing-library/react";
import LoginPage from "../../components/pages/login-page";

describe("LoginPage", () => {
  const { asFragment } = render(<LoginPage />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
