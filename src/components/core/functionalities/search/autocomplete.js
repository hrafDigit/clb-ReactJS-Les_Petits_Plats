import React, { useState, useEffect } from 'react';
import axios from 'axios';
// /* --------------------- */

// /* --------------------- */

// /* ±±±±±±±±±±±±±±±±±±±±± */
const Autocomplete = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/todos?_limit=50`
                );
                setSearchResults(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data. Please try again.');
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        const filteredResults = searchResults.filter((result) =>
            result.title.includes(query)
        );
        setSearchResults(filteredResults);
    };

    return (
        <div>
            {/* Search input */}
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
            />
            {/* Display search results */}
            {loading ? (
                <p>Pending...</p>
            ) : (
                <ul>
                    {searchResults.map((result) => (
                        <li key={result.id}>{result.title}</li>
                    ))}
                </ul>
            )}
            {/* Display error */}
            {error && <p>{error}</p>}
        </div>
    );
};
export default Autocomplete;