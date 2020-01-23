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
      authorization: `Bearer 317f6f4d0470c1e714e09367e15c3f2b6562e7d7`
    },
    fetch
  })
});
