import React from "react";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Slider,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cartState = useSelector((state) => state.cartReducer);

  return (
    <>
      <Box bg="crimson" px={4} mb={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            display="flex"
            alignItems="center"
            w="300px"
            justifyContent="space-between"
            onClick={() => {
              navigate("/home");
            }}
          >
            <Image
              borderRadius="full"
              ml="10px"
              boxSize="60px"
              src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=2000"
              alt="rahul gupta"
              w="60px"
              onClick={() => {
                navigate("/home");
              }}
            />

            <h3
              className="app_name"
              fontSize="6xl"
              onClick={() => {
                navigate("/home");
              }}
            >
              {" "}
              Tandoori Fusion
            </h3>
          </Box>
          {/* <Box>
          </Box> */}

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Box
                display="flex"
                alignItems="center"
                w="330px"
                justifyContent="space-between"
              >
                <Button
                  colorScheme="teal"
                  onClick={() => {
                    navigate("/Register");
                  }}
                >
                  {" "}
                  REGISTER{" "}
                </Button>

                <Button
                  colorScheme="teal"
                  onClick={() => {
                    navigate("/Login");
                  }}
                >
                  {" "}
                  LOGIN{" "}
                </Button>

                <Button
                  colorScheme="teal"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  {" "}
                  CART {cartState.cartItems.length}
                </Button>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
