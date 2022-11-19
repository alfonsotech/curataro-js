import React, { useState, useMemo, useRef } from 'react'
// import data from '../../backend/data.json';
import { useQuery, gql } from "@apollo/client";
import Card from './Card';

import LeftArrow from '../assets/images/icons8-left-arrow-32.png'
import RightArrow from '../assets/images/icons8-right-arrow-32.png'

// This code allows you to pull NFTs from an account using Mintbases' API. I switched to some hardcoded data for simplicity.
// const NFT_QUERY = gql`query myQuery {
//   mb_views_nft_tokens(distinct_on:metadata_id where: {owner:{_eq: "alfonsoteched.testnet"}, _and: {burned_timestamp: {_is_null: true}}}
//   ) {
//     nft_contract_id
//     title
//     media
//     owner
//   }
// }`;
    // TODO: when quickly swipe and restore multiple times the same card

export default function Curation(props) {

 const handleClick = () => {
  props.updateEarnings(); 
  props.updateTotalCurated();
  props.updateIndex();
 }
 
 //Get data from Mintbase API, cont.
  // const { data, loading, error } = useQuery(NFT_QUERY);
  // if (loading) return "Loading...";
  // if (error) return <pre>{error.message}</pre>

  let propsCard = {
    index: props.index, 
    data: props.data
  }
    
  return (
    <>
    <main className="curation-page">
      <ul className='flex-3-columns'>
        <li className="arrow-icon-container">
          <img className="arrow-icon" src={LeftArrow} onClick={handleClick}></img>
          <p>No</p>
        </li>
          {/* <Card index={props.index} data={data.mb_views_nft_tokens}/> */}
          <Card {...propsCard}/>
         <li className="arrow-icon-container">
          <img className="arrow-icon" src={RightArrow} onClick={handleClick}></img>
          <p>Yes</p>
        </li>
      </ul> 
      <p className="total-cards-widget">Total Cards Curated:{props.totalCurated}</p>
      </main>  
    </>
  )
  }