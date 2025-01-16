import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interface";


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // React Fragment to wrap multiple top-level elements.
    <>
      <Header />
      {/* Main content area */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;