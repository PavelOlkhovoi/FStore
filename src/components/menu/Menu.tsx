import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='login'>Login</Link>
            </nav>
        </header>
    )
}

export default Menu