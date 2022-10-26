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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../REDUX/Actions/userActions";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const userState = useSelector((state) => state.loginUserReducer);

  const currentUser = userState.currentUser;
  // console.log(currentUser);

  const cartState = useSelector((state) => state.cartReducer);
  const handleLogout = () => {
    dispatch(logoutUser());
  }

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
                w="auto"
                gap="20px"
                justifyContent="space-between"
              >
                <Button
                  colorScheme="teal"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  {" "}
                  CART {cartState.cartItems.length}
                </Button>

                {currentUser ? (
                  <>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        {currentUser.name}
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Orders</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </MenuList>
                    </Menu>
                  </>
                ) : (
                  <>
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
                  </>
                )}

              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
