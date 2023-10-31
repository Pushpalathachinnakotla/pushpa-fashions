import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";

let Product = () => {
  let [posts, setPosts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    const updatedPrice =
      totalPrice + product.price * (product.quantity || 1);
    setTotalPrice(updatedPrice);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    const updatedPrice = totalPrice - product.price * (product.quantity || 1);
    setTotalPrice(updatedPrice);
  };

  const incrementQuantity = (product) => {
    product.quantity = (product.quantity || 0) + 1;
    const updatedPrice = totalPrice + product.price;
    setTotalPrice(updatedPrice);
    setCart([...cart]);
  };

  const decrementQuantity = (product) => {
    if (product.quantity > 1) {
      product.quantity -= 1;
      const updatedPrice = totalPrice - product.price;
      setTotalPrice(updatedPrice);
      setCart([...cart]);
    } else {
      removeFromCart(product);
    }
  };

  return (
    <>
      {posts.map((item, index) => (
        <div className="cont" key={item.id}>
          <div className="cart">
            <p>
              <span>Id:</span><span className="para1"> {item.id}</span>
            </p>
            <p>
              <span>Title:</span> {item.title}
            </p>
            <p>
              <span>Price:</span> {item.price}
            </p>
            <p>
              <span>Description:</span> {item.description}
            </p>
            <p>
              <span>Category:</span> {item.category}
            </p>
            <div className="im">
              <div>
                <img src={item.image} alt={item.title} />
              </div>

              <div className="add-to-cart">
                <button onClick={() => decrementQuantity(item)}>
                  <i className="fa-solid fa-minus"></i>
                </button>
                <button onClick={() => addToCart(item)}>AddCart</button>
                <button onClick={() => incrementQuantity(item)}>
                  <i className="fa-solid fa-plus"></i>
                </button>
               
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="cartsumm">
        <h2>Cart Summary</h2>
        {cart.map((item) => (
          <div className="cont1" key={item.id}>
            <p>
              <span>Title:</span> {item.title}
            </p>
            <p>
              <span>Price:</span> {item.price}
            </p>
            <p>
              <span>Quantity:</span> {item.quantity || 1}
            </p>
            <p>
              <span>Total Price:</span> {item.price * (item.quantity || 1)}
            </p>
            <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
          </div>
        ))}
        <div className="total-price">
          <p>
            <span>Total Quantity:</span>{cart.reduce((total, item) => total + (item.quantity || 1), 0)}
          </p>
          <p>
            <span>Overall Price:</span> {totalPrice}
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
