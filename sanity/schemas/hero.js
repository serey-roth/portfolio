export default {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            }
        }, 
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of : [{
                type: 'string',
            }]
        },
        {
            name: 'resume',
            title: 'Resume',
            type: 'file',
        }
    ]
};