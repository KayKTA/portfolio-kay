'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import Hero from '@/components/sections/Hero'
import Education from '@/components/sections/Education'
import Experience from '@/components/sections/Experiences'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Projects from '@/components/sections/Projects'
import SlideNav from '@/components/layout/SlideNav'

export default function HomePage() {
    const [index, setIndex] = useState(0);

    const slides = useMemo(
        () => [
            <Hero
                key="hero"
                onContactClick={() => setIndex(5)} // Index of Contact slide
            />,
            <Skills key="skills" />,
            <Projects key="projects" />,
            <Experience key="xp" />,
            <Education key="edu" />,
            <Contact
                key="contact"
                email="kaniba.keita93@gmail.com"
                linkedin="https://www.linkedin.com/in/kaniba-keita"
                github="https://github.com/KayKTA"
            />,
        ],
        []
    )

    useEffect(() => {
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prevOverflow;
        }
    }, [])

    const goNext = useCallback(
        () => setIndex((i) => Math.min(i + 1, slides.length - 1)),
        [slides.length]
    )
    const goPrev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [goNext, goPrev]);

    return (
        <SlideNav
            slides={slides}
            onIndexChange={setIndex}
            currentIndex={index}
            goNext={goNext}
            goPrev={goPrev}
        />
    )
}
