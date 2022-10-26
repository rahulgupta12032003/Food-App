import React from "react";
import { Box, Button, Flex, Text, WrapItem} from "@chakra-ui/react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux"
import { AiOutlinePlusSquare, AiOutlineMinusSquare, AiTwotoneDelete } from "react-icons/ai"
import { addToCartActions, deleteFromCart } from "../REDUX/Actions/CartActions"
import Checkout from "../components/Checkout";

const CartPage = () => {

  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems ;
  const dispatch = useDispatch();

  const cartTotal = cartItems.reduce(( x , elem ) =>  {
    return ( x + elem.price)
  },0)

  // const cartTotal = cartItems.reduce(( x , elem ) =>  x + elem.price ,0)

  return (
    <div>
      <Flex>
        <Box w="100%" m="40px">
          <h1 className="fontMont carthead" >
            CART
          </h1>
          <Flex direction="left">
             <Box className="fontMont cartContainer">
                 {
                   cartItems.map((elem) => {
                     return (
                      <Box>
                          <Flex>
                            <Box key={elem._id} m="30px" w="70%">
                              
                                <h1>{elem.name}</h1>
                                {
                                  elem.variant ? <h1 className="cartVariant">Variant : [{elem.variant}]</h1> : ""
                                }

                                <h1 className="cart_price_size">Price : {elem.quantity} * {elem.prices[0][elem.variant]} = &nbsp; ₹{elem.price}</h1>

                                <Flex align="center">
                                    <h2 className="cart_qty_inc" 
                                      onClick={() => {dispatch(addToCartActions(elem , elem.variant , elem.quantity + 1 ))}} 
                                    >
                                        <AiOutlinePlusSquare />
                                    </h2>
                                    <h1 className="cart_qty">{elem.quantity}</h1>
                                    <h2 className="cart_qty_dec"
                                        onClick={() => {dispatch(addToCartActions(elem , elem.variant , elem.quantity-1 ))}} 
                                    >
                                        <AiOutlineMinusSquare m='5' />
                                    </h2>
                                </Flex>

                            </Box>
                          
                            <Flex >
                                    <img src={elem.image} alt="foods_image" className="cart_img"/>
                                    <h2 
                                      className="cart_product_delete"
                                      onClick={() => {dispatch(deleteFromCart(elem))}}
                                    >
                                      <AiTwotoneDelete />
                                    </h2>
                            </Flex>
                            
                        </Flex>
                        <hr />
                      </Box>
                     )
                   })
                 }
             </Box>
          </Flex>
        </Box>
        <Box w="70%">
            <Text fontSize="4xl" ml="80px" mt="10" className="fontMont"> Cart Total : ₹{cartTotal} </Text>
            <WrapItem>
              <Button ml="35%" mt="20px" colorScheme='purple'> <Checkout cartTotal={cartTotal} /> </Button>
            </WrapItem>
        </Box> 
      </Flex>
    </div>
  );
};

export default CartPage;
