import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import App from './App';
import { createRoot } from 'react-dom/client'
// NEAR
import { Wallet } from './near-wallet';


const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME })

const client = new ApolloClient({
  uri: "https://interop-testnet.hasura.app/v1/graphql/",
  cache: new InMemoryCache()
});

window.onload = async () => {
  const isSignedIn = await wallet.startUp()
  const root = createRoot(document.getElementById('root'))

  root.render(
  <ApolloProvider client={client}>
    <App isSignedIn={isSignedIn} wallet={wallet} />
  </ApolloProvider>)
}