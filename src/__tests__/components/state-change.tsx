import { render, screen } from "@testing-library/react";
import { TestingStateChange } from "../../components/molecules";
import userEvent from "@testing-library/user-event";

test("Testing page load && state change", () => {
  render(<TestingStateChange />)
  expect(screen.getByText(/page loaded/i)).toBeInTheDocument();
})

test("Toggle text visible", async () => {
  render(<TestingStateChange/>);
  await userEvent.click(screen.getByText(/toggle text/i));
  expect(screen.getByText(/text visible/i)).toBeInTheDocument();
})

test("Button disabled on click", async () => {
  render(<TestingStateChange/>)
  await userEvent.click(screen.getByText(/toggle button disabled/i));
  console.log("isbuttnin------>", screen.getByText(/toggle button disabled/i))
  expect(screen.getByText(/toggle button disabled/i)).toBeDisabled();
})