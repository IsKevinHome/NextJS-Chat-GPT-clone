'use client';

import ChatSidebar from '../components/ChatSidebar';
import Message from '../components/Message';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ChatPage() {
  const [incomingMessage, setIncomingMessage] = useState('');
  const [messageText, setMessageText] = useState('');
  const [newChatMessage, setNewChatMessage] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setNewChatMessage((prev) => {
      const newChatMessages = [
        ...prev,
        {
          _id: uuidv4(),
          role: 'user',
          content: messageText,
        },
      ];

      return newChatMessages;
    });

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageText }),
    });

    if (response.ok) {
      const data = await response.json(); // Parse the JSON response
      setIncomingMessage(data.content);
      console.log('Chat response:', data);
      // You can now use 'data' to display the chat response in your UI
    } else {
      console.error('Failed to fetch chat response');
    }
  };

  return (
    <>
      <div className='grid grid-cols-[260px_auto] h-screen'>
        <ChatSidebar />
        <div className='bg-neutral-800 flex flex-col'>
          <div className='flex-1 text-white'>
            {/* NEW MESSAGE */}
            {newChatMessage.map((message) => (
              <Message
                key={message._id}
                role={message.role}
                content={message.content}
              />
            ))}
             <Message
                role={"assistant"}
                content={incomingMessage}
              />
          </div>
          <footer className='bg-neutral-800 p-10'>
            <form onSubmit={handleSubmit}>
              <fieldset className='flex gap-2'>
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className=' outline-1 w-full resize-none rounded-md bg-neutral-700 p-2 text-white focus:border-blue-500 focus:bg-neutral-600 focus:outline focus:outline-blue-500'
                  placeholder='Send a message...'
                ></textarea>
                <button type='submit' className='btn'>
                  Send
                </button>
              </fieldset>
            </form>
          </footer>
        </div>
      </div>
    </>
  );
}
