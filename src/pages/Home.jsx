// import {userParams} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import products from '../json/books_reviews.json';

function Home() {
    const title = "Welcome to the bookstore";

    return (
        <div>
        <div className='container mx-auto main-layout min-h-screen px-5'>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header 
                title={title}
                slogan="The best place to find your favorite books."
            />
            <ProductList products={products} className="layout-content" />
            </div>
            <Footer className="layout-footer" />
        </div>
    );
}

export default Home;