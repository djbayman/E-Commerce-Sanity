import { createContext, useContext, useState } from "react";
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

  // increament Quantity
  const incQnt = () => {
    setQnt((prevQnt) => prevQnt + 1);
  };

  // decreament Quantity
  const decQnt = () => {
    setQnt((prevQnt) => {
      if (prevQnt - 1 < 1) return 1;
      return prevQnt - 1;
    });
  };

  // Adding item to the cart && to the localStorage
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
    // the product exist update the quantity
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
      // if the product is new then add to the list of product in the cart section
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
        window.localStorage.setItem("products", JSON.stringify(deletedProduct));
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
      } else {
        setCartItems([]);
        window.localStorage.clear();
      }
    }
  };

  // increament the product that exist in the cart
  const incCartProduct = (cartInfo) => {
    setTotalQnt((prevQ) => {
      window.localStorage.setItem("total-qnt", Number(localTotalQnt) + 1);
      return prevQ + 1;
    });
    setTotalPrice((prevP) => {
      window.localStorage.setItem(
        "total-price",
        Number(localTotalPrice) + cartInfo.price
      );
      return prevP + cartInfo.price;
    });

    const updateCartItems = localProducts.map((product) => {
      if (product._id === cartInfo._id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });

    window.localStorage.setItem("products", JSON.stringify(updateCartItems));
  };

  // decreament the product that exict in the cart
  const decCartProduct = (cartInfo) => {
    if (cartInfo.quantity - 1 < 1) {
      cartInfo.quantity = 1;
    } else {
      setTotalQnt((prevQ) => {
        window.localStorage.setItem("total-qnt", Number(localTotalQnt) - 1);
        return prevQ - 1;
      });
      setTotalPrice((prevP) => {
        window.localStorage.setItem(
          "total-price",
          Number(localTotalPrice) - cartInfo.price
        );
        return prevP - cartInfo.price;
      });
      //
      const updateCartItems = localProducts.map((product) => {
        if (product._id === cartInfo._id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

      window.localStorage.setItem("products", JSON.stringify(updateCartItems));
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
        setShowCart,
        incQnt,
        decQnt,
        onAdd,
        showCartSection,
        onRemove,
        incCartProduct,
        decCartProduct,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

export default StateContext;
