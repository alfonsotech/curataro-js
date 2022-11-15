import React, { useState, useMemo, useRef } from 'react'
import './Curation.css';
import data from '../../backend/data.json';


export default function Curation() {
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  
  const [currentIndex, setCurrentIndex] = useState(data.length - 1)

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  return (
    <>
    <div >
          <ul>
              {data.map((item, i) => <li key={i}>{item.nft_token_id} - {item.nft_title}</li>)}
          </ul>
      </div>

        
    </>
  )
  }