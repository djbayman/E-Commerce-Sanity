import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const Context = createContext();

const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQnt, setTotalQnt] = useState(0);
  const [qnt, setQnt] = useState(1);

  // show cart item when click on The icon
  const showCartSection = () => {
    setShowCart(!showCart);
  };
  // inc Quantity
  const incQnt = () => {
    setQnt((prevQnt) => prevQnt + 1);
  };
  // dec Quantity
  const decQnt = () => {
    setQnt((prevQnt) => {
      if (prevQnt - 1 < 1) return 1;
      return prevQnt - 1;
    });
  };
  // Adding item to the cart
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice((prevTotalPrice) => {
      window.localStorage.setItem(
        "total-price",
        prevTotalPrice + product.price * quantity
      );
      return prevTotalPrice + product.price * quantity;
    });
    setTotalQnt((prevTotalQnt) => {
      window.localStorage.setItem("total-qnt", prevTotalQnt + quantity);
      return prevTotalQnt + quantity;
    });

    if (checkProductInCart) {
      const updateCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        } else {
          return cartProduct;
        }
      });

      setCartItems(updateCartItems);
      window.localStorage.setItem("products", JSON.stringify(updateCartItems));
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, product]);
      window.localStorage.setItem(
        "products",
        JSON.stringify([...cartItems, product])
      );
    }
    toast.success(`${quantity} ${product.name} has add to the cart`);
  };

  const onRemove = (product) => {
    if (product) {
      const deletedProduct = cartItems.filter(
        (item) => item._id !== product._id
      );
      setCartItems(deletedProduct);
      setTotalQnt((prevQnt) => {
        if (cartItems.length > 1) {
          window.localStorage.setItem("total-qnt", prevQnt - product.quantity);
        } else {
          window.localStorage.removeItem("total-qnt");
        }
        return prevQnt - product.quantity;
      });
      setTotalPrice((prevP) => {
        if (cartItems.length > 1) {
          window.localStorage.setItem(
            "total-price",
            prevP - product.price * product.quantity
          );
        } else {
          window.localStorage.removeItem("total-price");
        }
        return prevP - product.price * product.quantity;
      });
      window.localStorage.setItem("products", JSON.stringify(deletedProduct));
    }
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQnt,
        qnt,
        setTotalPrice,
        setTotalQnt,
        incQnt,
        decQnt,
        onAdd,
        showCartSection,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

export default StateContext;
