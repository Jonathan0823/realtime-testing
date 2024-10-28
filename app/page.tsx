"use client";

export default function Home() {
  const messages = [
    { id: 1, text: "Hello, World!" },
    { id: 2, text: "Hello, World!" },
    { id: 3, text: "Hello, World!" },
    { id: 4, text: "Hello, World!" },
    { id: 5, text: "Hello, World!" },
    { id: 6, text: "Hello, World!" },
    { id: 7, text: "Hello, World!" },
    { id: 8, text: "Hello, World!" },
    { id: 9, text: "Hello, World!" },
    { id: 10, text: "Hello, World!" },
    { id: 11, text: "Hello, World!" },
    { id: 12, text: "Hello, World!" },
    { id: 13, text: "Hello, World!" },
    { id: 14, text: "Hello, World!" },
    { id: 15, text: "Hello, World!" },
    { id: 16, text: "Hello, World!" },
    { id: 17, text: "Hello, World!" },
    { id: 18, text: "Hello, World!" },
    { id: 19, text: "Hello, World!" },
    { id: 20, text: "Hello, World!" },
    { id: 21, text: "Hello, World!" },
    { id: 22, text: "Hello, World!" },
    { id: 23, text: "Hello, World!" },
    { id: 24, text: "Hello, World!" },
    { id: 25, text: "Hello, World!" },
    { id: 26, text: "Hello, World!" },
    { id: 27, text: "Hello, World!" },
    { id: 28, text: "Hello, World!" },
    { id: 29, text: "Hello, World!" },
    { id: 30, text: "Hello, World!" },
    { id: 31, text: "Hello, World!" },
    { id: 32, text: "Hello, World!" },
    { id: 33, text: "Hello, World!" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col mx-auto bg-slate-300 max-w-3xl items-center justify-center">
        <div className="text-black">Chat</div>
        <div className="flex flex-col w-full min-h-96 pb-7">
          {messages ? (messages.map((message) => (
            <div key={message.id} className="flex flex-row w-full text-black">
              <div className="w-1/4">{message.id}</div>
              <div className="w-3/4">{message.text}</div>
            </div>
          ))) : (
            <div className="text-black">No messages</div>
          )}
          
        </div>
        <div className="w-full flex gap-3 px-4 ">
        <input type="text"className="w-full text-black" />
        <button className="bg-blue-500 text-white px-3 rounded-full">Send</button>
        </div>
      </div>
    </div>
  );
}
