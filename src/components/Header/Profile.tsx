import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean
}

export function Profile ({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>André Grillo</Text>
          <Text color="gray.300" fontSize="small">andre@planexcon.com.br</Text>
        </Box>
      )}
      <Avatar size="md" name="Andre Grillo" src="https://github.com/andrellgrillo.png" />           
    </Flex>
  );
}
