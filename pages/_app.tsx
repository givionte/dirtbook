import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NhostApolloProvider } from "@nhost/react-apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NhostApolloProvider gqlEndpoint="https://hasura-48637c08.nhost.app/v1/graphql">
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </NhostApolloProvider>
  );
}
export default MyApp;
