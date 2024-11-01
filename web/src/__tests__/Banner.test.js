import "@testing-library/jest-dom";
import { render, screen } from "./test-utils";
import Banner from "../Components/Banner";

describe("banner test", () => {
  test("if there is button in banner section", async () => {
    render(<Banner />);
    const buttonEle = await screen.findByRole("button");
    expect(buttonEle).toBeInTheDocument();
  });

  const bannerDataTest = {
    buttonText: "Shop Now",
    desc: "best jacket on the market",
    discount: "70%",
    largeText1: "Super value deals",
    largeText2: "On all Products",
    midText: "Trade-in-Offer",
    product: "jacket",
    smallText: "Save more whit copuns up to 70% off",
  };
  test("the MidText in the banner", async () => {
    render(<Banner bannerData={bannerDataTest} />);
    const headingEle = await screen.findByRole("heading", {
      level: 3,
    });
    expect(headingEle).toHaveTextContent(bannerDataTest.midText);
    //
  });

  test("the LargeText in the banner", async () => {
    render(<Banner bannerData={bannerDataTest} />);
    const headingEle = await screen.findByRole("heading", {
      level: 1,
    });
    expect(headingEle).toHaveTextContent(bannerDataTest.largeText1);
  });
});
