import { ICONS } from './Icons'


export default function Dock({ onOpen, active }) {
const items = [
{ id: 'about', label: 'About', icon: ICONS.about },
{ id: 'projects', label: 'Projects', icon: ICONS.terminal },
{ id: 'contact', label: 'Contact', icon: ICONS.mail },
]


return (
<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
<div className="flex gap-4 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-glass">
{items.map((it) => (
<button
key={it.id}
onClick={() => onOpen(it.id)}
className={`flex flex-col items-center gap-1 group`}>
<img src={it.icon} className={`h-8 w-8 transition-transform group-hover:scale-110 ${active === it.id ? 'animate-pulse' : ''}`} />
<span className="text-[11px] text-white/80">{it.label}</span>
</button>
))}
</div>
</div>
)
}