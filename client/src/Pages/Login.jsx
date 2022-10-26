import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Text,
    Link
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { loginUser } from '../REDUX/Actions/userActions';
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";
  
  const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const loginState = useSelector((state) => state.loginUserReducer)

    const { loading , success , error } = loginState;


    useEffect(() => {

      if(localStorage.getItem("currentUser")){
        navigate("/")
      }

    },[])

    const handleLogin = () => {

      const currentUser = {
        email : email,
        password : password
      }
      
      if(email === "" && password === ""){
        alert("Please enter the required details!")
      }
      else if(email === "" ){ 
        alert("Please enter the email!")
      }
      else if(password === ""){
        alert("Please enter the Password!")
      }
      else{
        dispatch(loginUser(currentUser));
      }
       
    }

    return (
      <Flex
        // minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

          {loading && <Loading />}
          {success && <Success success="login success!"/>}
          {error && <Error error="Invalid credentials!"/>}

          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>SIGN IN</Heading>
          </Stack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            border="2px"
            borderColor="gray"
            width="lg"
            >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  
                  onClick={handleLogin}
                  >
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  New User ?  <Link color={"blue.400"} onClick={() => navigate("/register")} >Register</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

  export default Login;