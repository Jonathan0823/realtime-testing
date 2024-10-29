"use client";

import { useEffect, useState } from "react";
import { pusherClient } from "./lib/pusher";
import { sendMessage } from "./lib/action";

interface message {
  text: string;
}

export default function Home() {
  const [messages, setMessages] = useState<message[]>([]);
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (text) {
      setText("");
      sendMessage(text);
    }
  };

  useEffect(() => {
    pusherClient.subscribe("chat").bind("message", (data: message) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      pusherClient.unsubscribe("chat");
    };
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col mx-auto bg-slate-300 max-w-3xl pb-5 items-center justify-center">
        <div className="text-black">Chat</div>
        <div className="flex flex-col w-full min-h-96 pb-7">
          {messages ? (
            messages.map((message: message, index) => (
              <div key={index} className="flex flex-row w-full text-black px-4">
                <div className="w-3/4">{message.text}</div>
              </div>
            ))
          ) : (
            <div className="text-black">No messages</div>
          )}
        </div>
        <div className="w-full flex gap-3 px-4 ">
          <input
            type="text"
            className="w-full text-black"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />
          <button
            className="bg-blue-500 text-white px-3 rounded-full"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
