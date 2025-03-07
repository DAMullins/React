import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Replace with your backend URL
        axios.get('127.0.0.1:3001/api/items')
            .then(response => {
                setItems(response.name);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}: {item.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;