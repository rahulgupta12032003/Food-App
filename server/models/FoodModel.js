const mongoose = require("mongoose");

const FoodSchema =  mongoose.Schema(
{
  name: {
    type: String,
    required: true,
  },
  variants: [],
  prices: [],
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

}, {timestamps : true});

const FoodModel = mongoose.model("foods" , FoodSchema);   
// Here Foods is the collection Name you can see it in by doing BrowseCollection in MONGODB ATLAS or MONGO DB Compass .
module.exports = FoodModel;
