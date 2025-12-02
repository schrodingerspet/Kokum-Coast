import { createClient, OAuthStrategy } from '@wix/sdk';
import { products, collections } from '@wix/stores';
import { currentCart } from '@wix/ecom';
import { members } from '@wix/members';
import { items } from '@wix/data';

export const wixClient = createClient({
    modules: {
        products,
        collections,
        currentCart,
        members,
        items,
    },
    auth: OAuthStrategy({
        clientId: import.meta.env.PUBLIC_WIX_CLIENT_ID || 'my-client-id',
        tokens: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('wix_tokens') || '{}') : {},
    }),
});
