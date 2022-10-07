import Categories from "../components/categories/Categories"
import Skeleton from "../components/UI/skeleton/Skeleton"
import AllProducts from "./AllProducts"
import Menu from "../components/menu/Menu"

const Home = () => {
    return (
        <div className="container">
            <Skeleton>
                <Categories/>
                <AllProducts />
            </Skeleton>
        </div>
    )
}

export default Home