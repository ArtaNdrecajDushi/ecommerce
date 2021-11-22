import {useContext} from 'react'
import {Link} from "react-router-dom"
import MyContext from '../context/MyContext';



const LoginForm = () => {
    const context = useContext(MyContext);
    const {form, handleFormInput, handleFormSubmit, auth, USER} = context;
    const {user, password} = form;
    const logged = !auth ? (
        <form>
            <p>Please add your login details here</p>

            <input
            onChange={(e) =>handleFormInput(e)}
            name="user"
            value={user}
            type="text"
            placeholder="UserName"
            />
            <input
            onChange={(e) =>handleFormInput(e)}
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            />
            <button className="login" onClick={(e) => handleFormSubmit(e)}>Login</button>
        </form>
    
    ) : ( 
        <div className="logout-page">
            <h3>Welcome {USER}</h3>
            <p>You can take a look at our <Link to="/about" className="link-color">About</Link> page</p>
            <p>Or you can visit directly our <Link to="/products" className="link-color">Products</Link></p>
        <button className="logout-button" onClick={(e) => handleFormSubmit(e)}>Logout</button>
        </div>
    )
    return (
       logged
    );

}

export default LoginForm
