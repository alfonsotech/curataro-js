import React from 'react';


export default function LandingPage({onClick}) {
    return (
      <main>
        <nav className='flex-space-between'>
          <div className='left'> 
          <p className='logo'>Curataro</p>
          </div>
          <div className='right'> 
          <ul>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>NFT Gallery</p>
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
                <button>Start Curating</button>
                <button>Explore NFTs First</button>
              </div>
            </div>
            <div className='right'>
              <a>
                <img src="https://via.placeholder.com/774x485" alt="Anime hero image"></img>
              </a>
            </div>
          </section>
  
          <section>
          <div><img src="https://via.placeholder.com/50x50" alt="logo icon"></img></div>
            <hr></hr>
          </section>
    
          <section className='options flex-centered'>
            <h2>How It Works</h2>
            <ul className='flex-space-between'>
              <li>
                <figure className='flex-centered'>
                <img src="https://via.placeholder.com/50x50" alt="connect wallet icon"></img>
                <figcaption>1. Connect Wallet</figcaption>
                </figure>
                </li>
              <li>
                <figure className='flex-centered'>
                  <img src="https://via.placeholder.com/50x50" alt="start curating icon"></img>
                  <figcaption>2. Start Curating</figcaption>
                </figure>
              </li>
              <li>
                <figure className='flex-centered'>
                  <img src="https://via.placeholder.com/50x50" alt="earn tokens icon"></img>
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
                <img src="https://via.placeholder.com/50x50" alt="connect wallet icon"></img>
                <figcaption>1. Connect Wallet</figcaption>
                </figure>
                </li>
              <li>
                <figure className='flex-centered'>
                  <img src="https://via.placeholder.com/50x50" alt="start curating icon"></img>
                  <figcaption>2. Start Curating</figcaption>
                </figure>
              </li>
            </ul>
          </section>
        </div>
      </main>
    );
  }