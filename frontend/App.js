import 'regenerator-runtime/runtime';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';
import LandingPage from './components/LandingPage';
// --------
import './assets/global.css';
import './App.css';

export default function App({ isSignedIn, wallet, updateEarnings }) {

  if (!isSignedIn) {
    return <LandingPage onClick={() => wallet.signIn()}/>;
  }

  return (
      <BrowserRouter>
        <Routing isSignedIn={isSignedIn} wallet={wallet} />
      </BrowserRouter>
  )
}
