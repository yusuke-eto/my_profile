import React, { useState } from "react";
import Link from "next/link";
import { ApolloProvider, useLazyQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { client } from "../lib/client";

const LOGIN = gql`
  query {
    viewer {
      login
    }
  }
`;

const Component = () => {
  const [getData, { loading, data }] = useLazyQuery(LOGIN);
  if (loading) return <p>Loading...</p>;

  console.log(data);

  return (
    <>
      <button onClick={() => getData()}>クリックしてね</button>
      <br />
      {data && <p>hello my name is {data.viewer.login}</p>}
    </>
  );
};

export default function About() {
  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
}
