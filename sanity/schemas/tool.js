export default {
    name: 'tool', 
    title: 'Tool', 
    type: 'document',
    fields: [
        {
            name: 'name', 
            title: 'Name',
            type: 'string',
        },
        {
            name: 'type', 
            title: 'Type',
            type: 'string',
        },
        {
            name: 'icon', 
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ]
};