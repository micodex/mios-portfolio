import { useState } from "react";

const TerminalApp = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    'Welcome to miOS Portfolio. Type "help".',
  ]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const newHistory = [...history, `➜ ~ ${input}`];
      if (input === "help")
        newHistory.push("Available commands: about, skills, contact, clear");
      else if (input === "skills")
        newHistory.push("React, TypeScript, MongoDB");
      else if (input === "clear") return setHistory([]);
      else newHistory.push(`command not found: ${input}`);

      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <div
      className="h-full text-green-400 font-mono text-sm p-4 flex flex-col bg-slate-950/80 backdrop-blur-xl"
      onClick={() => document.getElementById("term-input")?.focus()}
    >
      <div className="flex-1 overflow-auto">
        {history.map((line, i) => (
          <div key={i} className="mb-1">
            {line}
          </div>
        ))}
        <div className="flex">
          <span className="mr-2 text-green-300">➜ ~</span>
          <input
            id="term-input"
            className="bg-transparent outline-none flex-1 text-gray-100"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalApp;
