import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../../pages";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("Home Component", () => {
  it("should render the Home component with links", () => {
    useRouter.mockImplementation(() => ({
      push: jest.fn(),
    }));

    render(<Home />);

    expect(screen.getByText("Phone Book App")).toBeInTheDocument();

    const contactListLink = screen.getByText("Contact List");
    expect(contactListLink).toBeInTheDocument();

    fireEvent.click(contactListLink);
    expect(useRouter().push).toHaveBeenCalledWith("/listcontact");

    const formContactLink = screen.getByText("Form Contact");
    expect(formContactLink).toBeInTheDocument();

    fireEvent.click(formContactLink);
    expect(useRouter().push).toHaveBeenCalledWith("/formcontact");
  });
});
