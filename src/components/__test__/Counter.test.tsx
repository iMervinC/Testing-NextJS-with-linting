import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter";

describe("counter component", () => {
  beforeEach(() => {
    render(<Counter />);
  });
  it("should increase", () => {
    const btn = screen.getByRole("button", { name: "increment" });
    userEvent.click(btn);
    screen.getByText(/1/i);
    for (let i = 0; i < 5; i++) {
      userEvent.click(btn);
    }
    expect(screen.getByText(/6/i)).toBeInTheDocument();
  });
  it("should decrease", async () => {
    const btn = screen.getByRole("button", { name: "decrement" });
    userEvent.click(btn);
    const uno = await screen.findByText(/-1/i);
    await waitFor(() => expect(uno).toBeInTheDocument());

    for (let i = 0; i < 5; i++) {
      userEvent.click(btn);
    }

    const seis = await screen.findByText(/-6/i);

    expect(seis).toBeInTheDocument();
  });
});
