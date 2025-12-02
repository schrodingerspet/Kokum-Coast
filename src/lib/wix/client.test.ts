import { describe, it, expect, vi } from 'vitest';
import { wixClient } from './client';

vi.mock('@wix/sdk', () => ({
    createClient: vi.fn(() => ({
        modules: {},
        auth: {},
    })),
    OAuthStrategy: vi.fn(),
}));

describe('wixClient', () => {
    it('should be initialized', () => {
        expect(wixClient).toBeDefined();
    });
});
