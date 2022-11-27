import { render, screen } from "@testing-library/react";

import Footer from "./footer";

describe("footer component", () => {
  test("renders Gmail link", () => {
    render(<Footer />);
    const linkElement = screen.getByText("Gmail", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });
  test("renders Gmail link", () => {
    render(<Footer />);
    const linkElement = screen.getByText("samanehkarimi", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });
});
