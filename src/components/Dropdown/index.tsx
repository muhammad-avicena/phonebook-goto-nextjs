'use client'
import { containerDropdown, dropdownInput } from "@/shared/styles";

interface DropdownProps {
    itemsPerPage: number;
    setItemsPerPage: (value: number) => void;
    setPage: (value: number) => void;
}

const Dropdown = ({ itemsPerPage, setItemsPerPage, setPage }: DropdownProps) => {
    return (
        <div css={containerDropdown}>
            <label htmlFor="itemsPerPage" style={{ marginTop: 3 }}>Show items :</label>
            <select
                css={dropdownInput}
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setPage(0);
                }}
            >
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
        </div>
    );
}

export default Dropdown;
