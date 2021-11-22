import { useContext, useEffect } from "react";
import MyContext from "../../context/MyContext";
import { pastaData } from "../../data/pasta-data";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  
  const context = useContext(MyContext);
  const { auth, addToCart, category } = context;
  const navigate = useNavigate();
  useEffect(() => {
    !auth && navigate("/", { replace: true });
  }, [auth, navigate]);

  
  const pastaItems = pastaData.map((item) => {
   
    if (category === "Pasta" && item.category === "Pasta") {
      return (
        <li className="pasta-structure" key={item.id}>
          <p>{item.name}</p>
          <Link to="/product-detail" state={item}>
            <img className="product-image" src={item.image} alt="pasta" />
          </Link>
          <p>{item.price}$</p>
          <button onClick={() => addToCart(item)}>Add to cart</button>
        </li>
      );
    } else if (category === "Wine"&& item.category === "Wine") {
      return (
        <li className="wine-structure" key={item.id}>
          {item.name}

          <p>{item.price}$</p>
          <p>{item.about}</p>
          <button className="wine-add-button" onClick={() => addToCart(item)}>Add to cart</button>
        </li>
      );
    } return null
  });
  return (
    <section className="background-image products-background-image">
      <ul className="products ">{pastaItems}</ul>
      </section>
    

  );

};
export default Products;
