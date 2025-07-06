"use client";
import React, { useState, useRef } from "react";

const SIMULATED_QUESTION = "how much is a bag of coffee?";
const SIMULATED_RESPONSE = (
  <div className="flex items-start gap-3">
    <img src="/clare-response.png" alt="Clare" className="w-7 h-7 mt-1 rounded-full" />
    <div className="flex-1">
      <div className="text-base text-gray-800 whitespace-pre-line">
        Awesome. A bag currently goes for $70.00. How many would you like to buy? If you are unsure, you can explore our marketplace to see what we have in stock. Click <a href="#" className="text-green-700 underline">here</a> to be redirected to the store
        <br /><br />I will be waiting to assist you.
      </div>
    </div>
  </div>
);

const TYPING_INDICATOR = (
  <div className="flex items-start gap-3">
    <img src="/clare-response.png" alt="Clare" className="w-7 h-7 mt-1 rounded-full opacity-60" />
    <div className="flex-1">
      <div className="text-base text-gray-400 italic">Clare is typing...</div>
    </div>
  </div>
);

type Message = { type: "user" | "bot"; content: React.ReactNode; typing?: boolean };

export default function ClareChatDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  function handleSend() {
    if (!input.trim()) return;
    const isSimulated = input.trim().toLowerCase() === SIMULATED_QUESTION;
    setMessages((msgs) => [
      ...msgs,
      { type: "user", content: input },
      ...(isSimulated
        ? [{ type: "bot" as const, content: TYPING_INDICATOR, typing: true }]
        : []),
    ]);
    setInput("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    if (isSimulated) {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
      typingTimeout.current = setTimeout(() => {
        setMessages((msgs) => {
          // Remove the last typing indicator and add the real response
          const lastTypingIndex = msgs.findIndex((m) => m.typing);
          if (lastTypingIndex !== -1) {
            return [
              ...msgs.slice(0, lastTypingIndex),
              { type: "bot", content: SIMULATED_RESPONSE },
            ];
          }
          return msgs;
        });
      }, 1200);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-md z-[100] bg-[#f5f7fc] shadow-2xl transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
      style={{ borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white rounded-tl-xl" style={{ borderTopLeftRadius: 16 }}>
        <div className="flex items-center gap-2">
          <img src="/winwin-circle.svg" alt="Clare Logo" className="h-8 w-8" />
          <span className="font-semibold text-lg text-gray-700">Clare</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-1 rounded hover:bg-gray-100 cursor-pointer"><span className="sr-only">Menu</span><svg width="20" height="20" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg></button>
          <button className="p-1 rounded hover:bg-gray-100 cursor-pointer"><span className="sr-only">Expand</span><svg width="20" height="20" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg></button>
          <button className="p-1 rounded hover:bg-gray-100 cursor-pointer" onClick={onClose}><span className="sr-only">Close</span><svg width="20" height="20" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6"/></svg></button>
        </div>
      </div>
      {/* Chat Area */}
      <div className="flex flex-col h-[calc(100%-64px)] justify-end">
        <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2">
          {/* Render messages */}
          {messages.map((msg, i) =>
            msg.type === "user" ? (
              <div key={i} className="mb-3 flex justify-end">
                <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl shadow-sm max-w-[80%] text-base font-medium">
                  {msg.content}
                </div>
              </div>
            ) : (
              <div key={i} className="mb-3 flex">
                <div className="border border-green-200 rounded-xl p-4 max-w-[90%] bg-white" style={{ borderColor: '#b6e2b6', borderWidth: 1, borderStyle: 'solid', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.03)' }}>
                  {msg.content}
                </div>
              </div>
            )
          )}
        </div>
        {/* Chat input area */}
        <div className="p-4">
          <div className="flex flex-col gap-4">
            <button className="self-start px-4 py-1 rounded-full text-xs text-gray-500 bg-white border border-gray-300 font-medium mb-2 cursor-default" disabled>What I can do</button>
            <ul className="mb-2 ml-1 space-y-1 text-gray-600 text-base font-normal">
              <li>Check current prices</li>
              <li>Best selling product on our site</li>
              <li>Help navigating the site</li>
              <li>Assist with orders</li>
            </ul>
            <div className="flex items-end gap-3 mt-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 px-4 py-3 rounded-2xl bg-[#e9edfa] text-gray-700 placeholder-gray-500 focus:outline-none shadow-sm text-lg font-medium"
                placeholder="What can I help you with?"
                style={{ minHeight: 48, border: 'none' }}
              />
              <button
                className="flex items-center justify-center bg-white shadow-sm hover:bg-gray-100 transition-colors duration-150 rounded-full w-12 h-12 cursor-pointer"
                style={{ minWidth: 48, minHeight: 48 }}
                tabIndex={0}
                type="button"
                onClick={handleSend}
              >
                <img src="/send-icon.svg" alt="Send" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 