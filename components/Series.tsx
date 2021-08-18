import { Center, HStack, Tag } from "@chakra-ui/react";
import { Data_series } from "../types/queries-file";

function Series({ series }: { series: Data_series[] }) {
  return (
    <Center>
      <HStack spacing={4}>
        {}
        <Tag size="lg" variant="solid">
          Test
        </Tag>
      </HStack>
    </Center>
  );
}

export default Series;
