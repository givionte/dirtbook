import {
  Container,
  ListItem,
  SimpleGrid,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import { generateApolloClient } from "@nhost/react-apollo";
import { Drivers } from "../types/queries-file";
import DriverItem from "../components/driveritem";
import { useState } from "react";
import Search from "../components/search";

export default function Home(drivers: Drivers) {
  const [filteredDrivers, setFilteredDrivers] = useState([]);

  return (
    <>
      <Head>
        <title>Dirtbook</title>
        <meta name="description" content="Get your racing program" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="1200" padding="3">
        <Search setFilteredDrivers={setFilteredDrivers} drivers={drivers} />
        <SimpleGrid minChildWidth="220px" spacing="40px">
          {filteredDrivers
            ? filteredDrivers.map((driver) => {
                return <DriverItem key={driver.id} driver={driver} />;
              })
            : drivers.drivers.map((driver) => {
                return <DriverItem key={driver.id} driver={driver} />;
              })}
        </SimpleGrid>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const { client, wsLink } = generateApolloClient({
    gqlEndpoint: "https://hasura-48637c08.nhost.app/v1/graphql",
  });

  const { data } = await client.query({ query: GET_DRIVERS });

  return {
    props: {
      drivers: data.drivers,
    },
  };
}

const GET_DRIVERS = gql`
  query Drivers {
    drivers {
      first_name
      last_name
      updated_at
      car_number
      birthday
      car_image
      car_image_attr
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
    }
  }
`;
