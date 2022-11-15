import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client'
// NEAR
import { Wallet } from './near-wallet';


const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME })

window.onload = async () => {
  const isSignedIn = await wallet.startUp()
  const root = createRoot(document.getElementById('root'))

  root.render(<App isSignedIn={isSignedIn} wallet={wallet} />)
}