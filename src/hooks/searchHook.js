import React, { useState, useEffect } from 'react';

const SearchHook = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.PUBLIC_URL + '/recipes.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     onSearch(query);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        const filteredData = data.filter(recipe =>
            recipe.name.toLowerCase().includes(query.toLowerCase())
        );
        onSearch(filteredData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchHook;
