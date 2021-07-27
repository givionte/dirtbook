import {
  Avatar,
  Badge,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  Spacer,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Drivers, Drivers_drivers } from "../types/queries-file";
import Image from "next/image";
import more from "../public/more.png";

export default function DriverItem({ driver }: { driver: Drivers_drivers }) {
  console.log(driver);

  const CarImage = chakra(Image, {
    baseStyle: { maxH: 500, maxW: 500 },
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });

  return (
    <Box position="relative" maxW="sm">
      <CarImage
        objectFit="cover"
        src={driver.car_image || ""}
        alt={driver.car_number}
        width={500}
        height={500}
        w="auto"
        h="auto"
        borderWidth={5}
        borderStyle="solid"
        borderRadius="lg"
      />

      <Box
        size="lg"
        colorScheme="facebook"
        borderTopRadius="none"
        borderRadius="full"
        width="full"
        padding="1"
      >
        <Flex alignItems="baseline" justifyContent="space-around">
          <Tag fontWeight="700" padding="4" borderRadius="full">
            {driver.car_number}
          </Tag>
          <Text
            color="gray.500"
            fontWeight="700"
            letterSpacing="wide"
            fontSize="small"
            textTransform="uppercase"
            ml="2"
            textOverflow="ellipsis"
          >
            {driver.first_name} {driver.last_name}
          </Text>
          <Spacer />
          <Box alignSelf="center">
            <Image src={more} width="30px" height="30px" alt="More" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
