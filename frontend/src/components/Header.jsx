import React from "react";
import { Heading, Flex, Divider, Text } from "@chakra-ui/react";

const Header = () => {
  return (
<Flex
  as="nav"
  align="center"
  justify="center" // Add this line to center the content
  padding="0.5rem"
  bg="gray.400"
>
  <Flex align="center">
        <Heading as="h1" size="sm" color="white" whiteSpace="nowrap" >
          <Text>Github Dashboard</Text></Heading>
        <Divider />
      </Flex>
    </Flex>
  );
};

export default Header;