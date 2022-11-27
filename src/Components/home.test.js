import { render, screen } from "@testing-library/react";
import Home from "./home";
test("render image in home page", () => {
    render(<Home />)
    const imgElm = screen.getByRole("img", { name: "home-picture" });
    expect(imgElm).toBeVisible()
}
   
)