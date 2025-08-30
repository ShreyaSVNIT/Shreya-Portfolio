import { useRef, useState, useEffect } from 'react';

export default function useDraggable(initial = { x: 80, y: 80 }) {
    const ref = useRef(null);
    const [pos, setPos] = useState(initial);
    const [dragging, setDragging] = useState(false);
    const offset = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const onPointerDown = (e) => {
            const target = e.target;
            // Allow drag only when mousedown on header area [data-drag-handle]
            const handle = target.closest('[data-drag-handle]');
            if (!handle) return;
            setDragging(true);
            offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
            el.setPointerCapture(e.pointerId);
        };

        const onPointerMove = (e) => {
            if (!dragging) return;
            setPos({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
        };

        const onPointerUp = (e) => {
            setDragging(false);
            try {
                el.releasePointerCapture(e.pointerId);
            } catch {}
        };

        el.addEventListener('pointerdown', onPointerDown);
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);

        return () => {
            el.removeEventListener('pointerdown', onPointerDown);
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
        };
    }, [dragging, pos]);

    return { ref, pos, setPos, dragging };
}