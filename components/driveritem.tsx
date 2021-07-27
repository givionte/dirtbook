import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Badge,
  Box,
  chakra,
  Container,
  Flex,
  Grid,
  GridItem,
  Icon,
  Link,
  Spacer,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Drivers, Drivers_drivers } from "../types/queries-file";
import Image from "next/image";
import more from "../public/more.png";
import iglogo from "../public/instagram.svg";
import fblogo from "../public/facebook.svg";
import twlogo from "../public/twitter.svg";
import weblogo from "../public/website.svg";
import WebsiteSVG from "./svglogos/website";
import FacebookSVG from "./svglogos/facebook";
import TwitterSVG from "./svglogos/twitter";
import InstagramSVG from "./svglogos/instagram";
import DetailsSVG from "./svglogos/details";

export default function DriverItem({ driver }: { driver: Drivers_drivers }) {
  const CarImage = chakra(Image, {
    baseStyle: { maxH: 500, maxW: 500 },
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });

  return (
    <Accordion allowToggle>
      <AccordionItem key={driver.id} border="none">
        <Box position="relative" maxW="sm" borderRadius="lg">
          <Flex flexDirection="column">
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

            <Text
              textAlign="right"
              marginRight="2"
              fontSize="xs"
              fontWeight="thin"
            >
              {driver.car_image_attr}
            </Text>
          </Flex>

          <Flex alignItems="center" justifyContent="space-around">
            <Tag
              textColor={driver.secondary_text_color}
              backgroundColor={driver.primary_bg_color}
              fontSize="lg"
              fontWeight="700"
              padding="3"
              marginLeft="2"
              minWidth="none"
              transform="skew(-10deg)"
              boxShadow="0px 10px 24px -14px rgba(0, 0, 0, 0.5)"
            >
              {driver.car_number}
            </Tag>
            <Text
              marginLeft="3px"
              color="gray.500"
              fontWeight="700"
              letterSpacing="wide"
              fontSize="small"
              textTransform="uppercase"
              ml="2"
              transform="skew(-10deg)"
            >
              {driver.first_name} {driver.last_name}
            </Text>
            <Spacer />
            <Box>
              <AccordionButton
                justifySelf="right"
                _focus={{ boxShadow: "none" }}
                _hover={{ bgColor: "white" }}
              >
                <Box
                  sx={{
                    svg: {
                      fill: `black`,
                      transition: "all .3s ease-in",
                    },
                    "svg:hover": {
                      fill: `${driver.primary_bg_color}`,
                    },
                  }}
                >
                  <DetailsSVG />
                </Box>
              </AccordionButton>
            </Box>
          </Flex>
          <AccordionPanel>
            <Grid templateRows="repeat(1, 1fr)" templateColumns="1fr 24px">
              <GridItem
                rowSpan={1}
                colSpan={1}
                border={`solid 3px ${driver.primary_bg_color}`}
                padding="1"
                marginRight="7"
                transform="skew(-10deg)"
                borderRadius="lg"
                boxShadow="0px 10px 24px -21px rgba(0, 0, 0, 0.5)"
              >
                <Text fontSize="sm">
                  <chakra.span fontWeight="bold">Hometown &#8226; </chakra.span>
                  {driver.hometown_city}, {driver.hometown_state}
                </Text>
                <Text fontSize="sm">
                  <chakra.span fontWeight="bold">Team &#8226; </chakra.span>
                  {driver.team}
                </Text>
                <Text fontSize="sm">
                  <chakra.span fontWeight="bold">Chassis &#8226; </chakra.span>
                  {driver.chassis}
                </Text>
              </GridItem>

              <Box
                sx={{
                  svg: {
                    fill: `black`,
                    transition: "all .3s ease-in",
                  },
                  "svg:hover": {
                    fill: `${driver.primary_bg_color}`,
                  },
                }}
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                justifyContent="space-evenly"
              >
                {driver.website ? (
                  <Link href={`${driver.website}`} isExternal>
                    <WebsiteSVG />
                  </Link>
                ) : null}
                {driver.facebook ? (
                  <Link href={`${driver.facebook}`} isExternal>
                    <FacebookSVG />
                  </Link>
                ) : null}
                {driver.twitter ? (
                  <Link href={`${driver.twitter}`} isExternal>
                    <TwitterSVG />
                  </Link>
                ) : null}
                {driver.instagram ? (
                  <Link href={`${driver.instagram}`} isExternal>
                    <InstagramSVG />
                  </Link>
                ) : null}
              </Box>
            </Grid>
          </AccordionPanel>
        </Box>
      </AccordionItem>
    </Accordion>
  );
}
