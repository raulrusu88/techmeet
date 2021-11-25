import { Box, Center, BoxProps } from "@chakra-ui/layout";
import { Copyright } from "./Copyright";

export const Footer = (props: BoxProps) => (
  <Box
    {...props}
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Center>
      <Copyright color="#fff" fontWeight="semibold" />
    </Center>
  </Box>
);
