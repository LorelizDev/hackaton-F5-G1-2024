// src/App.js
import React from 'react';
import { Link } from 'react-router-dom'
import Chatbot from '../components/ChatBot';

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <Chatbot />
        </header>
        </div>
    );
}

export default App;
