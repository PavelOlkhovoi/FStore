import Categories from "../components/categories/Categories"
import Skeleton from "../components/UI/skeleton/Skeleton"
import AllProducts from "./AllProducts"
import Menu from "../components/menu/Menu"
import ProductsWithPagination from "./ProductsWithPagination"

const Home = () => {
    return (
        <div className="container">
            <Skeleton>
                <Categories/>
                <ProductsWithPagination />
            </Skeleton>
        </div>
    )
}

export default Home