// src/App.jsx
import Hero from "./components/Hero"
import Dock from "./components/Dock"
import Boot from "./components/Boot"
import WindowManager from "./components/WindowManager"

export default function App() {
  return (
    <div className="min-h-screen relative text-white">
      {/* Boot screen */}
      <Boot />

      {/* Hero / desktop wallpaper */}
      <Hero />

      {/* Window Manager → handles About / Projects / Contact windows */}
      <WindowManager />

    </div>
  )
}
