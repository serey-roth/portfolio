import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.SANITY_CLIENT_PROJECT_ID || 'pbdu9j7b';

export const client = sanityClient({
    projectId,
    dataset: 'production',
    apiVersion: '2022-12-11',
    useCdn: true,
    token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);