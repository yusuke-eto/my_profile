import React, { useState } from "react";
import Link from "next/link";
import { ApolloProvider, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { client } from "../lib/client";

const ADD_STAR = gql`
  mutation {
    addStar(input: { starrableId: "MDEwOlJlcG9zaXRvcnk1MDE0Nzk5Mg==" }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

const Component = () => {
  const [addStar, { loading }] = useMutation(ADD_STAR);
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <button onClick={() => addStar()}>クリックしてね</button>
      <br />
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
