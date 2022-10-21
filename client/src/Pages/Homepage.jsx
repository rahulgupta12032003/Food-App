import React, { useEffect, useState } from "react";
import Foods from "../components/Foods";
import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
// import PizzaData from "../FoodsData";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoods } from "../REDUX/Actions/FoodsActions";


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
              <Flex>
                <Image
                  src="https://www.raceentry.com/img/map/loading.gif"
                  alt="Loading..."
                  ml="110%"
                  w="1000px"
                  h="500px"
                />
              </Flex>
            ) : error ? (
              <Flex>
                <Image
                  src="https://cdn.dribbble.com/users/5796108/screenshots/15140157/media/eae04c6f807e3a7bc79e58cd879df7d5.gif"
                  alt="Oops! Something went wrong"
                  ml="100%"
                />
              </Flex>
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
