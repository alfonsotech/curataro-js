import 'regenerator-runtime/runtime';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';
import LandingPage from './components/LandingPage';
// --------
import './assets/global.css';
import './App.css';

// const updateEarnings = () => {
//   const priorEarnings = JSON.parse(localStorage.getItem('crt-earned'));
//   console.log('priorEarnings', priorEarnings, typeof priorEarnings);
//   if(priorEarnings !== null) {
//     const currentEarnings = parseInt(priorEarnings) + .001;
//     console.log(currentEarnings);
//     localStorage.setItem('crt-earned', JSON.stringify({ 'crt-earned': currentEarnings }));
//   } else {
//     localStorage.setItem('crt-earned', JSON.stringify({ 'crt-earned': '69.420' }));
//   }  
// }

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
