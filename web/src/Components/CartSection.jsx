import { useStateContext } from "../Context/StateContext";
import CartItem from "./CartItem";
import { loadStripe } from "@stripe/stripe-js";

const CartSection = () => {
  const { showCartSection } = useStateContext();

  const localProducts = JSON.parse(window.localStorage.getItem("products"));
  const localTotalPrice = window.localStorage.getItem("total-price");
  const localTotalQnt = window.localStorage.getItem("total-qnt");

  // click on the pay button and it will direct you to the stripe session
  const handleCheckout = async () => {
    // public stripe key
    const stripe = await loadStripe(
      `pk_test_51Q6HbuP0AY2wiLcKI5jwLwuxH37FopYYKeqhCo4q5wX7d1z1yRgg97Xd3yd7a8xuV74KJffKwCiqf1sfmMfergOg007wamTMS1`
    );
    const response = await fetch(
      "http://localhost:4000/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: localProducts }),
      }
    );

    const session = await response.json();
    stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div style={{ transition: "all 5s" }}>
      <div
        className={` bg-regal-blue bottom-0 md:top-0 right-0 md:h-screen w-full z-30 transition-transform fixed px-4 overflow-auto ${
          showCartSection ? "md:w-2/5 h-1/2" : "md:w-0"
        }`}
      >
        <h1 className=" font-semibold mt-6 flex items-center gap-3">
          <span
            onClick={showCartSection}
            className="cursor-pointer -rotate-90 md:rotate-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 font-semibold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          Your Cart{" "}
          <span className="text-base text-red-600">{`(${
            localTotalQnt || 0
          })`}</span>
        </h1>
        <div className="cart-pr-cont flex flex-col justify-between ">
          <div>
            {localProducts &&
              localProducts.map((cartInfo, ind) => (
                <CartItem key={ind} cartInfo={cartInfo} />
              ))}
          </div>
          <div>
            <div className="flex items-center justify-between text-xl font-semibold text-[#088178]">
              <h2>Subtotal:</h2>
              <span>${localTotalPrice || 0}</span>
            </div>
            <button
              className="block w-1/2 mx-auto my-3 py-3 bg-red-600 text-white font-semibold rounded-md"
              onClick={handleCheckout}
            >
              Pay With Stripe
            </button>
          </div>
        </div>
      </div>
      <div
        className={`overlay  bg-black/65 top-0 left-0 w-full md:h-screen z-30 fixed ${
          showCartSection ? "md:w-3/5 h-1/2" : "w-0"
        }`}
        onClick={showCartSection}
      ></div>
    </div>
  );
};

export default CartSection;
