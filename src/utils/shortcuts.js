// src/utils/shortcuts.js

// Registers global keyboard shortcuts for your portfolio
export function registerShortcuts(actions) {
  // actions = { openAbout, openProjects, openContact, closeActive, clear }
  function handleKeyDown(e) {
    if (e.ctrlKey && e.key.toLowerCase() === "a") {
      e.preventDefault();
      actions.openAbout?.();
    }
    if (e.ctrlKey && e.key.toLowerCase() === "p") {
      e.preventDefault();
      actions.openProjects?.();
    }
    if (e.ctrlKey && e.key.toLowerCase() === "c") {
      e.preventDefault();
      actions.openContact?.();
    }
    if (e.key === "Escape") {
      actions.closeActive?.();
    }
    if (e.ctrlKey && e.key.toLowerCase() === "l") {
      e.preventDefault();
      actions.clear?.();
    }
  }

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}
