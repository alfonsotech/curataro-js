import React from 'react';
import logoText from '../assets/images/curataro-no-bg.png';
import heroImage from '../assets/images/anime001r.jpg';
import alfonsoImage from '../assets/images/anime005.jpg';
import naomiImage from '../assets/images/anime006.jpg';
import walletImage from '../assets/images/icons8-wallet-100.png';
import cashImage from '../assets/images/icons8-cash-96.png';
import swipeImage from '../assets/images/icons8-swipe-right-64.png';
import logoCircle from '../assets/images/logo-circle.png';



export default function LandingPage({onClick}) {
    return (
      <main>
        <nav className='flex-space-between'>
          <div className='left'> 
          <img className="logo" src={logoText} alt="logo"></img>
          </div>
          <div className='right'> 
          <ul>
            <li>
              <p onClick={onClick}>About</p>
            </li>
            <li>
              <p onClick={onClick}>NFT Gallery</p>
            </li>
            <li>
              <p style={{ textAlign: 'center' }}>
                <button onClick={onClick}>Connect Wallet</button>
              </p>
            </li>
          </ul>         
        </div>
        </nav>
  
        <div className='flex-centered'>
          <section className='hero'>
            <div className='left flex-centered'>
              <h2>The Future of NFT Curation is NEAR</h2>
              <p>Support the NFT ecosystem, curate, and earn rewards.</p>
              <div className='buttonGroupH'>
                <button onClick={onClick}>Start Curating</button>
                <button onClick={onClick}>Explore NFTs First</button>
              </div>
            </div>
            <div className='right'>
              <a>
                <img src={heroImage} alt="Anime hero image"></img>
              </a>
            </div>
          </section>
  
          <section>
          <div><img className="logo-circle" src={logoCircle} alt="logo icon"></img></div>
            <hr></hr>
          </section>
    
          <section className='options flex-centered'>
            <h2>How It Works</h2>
            <ul className='flex-space-between'>
              <li>
                <figure className='flex-centered'>
                <img onClick={onClick} className='works-image' src={walletImage} alt="connect wallet icon"></img>
                <figcaption>1. Connect Wallet</figcaption>
                </figure>
                </li>
              <li>
                <figure className='flex-centered'>
                  <img onClick={onClick} className='works-image' src={swipeImage} alt="start curating icon"></img>
                  <figcaption>2. Start Curating</figcaption>
                </figure>
              </li>
              <li>
                <figure className='flex-centered'>
                  <img onClick={onClick} className='works-image' src={cashImage} alt="earn tokens icon"></img>
                  <figcaption>3. Earn Token</figcaption>
                </figure>
                
                </li>
            </ul>
          </section>
          <section className='about flex-centered'>
            <h2>Who Built This?</h2>
            <ul className='flex-space-between'>
              <li>
                <figure className='flex-centered'>
                <img className="whois-image" src={alfonsoImage} alt="connect wallet icon"></img>
                <figcaption>AlfonsoTech</figcaption>
                </figure>
                </li>
              <li>
                <figure className='flex-centered'>
                  <img className="whois-image" src={naomiImage} alt="start curating icon"></img>
                  <figcaption>Naomi</figcaption>
                </figure>
              </li>
            </ul>
          </section>
        </div>
        {/* <footer className="footer">
          <p>Built with <span><img className="logo-circle footer-icon" src={logoCircle} alt="logo icon"></img></span> by Team Hashira during MetaBuild</p> 
        </footer> */}
      </main>
    );
  }