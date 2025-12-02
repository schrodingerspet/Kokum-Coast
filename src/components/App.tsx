import { useEffect } from 'react';
import { createBrowserRouter, createMemoryRouter, RouterProvider } from '@/lib/router-dom';
import { Layout } from './Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import ReservationsPage from './pages/ReservationsPage';
import ReviewsPage from './pages/ReviewsPage';
import StorePage from './pages/StorePage';

// Error Boundary Component (Inline for now, should be moved)
function ErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
            <div className="text-center px-4">
                <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">404</h1>
                <h2 className="text-4xl font-heading font-bold text-gray-800 mb-4">Page Not Found</h2>
                <a href="/" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-full">Go Back Home</a>
            </div>
        </div>
    );
}

const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "store", element: <StorePage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "gallery", element: <GalleryPage /> },
            { path: "reservations", element: <ReservationsPage /> },
            { path: "reviews", element: <ReviewsPage /> },
        ],
    },
];

interface AppProps {
    initialData?: any;
    url?: string;
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ initialData, url }: AppProps) {
    // Hydrate stores or context with initialData if needed
    useEffect(() => {
        if (initialData) {
            console.log('Hydrating with:', initialData);
            // TODO: Initialize Zustand stores here
        }
    }, [initialData]);

    const router = import.meta.env.SSR
        ? createMemoryRouter(routes, { initialEntries: [url || '/'] })
        : createBrowserRouter(routes);

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}
