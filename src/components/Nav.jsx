import { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import MyContext from "../context/MyContext"



const Nav = () => {
    const context = useContext(MyContext);
    const { auth, cartItems, setCategory } = context
    const [isActive, setIsActive] = useState(false)
    const categories = ["Wine", "Pasta"]
    return (
        <nav>
            <ul>
                <NavLink
                    to="/"
                    style={({ isActive }) => {
                        return { color: isActive && "green" };
                    }}>
                    <li className="home">Home</li>
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => {
                        return { color: isActive && "green" };
                    }}>
                    <li>About</li>
                </NavLink>
                {auth && (
                    <div className="dropdown">
                        <button
                            onClick={() => setIsActive(!isActive)}
                            className="btn btn-dark dropdown-toggle"
                            type="button"
                        >
                            Choose category
                    </button>
                        <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
                            {categories.map((element, index) => {
                                return (
<div key={index}>
                                    <Link to="/products"
                                        onClick={() => {
                                            setCategory(element)
                                            setIsActive(false)

                                        }}
                                        href="#"
                                        className="dropdown-item"
                                    >
                                        {element}
                                    </Link>
                                    </div>
                                );

                            })}
                        </div>
                    </div>
                )}
                {auth && (
                    <>
                        <NavLink
                            to="/cart"
                            style={({ isActive }) => {
                                return { color: isActive && "green" }
                            }}>
                            <li>Cart <span>{cartItems.length}</span></li>
                        </NavLink>

                        <NavLink
                            to="/checkout"
                            style={({ isActive }) => {
                                return { color: isActive && "green" }
                            }}>
                            <li>Checkout</li>
                        </NavLink>

                    </>
                )
                }
            </ul>
        </nav>
    )
}

export default Nav
