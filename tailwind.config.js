/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
theme: {
extend: {
colors: {
desk: {
bg: "#0b0f14",
pane: "#111827",
glass: "rgba(255, 255, 255, 0.08)",
line: "rgba(255,255,255,0.12)",
},
},
boxShadow: {
glass: "0 10px 30px rgba(0,0,0,0.35)",
},
backdropBlur: {
xs: '2px',
},
},
},
plugins: [],
};