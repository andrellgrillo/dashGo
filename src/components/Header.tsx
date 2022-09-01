import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react"
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'
export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dash
        <Text as="span" fontStyle="italic" color="pink.500">GO.</Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na Plataforma"
          _placeholder={{
          color:
          'gray.400'
          }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
      <Flex align="center" ml="auto">
          <HStack spacing="8" mx="8" pr="8" py="1" borderRightWidth={1} borderColor="gray.700">
            <Icon as={RiNotificationLine} fontSize="20" />
            <Icon as={RiUserAddLine} fontSize="20" />
          </HStack>
          <Flex align="center">
            <Box mr="4" textAlign="right">
              <Text>André Grillo</Text>
              <Text color="gray.300" fontSize="small">andre@planexcon.com.br</Text>
            </Box>
            <Avatar size="md" name="Andre Grillo" src="https://github.com/andrellgrillo.png" />           
          </Flex>
      </Flex> 
    </Flex>
  )
}