import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
const fetch = require("node-fetch");

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      authorization: "Bearer bc0fc601352bf0e0a8e61176db02bde4124de637"
    },
    fetch
  })
});
