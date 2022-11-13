import React from 'react';
import { NavLink } from 'react-router-dom';
import SignOutButton from './SignOutButton';
      

export default function Navigation(props) {
    return (
      <>
      <nav>
        <h1>Navigation Goes Here</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/curation">Curate</NavLink>
        <SignOutButton accountId={props.wallet.accountId} onClick={() => props.wallet.signOut()}/>
      </nav>
       
      </>
    )
  }