import { Container, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import { gql } from "@apollo/client";
import { generateApolloClient } from "@nhost/react-apollo";
import { Data_drivers, Data_series } from "../types/queries-file";
import DriverItem from "../components/driveritem";
import { useState } from "react";
import Search from "../components/search";
import Series from "../components/Series";

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
  return (
    <>
      <Head>
        <title>Dirtbook</title>
        <meta name="description" content="Get your racing program" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="1200" padding="3">
        <Series series={series} />
        <Search setFilteredDrivers={setFilteredDrivers} drivers={drivers} />
        <SimpleGrid minChildWidth="220px" spacing="40px">
          {filteredDrivers
            ? filteredDrivers.map((driver) => {
                return <DriverItem key={driver.id} driver={driver} />;
              })
            : drivers.map((driver) => {
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
    }
  }
`;
