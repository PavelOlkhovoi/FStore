import { Link } from "react-router-dom"
import PrevCart from "../cart/PrevCart"
import clasess from "../menu/Menu.module.css"

const Menu = () => {
    return (
        <header>
            <nav className={clasess.menu}>
                <Link to='/'>Home</Link>
                <div className={clasess.user}>
                    <Link to='dashboard'>Dashboard</Link>
                    <Link to='login'>Login</Link>
                    <Link to='logout'>Logout</Link>
                </div>
                <PrevCart />
            </nav>
        </header>
    )
}

export default Menu