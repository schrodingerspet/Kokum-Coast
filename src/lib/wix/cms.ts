import { wixClient } from './client';

export async function getPageBySlug(slug: string) {
    // This is a placeholder. You'll need to define your collection ID or use a specific Wix app.
    // For now, we assume a 'pages' collection exists.
    try {
        const response = await wixClient.items.query('pages').eq('slug', slug).find();
        return response.items[0];
    } catch (error) {
        console.error(`Failed to fetch page with slug ${slug}:`, error);
        return null;
    }
}

export async function getAllPages() {
    try {
        const response = await wixClient.items.query('pages').find();
        return response.items;
    } catch (error) {
        console.error('Failed to fetch pages:', error);
        return [];
    }
}
