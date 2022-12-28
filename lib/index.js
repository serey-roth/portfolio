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

export const getTechnologies = async () => {
    const toolQuery = `*[_type == "tool"]`;
    try {
        const technologies = await client.fetch(toolQuery);
        return technologies;
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