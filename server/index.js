// sDAE44BkkaE0UBoY

// mongodb+srv://rahulg9838:sDAE44BkkaE0UBoY@cluster0.68iit7k.mongodb.net/test

const express = require('express');
const dotenv = require("dotenv");
const db = require("./db");
// const pizzas_data = require("./models/FoodModel")
const foodRouter = require("./Routes/FoodsRoutes")
const userRouter = require("./Routes/userRoute")

const app = express();
const port = process.env.PORT || 8080;

dotenv.config();
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello g! How are You?");
})

// app.get('/', (req, res) => {
//   pizzas_data.find({}, (error, data) => {
//       if(error) {
//         console.log("Error", error);
//       }
//       else{
//         res.send(data);
//         // console.log(data)
//       }
//    })
//   // console.log(pizzas_data.find());
// })


app.use("/api/foods", foodRouter);

app.use("/api/user", userRouter)


app.listen(port, () => {
    console.log(`Server started running on port ${port}`);
    console.log(`Server is running on http://localhost:${port}`);
});