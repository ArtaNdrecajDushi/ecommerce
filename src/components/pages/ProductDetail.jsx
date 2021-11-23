import { useNavigate, useLocation } from "react-router-dom"
import MyContext from "../../context/MyContext"
import { useContext } from "react"


const ProductDetail = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { name, image, ingredients, price } = location.state
  const context = useContext(MyContext)
  const { addToCart } = context
  console.log(location.state)

  return (
    <main>
      <div className="background-image details-page">
        <div>
          <p>{name}</p>
          <img className="product-detail-image" src={image} alt="" />
        </div>
        <aside className="details-aside">
          <p>€{price}</p>
          <h2>Ingredients</h2>
          {ingredients.map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))}
        </aside>
      </div>
      <button className="details-button2" onClick={() => addToCart(location.state)}>Add to cart</button>
      <button className="details-button" onClick={() => navigate(-1)}>
        Return
      </button>
    </main>

  )
}

export default ProductDetail
