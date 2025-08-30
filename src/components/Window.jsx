import useDraggable from '../hooks/useDraggable';

export default function Window({
    appId,
    title,
    icon,
    children,
    initial = { x: 120, y: 140 },
    onClose,
    onFocus,
    onMinimize,
    onMaximize,
    active,
    minimized,
    maximized,
    width = 520,
    height = 380,
}) {
    const { ref, pos } = useDraggable(initial);

    // Hide window if minimized
    if (minimized) return null;

    return (
        <div
            ref={ref}
            onMouseDown={onFocus}
            style={{
                left: maximized ? 0 : pos.x,
                top: maximized ? 0 : pos.y,
                width: maximized ? '100vw' : width,
                height: maximized ? '100vh' : height,
                zIndex: active ? 40 : 30,
            }}
            className={`fixed rounded-xl border border-white/10 shadow-glass bg-desk-glass backdrop-blur-sm text-white select-none ${active ? 'ring-1 ring-white/20' : ''}`}
        >
            <div
                data-drag-handle
                className="h-10 px-3 flex items-center gap-2 border-b border-white/10 bg-white/5 rounded-t-xl"
            >
                <div className="flex items-center gap-2 mr-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500"
                        aria-label="Close"
                    />
                    <button
                        type="button"
                        onClick={onMinimize}
                        className="h-3 w-3 rounded-full bg-yellow-400/70"
                        aria-label="Minimize"
                    />
                    <button
                        type="button"
                        onClick={onMaximize}
                        className="h-3 w-3 rounded-full bg-green-500/70"
                        aria-label="Maximize"
                    />
                </div>
                <img src={icon} alt="icon" className="h-4 w-4" />
                <span className="text-sm/none font-medium truncate">{title}</span>
            </div>
            <div className="p-4 h-[calc(100%-2.5rem)] overflow-auto">
                {children}
            </div>
        </div>
    );
}