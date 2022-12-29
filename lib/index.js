import { client } from './client';

export { default as useCurrentSection } from './hooks/useCurrentSection';

export const getSectionIndex = (section) => {
    switch (section) {
        case 'about': return 1;
        case 'projects': return 2;
        case 'technologies': return 3;
        case 'contact': return 4;
        default: return 0;
    }
};

export const getHeroes = async () => {
    const aboutQuery = `*[_type == "hero"]`;
    try {
        return client.fetch(aboutQuery);
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export const getProjects = async () => {
    const projectQuery = `*[_type == 'project']{ 
        ...,
        "tools":tools[]->{name, icon} 
    }`;
    
    try {
        return await client.fetch(projectQuery);
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export const getFrameworks = async () => {
    const techQuery = `*[_type == "tool" && type == "Framework"]`;
    try {
        return await client.fetch(techQuery);
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
        const framework = await getFrameworks();

        return {
            "Front-End": frontEnd,
            "Back-End": backEnd,
            "Framework": framework,
            "Database": database,
            "Other": other,
        }
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export const getAbouts = async () => {
    const aboutQuery = `*[_type == "about"]`;
    try {
        return await client.fetch(aboutQuery);
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export { client, urlFor } from './client';