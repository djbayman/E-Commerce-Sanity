import "@testing-library/jest-dom";
import { render, screen } from "./test-utils";

import Navbar from "../Components/Navbar";

describe("navbar test", () => {
  test("is there is text logo in the Navbar", () => {
    render(<Navbar />);
    const textLogo = screen.getByRole("heading");
    expect(textLogo).toBeInTheDocument();
  });
});
