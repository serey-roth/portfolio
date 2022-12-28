import { useRef, useState, useEffect } from 'react';
import { getSectionIndex } from '..';

const useCurrentSection = () => {
    const headerRef = useRef();
    const aboutRef = useRef();
    const technologiesRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef();

    const [currentSection, setCurrentSection] = useState(0);

    const handleObserver = (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            const sectionIndex = getSectionIndex(entry.target.id);
            setCurrentSection(sectionIndex);
        }
    }

    const onChangeCurrentSection = (sectionIndex) => {
        setCurrentSection(sectionIndex);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        });

        if (headerRef.current) observer.observe(headerRef.current);
        if (aboutRef.current) observer.observe(aboutRef.current);
        if (technologiesRef.current) observer.observe(technologiesRef.current);
        if (projectsRef.current) observer.observe(projectsRef.current);
        if (contactRef.current) observer.observe(contactRef.current);

        return () => {
            if (headerRef.current) observer.unobserve(headerRef.current);
            if (aboutRef.current) observer.unobserve(aboutRef.current);
            if (technologiesRef.current) observer.unobserve(technologiesRef.current);
            if (projectsRef.current) observer.unobserve(projectsRef.current);
            if (contactRef.current) observer.unobserve(contactRef.current);
        }
    }, [handleObserver])

    return {
        currentSection,
        headerRef,
        technologiesRef, 
        aboutRef,
        projectsRef,
        contactRef,
        onChangeCurrentSection,
    }
}

export default useCurrentSection;