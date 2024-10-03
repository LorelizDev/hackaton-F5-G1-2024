import React, { useState } from 'react';
import { FaRobot, FaThumbsUp, FaThumbsDown, FaSync, FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
    const initialBotMessage = { sender: 'bot', text: '¡Hola! Soy SafeBot, ¿En qué te puedo ayudar?' };

    const [messages, setMessages] = useState([initialBotMessage]);
    const [input, setInput] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            const newMessage = { sender: 'user', text: input };
            setMessages([...messages, newMessage]);

            // Aquí añadimos la respuesta empática del bot
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        sender: 'bot',
                        text:
                            "Oh, lamento mucho que te sientas así. A veces el día a día puede ser abrumador y es difícil enfrentarlo solo. Pero estoy aquí para escucharte y ayudarte lo mejor que pueda. No estás solo/a.",
                    },
                ]);
            }, 1000); // Simula un pequeño delay para parecer más "real"

            setInput(''); // Limpiamos el input
        }
    };

    // Función para regenerar respuesta (reiniciar el chat)
    const handleRegenerateResponse = () => {
        setMessages([initialBotMessage]);
    };

    return (
        <div className="max-w-md mx-auto bg-light shadow-lg rounded-lg p-4 md:max-w-2xl">
            <div className="h-64 overflow-y-auto mb-4 bg-light rounded p-4">
                {messages.map((message, index) => (
                    <div key={index}>
                        <div
                            className={`mb-2 p-2 rounded-lg flex items-center ${
                                message.sender === 'bot'
                                    ? 'bg-contrast/40 text-dark font-mainFont justify-start'
                                    : 'bg-medium text-light font-mainFont justify-end'
                            }`}
                            style={{
                                maxWidth: '75%',
                                minWidth: '30%',
                                width: 'auto',
                                marginRight: message.sender === 'bot' ? 'auto' : '0',
                                marginLeft: message.sender === 'user' ? 'auto' : '0',
                            }}
                        >
                            {/* Icono del bot */}
                            {message.sender === 'bot' && (
                                <FaRobot className="text-dark mr-2" size={24} />  
                            )}
                            {message.text}
                        </div>
                        {/* Botones de like y dislike debajo del mensaje del bot */}
                        {message.sender === 'bot' && index !== 0 && (  // Para que los botones no aparezcan en el mensaje inicial
                            <div className="flex justify-start ml-2 mb-2">
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
            <div className="flex justify-center mb-4">
                <button
                    onClick={handleRegenerateResponse}
                    className="flex items-center bg-light p-2 rounded-full border border-gray-300"
                >
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
