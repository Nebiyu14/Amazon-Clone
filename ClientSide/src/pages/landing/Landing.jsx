import "./landing.css";
import Layout from "../../components/layout/Layout";
import Banner from "../../components/banner/Banner";
import Product from "../../components/products/Product";
import SubProducts from "../../components/products/subProducts/SubProducts";
import BackToTop from "../../components/BackToTop/BackToTop";
import Subheader from "../../components/header/Subheader";
function Landing() {
  return (
    <Layout>
      <Subheader />
      <Banner />
      <Product />
      <SubProducts />
      <BackToTop />
    </Layout>
  );
}

export default Landing;
