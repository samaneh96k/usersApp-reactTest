import { render, screen } from "@testing-library/react";

import Users from "./users";

describe("users Component", () => {
  test("renders showUser btn was Not Clicked", () => {
    const usersData = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      }
    ];

    //Arrange
    render(<Users users={usersData} />);
    //Act
    //Assert
    const btnElm = screen.getByText("toggle", { exact: false });
    expect(btnElm).toBeInTheDocument();
  });
  test("render'showUser' btn was clicked", () => {
    const usersData = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      }
    ];

    render(<Users users={usersData} />);
    //Act

    //Assert
    const outputElm = screen.getByText("toggle Users");
    expect(outputElm).toBeInTheDocument();
  });
  test("render  users  if request succeeds", async () => {
    const usersData = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      }
    ];

    render(<Users users={usersData} error={null} />);

    const headingElm = screen.getByRole("heading", { name: /Leanne Graham/i });

    expect(headingElm).toBeInTheDocument();
  });
});
