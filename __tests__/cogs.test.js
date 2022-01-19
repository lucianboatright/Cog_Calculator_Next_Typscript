import { render, screen, cleanup } from "@testing-library/react";
import Cogs from "../components/cogs/cogs";
import React from "react";
/**
 * @jest-environment jsdom
 */

test("testing cog component renders", () => {
  render(<Cogs />);
  const cogElement = screen.getByTestId("cog-component");
  expect(cogElement).toBeInTheDocument();
});
