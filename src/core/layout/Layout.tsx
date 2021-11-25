import React from "react";
import { Box } from "@chakra-ui/react";
import { NavigationBar } from "../components/NavigationBar";
import { Footer } from "core/components/Footer";

export const Layout: React.FC = ({ children }) => (
  <Box
    position="relative"
    backgroundColor="brand.primary"
    width="100%"
    px={3}
    py={3}
  >
    <NavigationBar />

    <main>{children}</main>

    <Footer bottom="0" right="0" left="0" />
  </Box>
);
