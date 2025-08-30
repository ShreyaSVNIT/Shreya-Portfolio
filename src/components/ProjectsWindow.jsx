import Window from "./Window";

const projects = [
  { name: "Kala Sangam Website", url: "https://github.com/shreya/kala-sangam" },
  { name: "Flight Booking System", url: "https://github.com/shreya/flight-booking" },
  { name: "Crafts Archive", url: "https://github.com/shreya/crafts-archive" },
];

export default function ProjectsWindow({ onClose, onFocus, active, minimized, maximized, onMinimize, onMaximize }) {
  return (
    <Window
      appId="projects"
      title="Projects"
      icon="/icons/folder.svg"
      onClose={onClose}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      active={active}
      minimized={minimized}
      maximized={maximized}
      width={480}
      height={360}
    >
      <div className="p-4 grid grid-cols-3 gap-4">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 p-2 rounded-lg hover:bg-white/10 transition"
          >
            <img src="/icons/file.svg" alt="" className="h-10 w-10" />
            <span className="text-sm text-white truncate">{p.name}</span>
          </a>
        ))}
      </div>
    </Window>
  );
}