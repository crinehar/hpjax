import Header from "./Header";
import Footer from "./Footer";
import TopBanner from "./TopBanner";
import CartDrawer from "./CartDrawer";
import CookieBanner from "./CookieBanner";
import { CartProvider } from "@/lib/cart-context";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <CartProvider>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <TopBanner />
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <CookieBanner />
    </CartProvider>
  );
}
