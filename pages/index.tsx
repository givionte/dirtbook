import {
  Alert,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { gql } from "@apollo/client";
import { generateApolloClient } from "@nhost/react-apollo";
import { Data_drivers, Data_series } from "../types/queries-file";
import DriverItem from "../components/driveritem";
import { useState } from "react";
import Search from "../components/search";
import Series from "../components/Series";
import DeleteSVG from "../components/svglogos/delete";

export default function Home({
  drivers,
  series,
}: {
  drivers: Data_drivers[];
  series: Data_series[];
}) {
  const [filteredDrivers, setFilteredDrivers] = useState<Data_drivers[] | []>(
    []
  );
  const [search, setSearch] = useState("");

  const handleClick = () => {
    setSearch("");
    setFilteredDrivers([]);
  };

  return (
    <>
      <Head>
        <title>Dirtbook</title>
        <meta name="description" content="Get your racing program" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="1200" padding="3">
        <Center>
          <HStack spacing={4}>
            {series.map((s) => {
              return (
                <Series
                  key={s.id}
                  series={s}
                  drivers={drivers}
                  setFilteredDrivers={setFilteredDrivers}
                />
              );
            })}
          </HStack>
        </Center>

        <Search
          setFilteredDrivers={setFilteredDrivers}
          drivers={drivers}
          search={search}
          setSearch={setSearch}
        />
        <Center>
          {filteredDrivers.length > 0 ? (
            <Button
              size="sm"
              onClick={handleClick}
              margin="2"
              colorScheme="blackAlpha"
            >
              <Flex marginLeft="1" marginRight="1">
                <DeleteSVG />
              </Flex>
              Clear Filter
            </Button>
          ) : null}
        </Center>
        <SimpleGrid minChildWidth="220px" spacing="40px">
          {filteredDrivers.length > 0 ? (
            filteredDrivers.map((driver) => {
              return <DriverItem key={driver.id} driver={driver} />;
            })
          ) : filteredDrivers.length <= 0 && !search ? (
            drivers.map((driver) => {
              return <DriverItem key={driver.id} driver={driver} />;
            })
          ) : (
            <Alert status="warning">
              <Flex alignItems="center">
                <DeleteSVG />
                <Text marginX="1">Your search did not find any results!</Text>
              </Flex>
            </Alert>
          )}
        </SimpleGrid>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const { client, wsLink } = generateApolloClient({
    gqlEndpoint: "https://hasura-48637c08.nhost.app/v1/graphql",
  });

  const { data } = await client.query({ query: GET_DATA });
  return {
    props: {
      drivers: data.drivers,
      series: data.series,
    },
  };
}

const GET_DATA = gql`
  query Data {
    drivers {
      first_name
      last_name
      updated_at
      car_number
      birthday
      car_image
      car_image_attr
      car_image_attr_url
      chassis
      created_at
      driver_image
      facebook
      hometown_city
      hometown_state
      id
      instagram
      team
      twitter
      website
      primary_bg_color
      secondary_text_color
      series_drivers {
        series_id
      }
    }
    series(order_by: { series_name: asc }) {
      id
      count
      created_at
      facebook
      instagram
      schedule
      series_logo
      series_name
      twitter
      updated_at
      website
      series_drivers {
        driver {
          id
        }
      }
    }
  }
`;
