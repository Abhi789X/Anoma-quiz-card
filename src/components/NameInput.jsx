import { useState } from "react";

const NameInput = ({ onStart }) => {
  const [name, setName] = useState("");

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Enter your name to begin</h1>
      <input
        className="bg-black text-white p-2 rounded border border-red-700"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name..."
      />
      <button
        className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded"
        onClick={() => name && onStart(name)}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default NameInput;
