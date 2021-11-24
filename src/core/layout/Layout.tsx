import React from "react";
import { Box } from "@chakra-ui/react";
import { NavigationBar } from "../components/NavigationBar";

export const Layout: React.FC = ({ children }) => (
  <Box backgroundColor="brand.primary" width="100%" height="100%" px={3} py={3}>
    <NavigationBar />

    <main>{children}</main>
  </Box>
);
