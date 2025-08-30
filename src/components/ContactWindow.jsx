// src/components/ContactWindow.jsx
import { useState } from "react";
import Window from "./Window";

export default function ContactWindow({ onClose, onFocus, active }) {
  const [history, setHistory] = useState([
    "shreya@portfolio:~$ contact",
    "Here are some ways to reach me 👇",
  ]);

  return (
    <Window
      title="Contact"
      onClose={onClose}
      onFocus={onFocus}
      active={active}
    >
      <div className="bg-black text-green-400 font-mono p-4 h-full overflow-auto">
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}

        <div className="mt-4">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:shreyaashar123@gmail.com"
              className="underline text-blue-400"
            >
              shreyaashar123@gmail.com
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/ShreyaSVNIT"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-400"
            >
              github.com/ShreyaSVNIT
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-400"
            >
              linkedin.com/in/yourlinkedin
            </a>
          </p>
        </div>
      </div>
    </Window>
  );
}
