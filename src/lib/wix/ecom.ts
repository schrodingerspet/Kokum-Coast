import { wixClient } from './client';

export async function getCart() {
    try {
        return await wixClient.currentCart.getCurrentCart();
    } catch (error) {
        // If no cart exists, it might throw or return null depending on the SDK version.
        // Usually we want to return null or create a new one.
        return null;
    }
}

export async function addToCart(productId: string, quantity: number = 1, options?: Record<string, any>) {
    try {
        const result = await wixClient.currentCart.addToCurrentCart({
            lineItems: [
                {
                    catalogReference: {
                        appId: '215238eb-22a5-4c36-9e7b-e7c08025e04e', // Wix Stores App ID
                        catalogItemId: productId,
                        options: options ? { options } : undefined,
                    },
                    quantity,
                },
            ],
        });
        return result.cart;
    } catch (error) {
        console.error('Failed to add to cart:', error);
        throw error;
    }
}
