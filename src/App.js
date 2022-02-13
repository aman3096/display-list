import React from "react";
// import { useQuery, gql } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Main from "./components/Main";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
  credentials:'omit'
});

export default function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container" data-testid="main-1">
      <Router>
        <Routes>
          <Route path="/" index element={<Main/>}>
          </Route>
          <Route path="/details" element={<Detail />} >
          
          </Route>
          </Routes>
      </Router>
    </div>
    </ApolloProvider>
  );
}