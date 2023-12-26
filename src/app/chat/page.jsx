'use client';

import ChatSidebar from '../components/ChatSidebar';
import { useState } from 'react';

export default function ChatPage() {
  const [messageText, setMessageText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('messageText', messageText);
  };

  return (
    <>
      <div className='grid grid-cols-[260px_auto] h-screen'>
        <ChatSidebar />
        <div className='bg-neutral-800 flex flex-col'>
          <div className='flex-1'>Chat Window</div>
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
