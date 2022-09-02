import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

export function Profile () {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>André Grillo</Text>
        <Text color="gray.300" fontSize="small">andre@planexcon.com.br</Text>
      </Box>
      <Avatar size="md" name="Andre Grillo" src="https://github.com/andrellgrillo.png" />           
    </Flex>
  );
}
