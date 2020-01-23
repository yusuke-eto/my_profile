import React, { useState } from "react";
import Link from "next/link";
import { ApolloProvider, useQuery, useLazyQuery } from "@apollo/react-hooks";
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
  // const { loading, error, data, refetch } = useQuery(LOGIN);
  const [runQuery, { called, loading, data }] = useLazyQuery(LOGIN);

  if (loading) return <p>Loading..."</p>;

  return (
    <>
      <button onClick={() => runQuery()}>クリックしてね</button>
      {data && <p>hello my name is {data.viewer.login}</p>}
    </>
  );
};

const Index = () => (
  <ApolloProvider client={client}>
    <div>
      <Link href="/about">
        <a title="about">About Page</a>
      </Link>
      <p>Hello Next.js</p>
    </div>
    <Component />
  </ApolloProvider>
);

export default Index;
