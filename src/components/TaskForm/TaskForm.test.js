import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import { TaskForm } from "./TaskForm";

describe("TaskForm tests", () => {
  // Use describe instead of test
  it("Fields test", () => {
    // Use it instead of test
    render(<TaskForm />);
    const label = screen.getByLabelText("Title");
    expect(label).toBeInTheDocument();
  });
});
