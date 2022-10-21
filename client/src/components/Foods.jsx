import React, { useState } from "react";
import {Button, useDisclosure } from "@chakra-ui/react";
import { Select, Box } from "@chakra-ui/react";
import "./Foods.css";
import { nanoid } from "nanoid";
import PopUpModal from "./PopUpModal";
import { useSelector, useDispatch } from "react-redux";
import { addToCartActions } from "../REDUX/Actions/CartActions";

const Foods = ({ foods, open }) => {
  const [variant, setVariant] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const handleAddToCart = () => 
  {
    dispatch(addToCartActions(foods, variant, quantity));
  };

  return (
      <Box>
        <Box key={nanoid()}>
          <div onClick={onOpen}>
            <img
              src={foods.image}
              alt="food app"
              width="80%"
              style={{ marginLeft: "10%" }}
            />
            <h1 className="fontMont">{foods.name}</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p className="fontMont pStag">Variant</p>
              <Select
                className="rgStag"
                value={variant}
                onChange={(e) => {
                  setVariant(e.target.value);
                }}
              >
                {foods.variants.map((elem, i) => {
                  return <option value={elem}>{elem}</option>;
                })}
              </Select>
            </div>
            <div>
              <p className="fontMont pStag">Quantity</p>
              <Select
                className="rgStag"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
                {[...Array(10).keys()].map((elem, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </Select>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <p className="fontMont pStag">Price : &nbsp;</p>
              <p className="fontMont pStag2">
                ₹{foods.prices[0][variant] * quantity}
              </p>
            </div>
            <div>
              <Button colorScheme="red" mt={5} w={180} onClick={handleAddToCart}>
                ADD TO CART
              </Button>
            </div>
          </div>
        </Box>

        <PopUpModal foods={foods} onClose={onClose} isOpen={isOpen} />
      </Box>
  );
};

export default Foods;
