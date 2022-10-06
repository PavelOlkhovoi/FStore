import { Outlet } from "react-router-dom"
import AllProducts from "../pages/AllProducts"
import Categories from "./categories/Categories"
import Menu from "./menu/Menu"
import Skeleton from "./UI/skeleton/Skeleton"

const Layout = () => {
    return (
        <div className="container">
            <Skeleton>
                <Menu />
                <Categories/>
                <AllProducts />
                {/* <Outlet /> */}
            </Skeleton>
        </div>
    )
}

export default Layout