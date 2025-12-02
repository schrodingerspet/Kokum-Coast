import { wixClient } from './client';

export async function getProducts() {
    try {
        const response = await wixClient.products.queryProducts().find();
        return response.items;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        throw error;
    }
}

export async function getProductBySlug(slug: string) {
    try {
        const response = await wixClient.products.queryProducts().eq('slug', slug).find();
        return response.items[0];
    } catch (error) {
        console.error(`Failed to fetch product with slug ${slug}:`, error);
        throw error;
    }
}
