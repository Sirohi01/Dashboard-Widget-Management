import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/dashboardStore';

const SearchBar = () => {
    const searchTerm = useSelector(state => state.dashboard.searchTerm);
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    return (
        <div className="search-bar">
        <input
            type="text"
            placeholder="Search widgets..."
            value={searchTerm}
            onChange={handleSearch}
        />
        </div>
    );
};

export default SearchBar;