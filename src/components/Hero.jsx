import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


export default function Hero() {
    const root = useRef(null);
    const bg1 = useRef(null);
    const bg2 = useRef(null);


    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(bg1.current, {
                y: 80,
                ease: 'none',
                scrollTrigger: {
                    trigger: root.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
            gsap.to(bg2.current, {
                y: -120,
                ease: 'none',
                scrollTrigger: {
                    trigger: root.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
            gsap.from('.hero-title', {
                opacity: 0,
                y: 30,
                duration: 1.2,
                ease: 'power3.out',
            });
            gsap.from('.hero-sub', {
                opacity: 0,
                y: 20,
                delay: 0.2,
                duration: 1.2,
                ease: 'power3.out',
            });
        }, root);
        return () => ctx.revert();
    }, []);


    return (
        <section
            ref={root}
            className="relative h-screen overflow-hidden flex items-center justify-center text-white"
        >
            {/* starfield layer */}
            <div
                ref={bg1}
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12) 0 2px, transparent 2px), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.10) 0 2px, transparent 2px)',
                    backgroundSize: '160px 160px, 220px 220px',
                    backgroundRepeat: 'repeat',
                    opacity: 0.35,
                }}
            />


            {/* gradient grid layer */}
            <div
                ref={bg2}
                aria-hidden
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(1200px 600px at 50% 70%, rgba(0,108,255,0.25), transparent), radial-gradient(900px 500px at 10% 20%, rgba(255,0,153,0.18), transparent)',
                }}
            />


            <div className="relative z-10 text-center">
                <h1 className="hero-title text-5xl md:text-7xl font-extrabold tracking-tight">
                    Shreya Ashar
                </h1>
                <p className="hero-sub mt-4 text-lg md:text-2xl text-white/80">
                    Software Developer · Frontend · AI
                </p>
            </div>
        </section>
    );
}