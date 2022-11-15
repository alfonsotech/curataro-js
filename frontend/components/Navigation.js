import React from 'react';
import { NavLink } from 'react-router-dom';
import SignOutButton from './SignOutButton';
import './Navigation.css';  
import coinImage from '../assets/images/icons8-coins-100.png'; 
import logoText from '../assets/images/curataro-no-bg.png' 

export default function Navigation(props) {
    return (
      <>
        <nav className='flex-space-between'>
          <div className='left'> 
          <img className="logo" src={logoText} alt="logo"></img>
          </div>
        <div className="right">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/curation">Curate</NavLink>
            </li>
            <li>
            <SignOutButton accountId={props.wallet.accountId} onClick={() => props.wallet.signOut()}/>
            </li>
            <li>
              <p>69.420 CTR <span><img src={coinImage} alt="coins icon" width="25" height="25"></img></span></p>
            </li>
          </ul>
        </div>
        
        
        
        
      </nav>
       
      </>
    )
  }