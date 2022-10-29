import Categories from "../components/categories/Categories"
import Footer from "../components/UI/footer/Footer"
import Skeleton from "../components/UI/skeleton/Skeleton"
import ProductsWithPagination from "./ProductsWithPagination"

const Home = () => {
    return (
        <div className="container">
            <Skeleton>
                <Categories/>
                <ProductsWithPagination />
                <Footer />
            </Skeleton>
        </div>
    )
}

export default Home