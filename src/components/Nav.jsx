import {useContext, useEffect, useState} from 'react'
import {NavLink, useNavigate, Link} from 'react-router-dom'
import MyContext from "../context/MyContext"



const Nav = () => {
    const context = useContext(MyContext);
    const {auth, cartItems, setCategory, category} = context
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)
    const categories = ["Wine", "Pasta"]
    function test(e) {
        let value = e.value
        console.log(value)
    }
    return (
        <nav>
            <ul>
                <NavLink
                to="/"
                style={({ isActive }) => {
                    return {color:isActive && "green"};
                }}>
                    <li className="home">Home</li>
                </NavLink>
                <NavLink
                to="/about"
                style={({ isActive }) => {
                    return {color:isActive && "green"};
                }}>
                    <li>About</li>
                </NavLink>
                {auth && (
                    <div className="dropdown">
                    <button
                        onClick={() => setIsActive(!isActive)}
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                    >
                        Choose category
                    </button>
                    <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
                        {categories.map((element) => {
                            return (
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
                            );
                        })}
                    </div>
                </div>
                    // <select className="select" name="" id="" onChange={(e) => {
                    //     setCategory(e.target.value)
                        
                    //     navigate("/products")}}>
                    //    <option value="">Products</option>
                    //     <option value="Pasta">Pasta</option>
                    //     <option value="Wine">Wine</option>
                    // </select>
                    // <NavLink
                    // to="/products"
                    // style={({ isActive }) => {
                    //     return { color: isActive && "green"}
                    // }}>
                    //     <li>Products</li>
                    // </NavLink>

                )}
                {auth && (
                    <NavLink
                    to="/cart"
                    style={({ isActive }) => {
                        return { color: isActive && "green"}
                    }}>
                        <li>Cart <span>{cartItems.length}</span></li>
                    </NavLink>
                )}
            </ul>
        </nav>
    )
}

export default Nav
