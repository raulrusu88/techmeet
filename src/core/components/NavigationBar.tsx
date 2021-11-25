import { Flex, Spacer, Box, Button } from "@chakra-ui/react";

export const NavigationBar = () => {
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
        >
          Create Meetup
        </Button>
        <Button
          bgGradient="linear(to-r, brand.pink, brand.red)"
          borderRadius={3}
          colorScheme="brand.secondary"
          h={9}
          _hover={{ bgGradient: "linear(to-r, brand.lightblue, brand.blue)" }}
        >
          Sign In
        </Button>
      </Flex>
    </nav>
  );
};
