// src/App.js
import React from 'react';
import { Link } from 'react-router-dom'
import Chatbot from '../components/ChatBot';

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <h1 className="text-2xl font-bold mb-4">Navbar</h1>
            <Chatbot />
        </header>
        </div>
    );
}

export default App;
