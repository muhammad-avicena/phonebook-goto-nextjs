'use client'
import { useState } from 'react';
import { DataListContact } from '@/types';
import SearchIcon from '@mui/icons-material/Search';
import { searchContainer, searchInput } from '@/shared/styles';

interface SearchProps {
    data: DataListContact[];
    onChange: (data: DataListContact[]) => void;
}

const Search = ({ data, onChange }: SearchProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        const filteredData = data.filter((item) =>
            item.first_name.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
            item.last_name.toLowerCase().includes(newSearchTerm.toLowerCase())
        );
        onChange(filteredData);
    };

    return (
        <div css={searchContainer}>
            <SearchIcon />
            <input
                css={searchInput}
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Search;
