import React from 'react';

export default function Home() {
    return (
      <>
      <main className='flex-centered'>
        <h2>Welcome to Curato.</h2>
        <h2>Pick what you want to do.</h2>
        <ul className='flex-space-between'>
          <li>
            <figure className='flex-centered'>
              <img className='home-menu-img' src="https://via.placeholder.com/250x150" alt="start curating image"></img>
              <figcaption>Start Curating and Earning</figcaption>
            </figure>
          </li>
          <li>
            <figure className='flex-centered'>
              <img className='home-menu-img' src="https://via.placeholder.com/250x150" alt="explore NFTs image"></img>
              <figcaption>Explore NFTs</figcaption>
            </figure>
          </li>
          <li>
            <figure className='flex-centered'>
              <img className='home-menu-img' src="https://via.placeholder.com/250x150" alt="check balance image"></img>
              <figcaption>Check Balance Or Sign Out</figcaption>
            </figure>
          </li>
        </ul>
        <span></span>
      </main>
      </>
    );
  }