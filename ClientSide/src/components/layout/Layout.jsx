import "./layout.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

// this component is to bind the header part to each page

function Layout({ children }) {
  return (
    <div className="layout_container">
      <Header />
      <main className="layout_main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
