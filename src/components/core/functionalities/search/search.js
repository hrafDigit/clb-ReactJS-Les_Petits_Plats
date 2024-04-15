import React from 'react';
import SearchHook from '../../../../hooks/searchHook';

const MyComponent = () => {
    // Define the function to handle the search
    const handleSearch = (filteredData) => {
        // Handle the filtered data here (e.g., update state, display results)
        console.log('Filtered data:', filteredData);
    };

    return (
        <div>
            <h1>Search Recipes</h1>
            {/* Pass the onSearch function as a prop to the Search component */}
            <SearchHook onSearch={handleSearch} />
        </div>
    );
};

export default MyComponent;
