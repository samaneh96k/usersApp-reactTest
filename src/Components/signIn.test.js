import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SignIn from "./signIn";

describe("users Component", () => {
  test("renders showUser btn was Not Clicked", () => {
    //Arrange
    render(<SignIn />);
    //Act
    //Assert
    const btnElm = screen.getByText("add", { exact: false });
    expect(btnElm).toBeInTheDocument();
  }), test("render new user in sign in component", () => {
    render(<SignIn />);
    const inputEl = screen.getByTestId("name-input");
    userEvent.type(inputEl, "samaneh");
    const btnElm = screen.getByText("Add User");
    userEvent.click(btnElm);
    const nameElm = screen.getByText("samaneh");
    expect(nameElm).toHaveTextContent("samaneh");
  });
});
