import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter";

describe("counter component", () => {
  beforeEach(() => {
    render(<Counter />);
  });
  it("should increase", async () => {
    const btn = screen.getByRole("button", { name: "increment" });
    userEvent.click(btn);
    const uno = await screen.findByText(/1/i);
    await waitFor(() => expect(uno).toBeInTheDocument());
    for (let i = 0; i < 5; i++) {
      userEvent.click(btn);
    }
    const cinco = await waitFor(() => screen.findByText(/6/i));
    expect(cinco).toBeInTheDocument();
  });

  it("should decrease", async () => {
    const btn = screen.getByRole("button", { name: "decrement" });
    userEvent.click(btn);
    const uno = await waitFor(() => screen.findByText(/-1/i));
    expect(uno).toBeInTheDocument();

    for (let i = 0; i < 5; i++) {
      userEvent.click(btn);
    }

    const seis = await screen.findByText(/-6/i);

    expect(seis).toBeInTheDocument();
  });

  it("should disapear when count is 15 or more", async () => {
    const increase = screen.getByRole("button", { name: "increment" });
    const decrease = screen.getByRole("button", { name: "decrement" });

    expect(screen.queryByText(/I am too small/i)).toBeInTheDocument();
    expect(screen.getByText(/0/i)).toBeInTheDocument();
    for (let i = 0; i < 15; i++) {
      userEvent.click(increase);
    }
    await waitFor(() => screen.findByText(/15/i));
    expect(screen.getByText(/15/i)).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText(/I am too small/i));
    expect(screen.queryByText(/I am too small/i)).not.toBeInTheDocument();

    userEvent.click(decrease);
    await waitFor(() => screen.findByText(/14/i));
    expect(screen.getByText(/I am too small/i)).toBeInTheDocument();
  });
});
