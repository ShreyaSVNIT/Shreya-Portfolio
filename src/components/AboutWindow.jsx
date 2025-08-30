import Window from './Window'


export default function AboutWindow({ onClose, onFocus, active }) {
return (
<Window
appId="about"
title="About — Notepad"
icon={"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'><path d='M6 3h12v18H6z'/><path fill='black' d='M8 5h8v14H8z'/><path fill='white' d='M9 8h6v1H9zm0 3h6v1H9zm0 3h6v1H9z'/></svg>"}
onClose={onClose}
onFocus={onFocus}
active={active}
width={520}
height={360}
>
<div className="font-mono text-sm leading-6 text-white/90">
<p>hi, i’m <span className="font-semibold">shreya</span> — a developer who loves clean ui, performant interactions, and building delightful web experiences.</p>
<ul className="mt-4 list-disc pl-5 text-white/80">
<li>frontend: react, vite, tailwind, gsap</li>
<li>backend (learning): django, basics of sql</li>
<li>interests: ai + ui animation + storytelling</li>
</ul>
</div>
</Window>
)
}