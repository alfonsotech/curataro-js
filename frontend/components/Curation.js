import React, { useState, useMemo, useRef } from 'react'
import data from '../../backend/data.json';
import { useQuery, gql } from "@apollo/client";

import LeftArrow from '../assets/images/icons8-left-2-64.png'
import RightArrow from '../assets/images/icons8-up-right-64.png'

const NFT_QUERY = gql`query myQuery {
  mb_views_nft_tokens(distinct_on:metadata_id where: {owner:{_eq: "alfonsoteched.testnet"}, _and: {burned_timestamp: {_is_null: true}}}
  ) {
    nft_contract_id
    title
    media
    owner
  }
}`;

//TODO: helper function to track how many cards user has curated, how many sessions they have completed, and how much token they have earned. 
//TODO: button to log into and out of a session? 
//TODO:Store data to component state
//TODO: helper function to grab one card from store at a time.


export default function Curation(props) {
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  
  // const [currentIndex, setCurrentIndex] = useState(data.length - 1)

  // const updateCurrentIndex = (val) => {
  //   setCurrentIndex(val)
  //   currentIndexRef.current = val
  // }

 

  const { data, loading, error } = useQuery(NFT_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <>
    <main className="curation-page">
      <ul className='flex-3-columns'>
        <li>
          <img src={LeftArrow} onClick={props.updateEarnings}></img>
          <p>No</p>
        </li>
        {data. mb_views_nft_tokens.map((nft) => (
          <figure className='flex-centered'>
            {/* TODO: questions come from the db, search q by nft id  */}
              <h2>Does this NFT show a cat?</h2>
              <div className='home-menu-img'>
              <img src={nft.media} alt="nft image"></img>
                <figcaption>
                    <h2>{nft.title}</h2>
                  <p>Artist: {nft.owner}</p>
                  <p>TokenID: {nft.nft_contract_id}</p>
                </figcaption>
              </div>
              {/* <ul>
                <li>
                  <img src={LeftArrow}></img>
                  <p>No</p>
                </li>
                <li>
                  <img src={RightArrow}></img>
                  <p>Yes</p>
                </li>
              </ul> */}
            </figure>
        ))}
         <li>
          <img src={RightArrow} onClick={props.updateEarnings}></img>
          <p>Yes</p>
        </li>
      </ul> 
      </main>  
    </>
  )
  }