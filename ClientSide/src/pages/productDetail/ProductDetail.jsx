import "./productDetail.css";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { base__URL } from "../result/Result";
import useLoading from "../../hooks/useLoading";
import Loader from "../../components/spinner/Loader";
import ProductDetailPage from "./productPage/ProductDetailPage";
function ProductDetail() {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const { isLoading, startLoading, stopLoading } = useLoading();
  useEffect(() => {
    async function fetchSingleProduct() {
      startLoading();
      try {
        const response = await fetch(`${base__URL}/products/${productId}`);
        const data = await response.json();
        setSingleProduct(data);
      } catch (error) {
        console.log("Error fetching detail of single item", error);
      } finally {
        stopLoading();
      }
    }
    fetchSingleProduct();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <Layout>
      <div>
        <ProductDetailPage individualItem={singleProduct} />
      </div>
    </Layout>
  );
}

export default ProductDetail;
