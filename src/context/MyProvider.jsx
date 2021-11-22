import {useState} from "react"
import MyContext from "./MyContext"

const MyProvider = (props) => {
    const USER=process.env.REACT_APP_USER
    const PASSWORD=process.env.REACT_APP_PASSWORD

    const [form, setForm] = useState({user:"", password:""})
    const [auth, setAuth] = useState(true)

    const [cartItems, setCartItems] = useState([])
                  
    const [category, setCategory] = useState (["Wine", "Pasta"])
    

    const handleFormInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        form.user === USER && form.password === PASSWORD ? setAuth(true) : setAuth(false)
        setForm({user:"", password:""})
    }
    //add to cart
    const addToCart = (item) => {  // we receive the item from the products
        const found = cartItems.find((element) => element.id === item.id)// checking if the item is already in the cart
    
        if (found === undefined) {
            setCartItems([...cartItems, {...item, quantity:1 }]) //if not create it and add another property to our data file {object} (quantity 1 (at least 1)), keep whatever was there and add the whole new thing in our array
        } else {
            const index = cartItems.indexOf(found) // otherwise I find it
            found.quantity +=1; //add one to it
    
            let copyCartItems = [...cartItems]; // make a copy of it
            copyCartItems.splice(index, 1, found); //we have to remove the original object from our array, using slice as it cannot be affected directly 
            setCartItems(copyCartItems)// replace whatever is in the cartItems state, with our copy
            
            
        }
    }
     //removing
    const removePasta = (pastaData) => { 
        const found = cartItems.find((item) => item.id === pastaData.id)
    
        const index = cartItems.indexOf(found);
    
        let copyCartItems = [...cartItems]
        copyCartItems.splice(index, 1)
    
        setCartItems(copyCartItems)
    }

    //reduce
    const reduceQuantity = (pastaData) => {
        const found = cartItems.find((item) =>item.id === pastaData.id)
        const index = cartItems.indexOf(found)
        found.quantity -=1 // taking away
    
        let copyCartItems = [...cartItems]
        found.quantity >= 1 // we want to replace the removed object if the quantity is greater or equal to 1, else just remove the item
        ? copyCartItems.splice(index, 1, found)
        :copyCartItems.splice(index, 1);
        setCartItems(copyCartItems)
    
    }

    //grand total
    const grandTotal = (cartItems) => {
        return cartItems.reduce((acc, item) =>  acc + (item.price * item.quantity), 0) // reducer grabs everything and accumulates it
    }
    
    //total per product
    const totalPerProduct = (cartItems) => {
        const cartTotalPerProduct = [...cartItems]
        return cartTotalPerProduct.map((pastaData) => pastaData.quantity * pastaData.price) //we map through and keep adding them
    }


    return (
        <MyContext.Provider value={{handleFormSubmit, handleFormInput, form,auth, addToCart, removePasta, totalPerProduct, grandTotal, reduceQuantity, cartItems, category, setCategory, USER, setCartItems}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider