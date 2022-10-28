const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')("sk_test_51LxAiSSC1mnFgiwb9x9W8WDeV65IxU9fzYcwIlJDqPu63ltDkvOSYF40NS21qehwd46Cimttwbv7JqI86Pu0q5kt00kJLSsOGK");

router.post("/placeorder", async(req, res) => {
    const { token, cartTotal, cartItems, currentUser } = req.body;

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const payment = await stripe.charges.create({
            amount: cartTotal * 100,
            currency: "inr",
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey : uuidv4()
        })

        if(payment){
            res.send("Payment Done!")
        }
        else{
            res.send("Payment Failed!")
        }
    } 
    catch (error) {
        return res.status(400).json({ message : error })
    }
})

module.exports = router;