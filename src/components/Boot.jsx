// src/components/Boot.jsx
import { useEffect, useState } from "react";
import Window from "./Window";

export default function Boot({ onFinish }) {
  const bootLines = [
    "Initializing system...",
    "Loading portfolio modules...",
    "Setting environment variables...",
    "Starting terminal interface...",
    "Welcome, Shreya 👩‍💻",
  ];

  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLines((prev) => [...prev, bootLines[i]]);
      i++;
      if (i === bootLines.length) {
        clearInterval(interval);
        setDone(true);
        setTimeout(onFinish, 1200); // move to main app after a pause
      }
    }, 700);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <Window title="Boot Sequence" active={true}>
      <div className="bg-black text-green-400 font-mono p-4 h-full overflow-auto">
        {lines.map((line, idx) => (
          <div key={idx} className="whitespace-pre">
            {line}
          </div>
        ))}
        {!done && <div className="animate-pulse">_</div>}
      </div>
    </Window>
  );
}
