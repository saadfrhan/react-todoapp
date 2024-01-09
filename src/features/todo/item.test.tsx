import { fireEvent } from "@testing-library/react";
import TodoItem from "./item";
import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "@/lib/test-utils";

const mockDispatch = vi.fn();
vi.mock("@/app/hooks", () => ({ useAppDispatch: () => mockDispatch }));

describe("TodoItem", () => {
  it("renders todo title", () => {
    const { getByText } = renderWithProviders(
      <TodoItem todo={{ title: "Todo 1", id: "1", isDone: false }} />
    );
    expect(getByText("Todo 1")).toBeInTheDocument();
  });

  it("renders delete button", () => {
    const { getByRole } = renderWithProviders(
      <TodoItem todo={{ isDone: false, id: "1", title: "test todo" }} />
    );

    expect(getByRole("button", { name: /delete/i })).toBeInTheDocument();
  });

  it("calls updateTodo on checkbox click", () => {
    const { getByRole } = renderWithProviders(
      <TodoItem todo={{ isDone: false, id: "1", title: "test todo" }} />
    );
    fireEvent.click(getByRole("checkbox"));
    expect(mockDispatch).toHaveBeenCalledOnce();
  });
});
