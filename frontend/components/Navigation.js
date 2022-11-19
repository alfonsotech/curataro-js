import React from 'react';
import { NavLink } from 'react-router-dom';
import SignOutButton from './SignOutButton'; 
import coinImage from '../assets/images/icons8-coins-100.png'; 
import logoText from '../assets/images/curataro-no-bg.png' 

export default function Navigation(props) {
  const currentEarnings = parseFloat(props.earnings).toFixed(2);
    return (
      <>
        <nav className='flex-space-between'>
          <div className='left'> 
          <img className="logo" src={logoText} alt="logo"></img>
          </div>
        <div className="right">
          <ul>
            <li>
              <NavLink to="/"><h3>Home</h3></NavLink>
            </li>
            <li>
            <NavLink to="/curation"><h3>Curate</h3></NavLink>
            </li>
            <li>
            <SignOutButton accountId={props.wallet.accountId} onClick={() => props.wallet.signOut()}/>
            </li>
            <li>
              <h3><span><img src={coinImage} alt="coins icon" width="20" height="20"></img></span> {currentEarnings} CTR</h3>
            </li>
          </ul>
        </div>  
      </nav>
       
      </>
    )
  }