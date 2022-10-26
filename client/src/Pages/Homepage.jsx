import React, { useEffect, useState } from "react";
import Error from "../components/Error";
import Foods from "../components/Foods";
import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
// import PizzaData from "../FoodsData";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoods } from "../REDUX/Actions/FoodsActions";
import Loading from "../components/Loading";


const Homepage = () => {
  const dispatch = useDispatch();
  const ReducerState = useSelector((state) => state.foodsReducers);
  const { foods , loading, error } = ReducerState;

  useEffect(() => {
    dispatch(getAllFoods());
  }, []);

  return (
    <>
      <Box>
          <Grid templateColumns="repeat(3, 1fr)" gap={30} p="20px" rounded="lg">
            {loading ? (
              <Loading />
            ) : error ? (
              <Error  error='something went wrong' />
            ) : (
              foods.map((elem) => {
                return (
                  <GridItem boxShadow="dark-lg" p="30px" key={elem._id}>
                    <Foods foods={elem} />
                  </GridItem>
                );
              })
            )}
          </Grid>
      </Box>
    </>
  );
};

export default Homepage;
