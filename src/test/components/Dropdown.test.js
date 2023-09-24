import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DropdownComponents from "../../components/Dropdown";

describe("Dropdown Component", () => {
  it("should render the Dropdown component", () => {
    const itemsPerPage = 5;
    const setItemsPerPage = jest.fn();
    const setPage = jest.fn();

    const { getByLabelText, getByDisplayValue } = render(
      <DropdownComponents
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        setPage={setPage}
      />
    );

    expect(getByLabelText("Show items :")).toBeInTheDocument();

    const dropdown = getByDisplayValue(itemsPerPage.toString());
    expect(dropdown).toBeInTheDocument();

    fireEvent.change(dropdown, { target: { value: "10" } });
    expect(setItemsPerPage).toHaveBeenCalledWith(10);
    expect(setPage).toHaveBeenCalledWith(0);
  });
});
