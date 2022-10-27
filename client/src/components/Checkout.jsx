import { Button } from '@chakra-ui/react';
import React from 'react'
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout"
import { placeOrderActions } from '../REDUX/Actions/orderActions';

const Checkout = ({ cartTotal }) => {

  const dispatch = useDispatch();  

  const tokenHandler = (token) => {
    console.log(token);
    dispatch(placeOrderActions(token , cartTotal));
  } 

  return (
    <>
       <div style={{ width:"100%", display: "flex", justifyContent: "center"}}>

          <StripeCheckout 
          amount={cartTotal * 100}
          shippingAddress
          token={tokenHandler}
          stripeKey="pk_test_51LxAiSSC1mnFgiwbB08wyhGvMncj0kMSBRsYGjlchvZbkBnqflmJzEfqtbpOnxG8dKy1V7nooBIyjiiIeWpW700p007dTHIHLJ"
          currency="INR"
          >

             <Button mt='-120px' colorScheme='purple'> PAY NOW </Button>

          </StripeCheckout>  

       </div>
    </>
  )
}

export default Checkout;