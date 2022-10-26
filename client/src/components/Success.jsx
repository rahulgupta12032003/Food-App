import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const Success = ({ success }) => {
  return (
    <>
      <Alert status="success">
        <AlertIcon />
        { success }
      </Alert>
    </>
  );
};

export default Success;
