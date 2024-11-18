"use client"; // Ensure this directive is at the top

import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'; // Updated import path for emoji-mart CSS

export default function Home() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmojiSelect = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji.native);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Head>
        <title>Ubora CBC</title>
      </Head>

      {/* Navbar */}
      <header className="flex items-center justify-between w-full px-8 py-4 border-b border-gray-200">
        {/* Logo */}
        <Image src="/ubora-logo.png" alt="Ubora CBC Logo" width={50} height={50} />

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li className="text-black cursor-pointer">Home</li>
            <li className="text-black cursor-pointer">Practicals</li>
            <li className="text-pink-500 cursor-pointer">Q & A</li> {/* Active link */}
            <li className="text-black cursor-pointer">Assignment</li>
          </ul>
        </nav>
      </header>

      {/* Chat Input Box */}
      <div className="fixed bottom-5 flex items-center w-11/12 max-w-xl px-4 py-2 border rounded-lg border-pink-500 mx-auto">
        {/* Emoji Picker Button */}
        <div className="relative">
          <button
            onClick={() => setShowEmojiPicker((prev) => !prev)}
            className="mr-2 text-gray-500 text-2xl focus:outline-none"
          >
            😊
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-12 left-0">
              <Picker onSelect={handleEmojiSelect} theme="light" />
            </div>
          )}
        </div>

        {/* Attachment Icon */}
        <button className="mr-2 text-gray-500 text-2xl focus:outline-none">
          📎
        </button>

        {/* Text Input */}
        <input
          type="text"
          placeholder="Type Message Here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 px-4 py-2 text-gray-700 placeholder-gray-500 bg-transparent border-none outline-none"
        />

        {/* Send Button */}
        <button className="px-4 py-2 font-semibold text-white bg-pink-500 rounded-md hover:bg-pink-600">
          Send
        </button>
      </div>
    </div>
  );
}
