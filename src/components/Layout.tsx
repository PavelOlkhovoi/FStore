import { Outlet } from "react-router-dom"
import Categories from "./categories/Categories"
import Menu from "./menu/Menu"
import Skeleton from "./UI/skeleton/Skeleton"

const Layout = () => {
    return (
        <div className="container">
            <Skeleton>
                <Menu />
                <Categories/>
                <Outlet />
            </Skeleton>

        </div>
    )
}

export default Layout