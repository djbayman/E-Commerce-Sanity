import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const Context = createContext();

const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQnt, setTotalQnt] = useState(0);
  const [qnt, setQnt] = useState(1);

  const localProducts =
    JSON.parse(window.localStorage.getItem("products")) || [];
  const localTotalPrice = window.localStorage.getItem("total-price") || 0;
  const localTotalQnt = window.localStorage.getItem("total-qnt") || 0;

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
    const checkProductInCart = localProducts.find(
      (item) => item._id === product._id
    );
    setTotalPrice((prevTotalPrice) => {
      window.localStorage.setItem(
        "total-price",
        Number(localTotalPrice) + product.price * quantity
      );
      return prevTotalPrice + product.price * quantity;
    });
    setTotalQnt((prevTotalQnt) => {
      window.localStorage.setItem(
        "total-qnt",
        Number(localTotalQnt) + quantity
      );
      return prevTotalQnt + quantity;
    });
    //
    if (checkProductInCart) {
      const updateCartItems = localProducts.map((cartProduct) => {
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
  // remove item from the cart
  const onRemove = (product) => {
    if (product) {
      if (localProducts.length > 1) {
        const deletedProduct = localProducts.filter(
          (item) => item._id !== product._id
        );
        setCartItems(deletedProduct);
        setTotalQnt((prevQnt) => {
          window.localStorage.setItem(
            "total-qnt",
            Number(localTotalQnt) - product.quantity
          );
          return prevQnt - product.quantity;
        });
        setTotalPrice((prevP) => {
          window.localStorage.setItem(
            "total-price",
            Number(localTotalPrice) - product.price * product.quantity
          );
          return prevP - product.price * product.quantity;
        });
        window.localStorage.setItem("products", JSON.stringify(deletedProduct));
      } else {
        setCartItems([]);
        window.localStorage.clear();
      }
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
        setQnt,
        setTotalPrice,
        setTotalQnt,
        setCartItems,
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
