import { useState } from "react";
import { ModalPopup } from "./ModalPopup";
import { Flex, Spacer, Box, Button, useDisclosure } from "@chakra-ui/react";

export const NavigationBar = () => {
  // State for the modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav>
      <Flex
        backgroundColor="brand.secondary"
        alignItems="center"
        px={4}
        height={16}
      >
        <Box
          w={100}
          h={50}
          backgroundColor="brand.primary"
          color="#fff"
          alignItems="center"
          display="flex"
          justifyContent="center"
        >
          LOGO
        </Box>
        <Spacer />
        <Button
          variant="outline"
          colorScheme="brand.primary"
          color="#fff"
          borderRadius={3}
          h={9}
          marginRight={3}
          onClick={onOpen}
        >
          Create Meetup
        </Button>
        <ModalPopup isOpen={isOpen} onClose={onClose} />
        {/* <Button
          bgGradient="linear(to-r, brand.pink, brand.red)"
          borderRadius={3}
          colorScheme="brand.secondary"
          h={9}
          _hover={{ bgGradient: "linear(to-r, brand.lightblue, brand.blue)" }}
        >
          Sign In
        </Button> */}
      </Flex>
    </nav>
  );
};
