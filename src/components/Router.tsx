import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import ReservationsPage from './pages/ReservationsPage';
import ReviewsPage from './pages/ReviewsPage';
import StorePage from './pages/StorePage';

// Error Boundary Component
function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>
        <h2 className="text-4xl font-heading font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "store",
          element: <StorePage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "gallery",
          element: <GalleryPage />,
        },
        {
          path: "reservations",
          element: <ReservationsPage />,
        },
        {
          path: "reviews",
          element: <ReviewsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;