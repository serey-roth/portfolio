export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'name', 
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description', 
            title: 'Description',
            type: 'string',
        },
        {
            name: 'startDate', 
            title: 'Start Date',
            type: 'date',
        },
        {
            name: 'endDate', 
            title: 'End Date',
            type: 'date',
        },
        {
            name: 'tools',
            title: 'Tools',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{
                    type: 'tool'
                }]
            }]
        },
        {
            name: 'images', 
            title: 'Images',
            type: 'array', 
            of: [{
                type: 'image',
                options: {
                    hotspot: true,
                }
            }]
        }, 
        {
            name: 'link_demo',
            title: 'Demo',
            type: 'string'
        },
        {
            name: 'link_source',
            title: 'Source',
            type: 'string'
        }
    ]
};