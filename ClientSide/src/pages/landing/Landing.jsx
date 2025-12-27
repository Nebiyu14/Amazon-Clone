import "./landing.css";
import Layout from "../../components/layout/Layout";
import Banner from "../../components/banner/Banner";
import Product from "../../components/products/Product";
import SubProducts from "../../components/products/subProducts/SubProducts";
function Landing() {
  return (
    <Layout>
      <Banner />
      <Product />
      <SubProducts />
    </Layout>
  );
}

export default Landing;
