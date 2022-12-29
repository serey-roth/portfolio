import { client } from './client';

export { default as useCurrentSection } from './hooks/useCurrentSection';

export const getSectionIndex = (section) => {
    switch (section) {
        case 'about': return 1;
        case 'technologies': return 2;
        case 'projects': return 3;
        case 'contact': return 4;
        default: return 0;
    }
};

export const getProjects = async () => {
    const projectQuery = `*[_type == 'project']{ 
        ...,
        "tools":tools[]->{name, icon} 
    }`;
    
    try {
        const projects = await client.fetch(projectQuery);
        return projects;
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export const getFrontEndTech = async () => {
    const techQuery = `*[_type == "tool" && type == "Front-End"]`;
    try {
        return await client.fetch(techQuery);
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export const getBackEndTech = async () => {
    const techQuery = `*[_type == "tool" && type == "Back-End"]`;
    try {
        return await client.fetch(techQuery);
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export const getDatabases = async () => {
    const techQuery = `*[_type == "tool" && type == "Database"]`;
    try {
        return await client.fetch(techQuery);
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export const getOtherTech = async () => {
    const techQuery = `*[_type == "tool" && type == "Other"]`;
    try {
        return await client.fetch(techQuery);
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export const getTechnologies = async () => {
    try {
        const frontEnd = await getFrontEndTech();
        const backEnd = await getBackEndTech();
        const database = await getDatabases();
        const other = await getOtherTech();
        return {
            "Front-End": frontEnd,
            "Back-End": backEnd,
            "Database": database,
            "Other": other
        }
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export const getAbouts = async () => {
    const aboutQuery = `*[_type == "about"]`;
    try {
        const abouts = await client.fetch(aboutQuery);
        return abouts;
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export { client, urlFor } from './client';