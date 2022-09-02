import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  nPage: number;
  isCurrent?: boolean
}

export function PaginationItem ({isCurrent = false, nPage}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button size="sm" fontSize="xs" width="4" colorScheme="purple" disabled _disabled={{ bg: 'purple.500', cursor: 'default'}}>
        {nPage}
      </Button>
    );
  }
  return (
    <Button size="sm" fontSize="xs" width="4" bg="gray.700" _hover={{ bg: 'gray.500'}}>
      {nPage}
    </Button>
  );
};
