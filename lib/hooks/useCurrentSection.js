import { useRef, useState, useEffect } from 'react';
import { getSectionIndex } from '..';

const useCurrentSection = () => {
    const heroRef = useRef();
    const aboutRef = useRef();
    const technologiesRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef();

    const [currentSection, setCurrentSection] = useState(0);

    const handleObserver = (entries) => {
        entries.map(entry => {
            if (entry.isIntersecting) {
                const sectionIndex = getSectionIndex(entry.target.id);
                setCurrentSection(sectionIndex);
            }
        })
    }

    const onChangeCurrentSection = (sectionIndex) => {
        setCurrentSection(sectionIndex);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '0px',
            threshold: [0.15, 0.25, 0.5, 0.75, 1],
        });

        if (heroRef.current) observer.observe(heroRef.current);
        if (aboutRef.current) observer.observe(aboutRef.current);
        if (projectsRef.current) observer.observe(projectsRef.current);
        if (technologiesRef.current) observer.observe(technologiesRef.current);
        if (contactRef.current) observer.observe(contactRef.current);

        return () => {
            if (heroRef.current) observer.unobserve(heroRef.current);
            if (aboutRef.current) observer.unobserve(aboutRef.current);
            if (projectsRef.current) observer.unobserve(projectsRef.current);
            if (technologiesRef.current) observer.unobserve(technologiesRef.current);
            if (contactRef.current) observer.unobserve(contactRef.current);
        }
    }, [handleObserver])

    return {
        currentSection,
        heroRef,
        technologiesRef, 
        aboutRef,
        projectsRef,
        contactRef,
        onChangeCurrentSection,
    }
}

export default useCurrentSection;