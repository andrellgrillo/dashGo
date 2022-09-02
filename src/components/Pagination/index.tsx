import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination () {
  return (
    <Stack direction="row" spacing="6" mt="8" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem nPage={1} isCurrent />
        <PaginationItem nPage={2} />
        <PaginationItem nPage={3} />
        <PaginationItem nPage={4} />
        <PaginationItem nPage={5} />
        <PaginationItem nPage={6} />
      </Stack>
    </Stack>
  );
}
