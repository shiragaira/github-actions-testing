import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

test("correctly render heading in Avatar component", () => {
  render(<Avatar />);
  const headerElement = screen.getByRole("heading", {
    name: /this is avatar component/i,
  });
  expect(headerElement).toBeInTheDocument();
});
