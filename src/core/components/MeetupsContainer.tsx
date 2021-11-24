import React from "react";
import { SimpleGrid } from "@chakra-ui/layout";

export const MeetupsContainer: React.FC = ({ children }) => (
  <SimpleGrid
    templateColumns="repeat(4, 1fr)"
    templateRows="auto"
    spacing={3}
    mt={3}
    justifyItems="center"
  >
    {children}
  </SimpleGrid>
);
