import React from 'react';

import image1 from '../assets/images/anime004.jpg'
import image2 from '../assets/images/anime003.jpg'
import image3 from '../assets/images/anime005.jpg'


export default function Home() {
    return (
      <>
      <main className='flex-centered'>
        <h2>Welcome to Curato.</h2>
        <h2>Pick what you want to do.</h2>
        <ul className='flex-space-between'>
          <li>
            {/* TODO: This is a hack! */}
            <a href="http://localhost:1234/curation">
              <figure className='flex-centered'>
                <div className='home-menu-img'>
                  <img src={image1} alt="start curating image"></img>
                  <figcaption>Start Curating and Earning</figcaption>
                </div>
              </figure>
            </a>
          </li>
          <li>
            <figure className='flex-centered'>
              <div className='home-menu-img'>
                <img src={image2} alt="explore NFTs image"></img>
                <figcaption>Explore NFTs</figcaption>
              </div>
            </figure>
          </li>
          <li>
            <figure className='flex-centered'>
              <div className='home-menu-img'>
                <img src={image3} alt="check balance image"></img>
                <figcaption>Check Balance Or Sign Out</figcaption>
              </div>
            </figure>
          </li>
        </ul>
        <span></span>
      </main>
      </>
    );
  }