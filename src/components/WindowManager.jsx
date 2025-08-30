import { useState } from "react"
import ProjectsWindow from "./ProjectsWindow"
import AboutWindow from "./AboutWindow"
import ContactWindow from "./ContactWindow"
import Dock from "./Dock"

export default function WindowManager() {
  const [windows, setWindows] = useState([])
  const [active, setActive] = useState(null)

  function openWindow(appId) {
    setWindows((prev) => {
      // If already open, just bring to front
      if (prev.find((w) => w.id === appId)) {
        return prev.map((w) =>
          w.id === appId
            ? { ...w, minimized: false }
            : w
        )
      }
      // Otherwise add new
      return [...prev, { id: appId, minimized: false, maximized: false }]
    })
    setActive(appId)
  }

  function closeWindow(appId) {
    setWindows((prev) => prev.filter((w) => w.id !== appId))
    if (active === appId) setActive(null)
  }

  return (
    <>
      {windows.map((w) => {
        if (w.id === "projects") {
          return (
            <ProjectsWindow
              key="projects"
              onClose={() => closeWindow("projects")}
              onFocus={() => setActive("projects")}
              active={active === "projects"}
            />
          )
        }
        if (w.id === "about") {
          return (
            <AboutWindow
              key="about"
              onClose={() => closeWindow("about")}
              onFocus={() => setActive("about")}
              active={active === "about"}
            />
          )
        }
        if (w.id === "contact") {
          return (
            <ContactWindow
              key="contact"
              onClose={() => closeWindow("contact")}
              onFocus={() => setActive("contact")}
              active={active === "contact"}
            />
          )
        }
        return null
      })}

      {/* Dock at bottom */}
      <Dock onOpen={openWindow} active={active} />
    </>
  )
}
