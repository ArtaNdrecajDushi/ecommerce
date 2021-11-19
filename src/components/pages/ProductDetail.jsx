import {useNavigate, useLocation} from "react-router-dom"


const ProductDetail = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {name, image, ingredients} = location.state
   
    return (
        <div>
            <p>{name}</p>
            <img src={image}/>
            <h2>Ingredients</h2>
          {ingredients.map((ingredient) => (
            <p>{ingredient}</p>
          ))}
          <button onClick={() => navigate(-1)}>
        Return
      </button>
        </div>
    )
}

export default ProductDetail
