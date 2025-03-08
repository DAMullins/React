import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QueryForm from './QueryForm';

function App() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState('SELECT * FROM test');
    useEffect(() => {


        // Replace with your backend URL
        axios.post('https://melanierealestate.com/api.php', {sql : query})
            .then(response => {
                setItems(response.name);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <QueryForm />
        </div>
    );
}

export default App;