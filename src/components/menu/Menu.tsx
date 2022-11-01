import { NavLink } from "react-router-dom"
import PrevCart from "../cart/PrevCart"
import clasess from "../menu/Menu.module.css"

const Menu = () => {
    let activeStyle = {
        color: 'red',
      };
    return (
        <header>
            <nav className={clasess.menu}>
                <NavLink to='/' style={({ isActive }) => isActive ? activeStyle : {}}>Home</NavLink>
                <NavLink to='dashboard' style={({ isActive }) => isActive ? activeStyle : {}} className="menu-dashboard">Dashboard</NavLink>
                <PrevCart />
                <div className={clasess.user}>
                    <NavLink to='login' style={({ isActive }) => isActive ? activeStyle : {}}>Login</NavLink>
                    <NavLink to='logout' style={({ isActive }) => isActive ? activeStyle : {}}>Logout</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Menu