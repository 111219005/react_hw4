import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import _ from "lodash";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Products from "../json/books_reviews.json";

export default function Category(){
  const {categoryName} = useParams();
  const _products = Products.filter(
    x=>x?.category.toUpperCase() === categoryName.toUpperCase()
  );
  const title = _.startCase(categoryName);

  return(
    <div>
      <div className="container mx-auto main-layout min-h-screen">
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Header
            title={title}
            slogan="The best place to find your favorite products"
        />
        <ProductList products={_products} className="layout-content" />
        </div>
      <Footer className="layout-footer" />
    </div>
  );
}