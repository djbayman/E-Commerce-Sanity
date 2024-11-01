const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.static("public"));
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { items } = req.body;
  const lineItems = items.map((item) => {
    const img = item.image[0].asset._ref;
    const newImage = img.replace(
      "image-",
      "https://cdn.sanity.io/images/uajjgjxj/production/"
    );

    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [newImage],
        },
        unit_amount: Math.round(item.price * 100),
      },
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    line_items: lineItems,
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ id: session.id });
});

app.listen(4000, () => console.log("Running on port 4000"));
