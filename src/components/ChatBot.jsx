import React, { useState } from 'react';
import { FaRobot, FaThumbsUp, FaThumbsDown, FaSync, FaPaperPlane } from 'react-icons/fa';


const Chatbot = () => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: '¡Hola! Soy SafeBot, ¿En qué te puedo ayudar?' }
    ]);
    const [input, setInput] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
        const newMessage = { sender: 'user', text: input };
        setMessages([...messages, newMessage]);
        setInput('');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-light shadow-lg rounded-lg p-4 md:max-w-2xl">
            <div className="h-64 overflow-y-auto mb-4 bg-light rounded p-4">
                {messages.map((message, index) => (
                <div
                    key={index}
                    className={`mb-2 p-2 rounded-lg flex items-center ${
                    message.sender === 'bot'
                        ? 'bg-contrast/40 text-dark font-mainFont mr-4 w-3/4 justify-start'
                        : 'bg-medium text-light font-mainFont ml-4 w-3/4 justify-end'
                    }`}
                    >
                    {/* Icono del bot */}
                    {message.sender === 'bot' && (
                        <FaRobot className="text-dark mr-2" />
                    )}
                    {message.text}

                    {/* Botones de like y dislike solo para los mensajes del bot */}
                    {message.sender === 'bot' && (
                        <div className="flex mt-2 ml-4">
                            <button className="bg-light p-2 rounded-full mr-2">
                                <FaThumbsUp className="text-medium" />
                            </button>
                            <button className="bg-light p-2 rounded-full">
                                <FaThumbsDown className="text-dark" />
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
            {/* Botón de regenerar respuesta */}
            <div className="flex justify-center boder mb-4">
                <button className="flex items-center bg-light p-2 rounded-full">
                    <FaSync className="mr-2 text-contrast" />
                    <h4>Regenerar respuesta</h4>
                </button>
            </div>

            {/* Formulario de entrada de mensaje */}
            <form onSubmit={handleSendMessage} className="flex items-center relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 pr-12"
                    placeholder="Escribe un mensaje..."
                />
                {/* Botón de enviar (paperplane) dentro del input */}
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-medium text-light p-2 rounded-full"
                >
                    <FaPaperPlane />
                </button>
            </form>
        </div>
    );
};

export default Chatbot;
