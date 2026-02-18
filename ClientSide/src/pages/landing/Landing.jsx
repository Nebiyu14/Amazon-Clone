import "./landing.css";
import Layout from "../../components/layout/Layout";
import Banner from "../../components/banner/Banner";
import Product from "../../components/products/Product";
import SubProducts from "../../components/products/subProducts/SubProducts";
import BackToTop from "../../components/BackToTop/BackToTop";
function Landing() {
  return (
    <Layout>
      <Banner />
      <Product />
      <SubProducts />
      <BackToTop/>
    </Layout>
  );
}

export default Landing;
