import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
          <Stack spacing="2" mt="2" mb="8" ml="2" align="stretch">
            <Link display="flex" alignItems="center" _hover={{ color: 'pink.400' }} >
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="2" fontWeight="medium">Dashboard</Text>
            </Link>
            <Link display="flex" alignItems="center" _hover={{ color: 'pink.400' }} >
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="2" fontWeight="medium">Contatos</Text>
            </Link>
          </Stack>
          <Text fontWeight="bold" color="gray.400" fontSize="small">ORÇAMENTO</Text>
          <Stack spacing="2" mt="2" mb="8" ml="2" align="stretch">
            <Link display="flex" alignItems="center" _hover={{ color: 'pink.400' }} >
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text ml="2" fontWeight="medium">Formulários</Text>
            </Link>
            <Link display="flex" alignItems="center" _hover={{ color: 'pink.400' }} >
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text ml="2" fontWeight="medium">Cálculos</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}