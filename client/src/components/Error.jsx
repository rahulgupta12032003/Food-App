import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const Error = ({error}) => {
  return (
    <>
      <Alert status="error">
        <AlertIcon />
          {error}
      </Alert>
    </>
  );
};

export default Error;
