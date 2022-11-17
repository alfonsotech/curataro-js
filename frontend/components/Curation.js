import React, { useState, useMemo, useRef } from 'react'
import data from '../../backend/data.json';
import { useQuery, gql } from "@apollo/client";

const NFT_QUERY = gql`query myQuery {
  mb_views_nft_tokens(distinct_on:metadata_id where: {owner:{_eq: "alfonsoteched.testnet"}, _and: {burned_timestamp: {_is_null: true}}}
  ) {
    nft_contract_id
    title
    description
    media
  }
}`;


export default function Curation() {
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
    <div >
      <ul className='flex-centered'>
        {data. mb_views_nft_tokens.map((nft) => (
          <figure className='flex-centered'>
            {/* TODO: questions come from the db, search q by nft id  */}
              <h2>Does this NFT show a cat?</h2>
              <div className='home-menu-img'>
              <img src={nft.media} alt="nft image"></img>
                <figcaption>
                   <h2>{nft.title}</h2>
                  <p>{nft.description}</p>
                </figcaption>
              </div>
            </figure>
        ))}
      </ul>
      </div>    
    </>
  )
  }