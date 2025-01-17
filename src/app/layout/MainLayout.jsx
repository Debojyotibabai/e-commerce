import Header from "../components/Header";
import Footer from "../components/Footer";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
