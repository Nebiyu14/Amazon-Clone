import "./layout.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

// this component is to bind the header part to each page

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
