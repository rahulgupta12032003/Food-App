import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          // size="xl"
          h="200px"
          w="200px"
          ml="140%"
        />
    </>
  );
};

export default Loading;
