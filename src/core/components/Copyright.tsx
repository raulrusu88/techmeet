import { Text, TextProps } from "@chakra-ui/layout";

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} <span style={{ color: "red" }}>❤</span>️
    in Cluj
  </Text>
);
