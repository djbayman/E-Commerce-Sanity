import React from "react";
import { render } from "@testing-library/react";
import StateContext from "../Context/StateContext";
import { BrowserRouter } from "react-router-dom";

// a custom function to wrapp any given component with state management && Router
const AllTheProviders = ({ children }) => {
  return (
    <StateContext>
      <BrowserRouter>{children}</BrowserRouter>
    </StateContext>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
