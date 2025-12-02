import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from './ContactForm';
import { describe, it, expect, vi } from 'vitest';

describe('ContactForm', () => {
    it('renders correctly', () => {
        render(<ContactForm />);
        expect(screen.getByText('Send us a Message')).toBeInTheDocument();
    });

    it('validates input', async () => {
        render(<ContactForm />);

        fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

        await waitFor(() => {
            expect(screen.getByText('Name must be at least 2 characters.')).toBeInTheDocument();
            expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
            expect(screen.getByText('Message must be at least 10 characters.')).toBeInTheDocument();
        });
    });
});
