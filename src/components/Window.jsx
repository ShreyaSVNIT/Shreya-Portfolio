import useDraggable from '../hooks/useDraggable';

export default function Window({
    appId,
    title,
    icon,
    children,
    initial = { x: 120, y: 140 },
    onClose,
    onFocus,
    active,
    width = 520,
    height = 380,
}) {
    const { ref, pos } = useDraggable(initial);

    return (
        <div
            ref={ref}
            onMouseDown={onFocus}
            style={{
                left: pos.x,
                top: pos.y,
                width,
                height,
                zIndex: active ? 40 : 30,
            }}
            className={`fixed rounded-xl border border-white/10 shadow-glass bg-desk-glass backdrop-blur-sm text-white select-none ${active ? 'ring-1 ring-white/20' : ''}`}
        >
            <div
                data-drag-handle
                className="h-10 px-3 flex items-center gap-2 border-b border-white/10 bg-white/5 rounded-t-xl"
            >
                <img src={icon} alt="icon" className="h-4 w-4" />
                <span className="text-sm/none font-medium truncate">{title}</span>
                <div className="ml-auto flex gap-2">
                    <button
                        onClick={onClose}
                        className="h-6 w-6 rounded-full bg-red-500/80 hover:bg-red-500"
                        aria-label="Close"
                    />
                    <div className="h-6 w-6 rounded-full bg-yellow-400/70" />
                    <div className="h-6 w-6 rounded-full bg-green-500/70" />
                </div>
            </div>
            <div className="p-4 h-[calc(100%-2.5rem)] overflow-auto">
                {children}
            </div>
        </div>
    );
}