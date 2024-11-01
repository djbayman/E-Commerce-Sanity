import "@testing-library/jest-dom";
import { render, screen } from "./test-utils";
import Discount from "../Components/Discount";

describe("banner test", () => {
  test("if there is header in Discount section", () => {
    render(<Discount />);
    const headingElement = screen.getByRole("heading", {
      name: "Get Discount up to 70%",
    });
    expect(headingElement).toBeInTheDocument();
  });
});
