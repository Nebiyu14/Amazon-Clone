import "./layout.css";
import Header from "../header/Header";

// this component is to bind the header part to each page

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
