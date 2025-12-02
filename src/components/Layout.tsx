import { Outlet } from '@/lib/router-dom';
import { MiniCartContextProvider } from './MiniCartContextProvider';
import { NavigationProvider } from './NavigationContext';
import { ScrollToTop } from '@/lib/scroll-to-top';
import { Toaster } from '@/components/ui/toaster';
import Footer from './Footer';

export function Layout() {
  return (
    <MiniCartContextProvider>
      <ScrollToTop />
      <NavigationProvider>
        {/* Position relative helps framer-motion scroll features compute offsets */}
        <div
          id="app-shell"
          style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
        >
          <div id="route-content" style={{ flex: 1 }}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </NavigationProvider>
      <Toaster />
    </MiniCartContextProvider>
  );
}