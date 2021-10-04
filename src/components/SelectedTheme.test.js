import React from "react";
import { render } from "@testing-library/react";
import SelectedTheme from "./SelectedTheme";

test("renders SelectedTheme component", () => {
  const { getElement } = render(<SelectedTheme isDark="true" />);
  const linkElement = getElement(/Selected theme/i);
  expect(linkElement).toBeInTheDocument();
});
