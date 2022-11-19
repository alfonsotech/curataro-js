import React from 'react'
import { Routes, Route } from 'react-router-dom'
import data from '../../backend/data.json';

// Components
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import Curation from './Curation';


export default function Routing(props) {
    const [uiPleaseWait, setUiPleaseWait] = React.useState(true);
    const [index, setIndex] = React.useState(0);
    const updateIndex = () => {
      if(index >= data.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
   
    //Manage Earnings
    const [earnings, setEarnings] = React.useState(() => {
        const saved = localStorage.getItem("crt-earnings");
        const initialValue = JSON.parse(saved);
        return initialValue || 69.42;
      });

    React.useEffect(() => {
        // initializing earnings
        localStorage.setItem("crt-earned", JSON.stringify(69.42));
      }, [69.42]);

      const updateEarnings = () => {
        setEarnings(earnings + .01); 
        localStorage.setItem('crt-earned', JSON.stringify({ 'crt-earned': earnings }));   
    }
    //Manage num of curations and/or sessions
    const [totalCurated, setTotalCurated] = React.useState(() => {
        const saved = localStorage.getItem("total-curated");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
      });

    React.useEffect(() => {
        // initializing earnings
        localStorage.setItem("total-curated", JSON.stringify(0));
      }, [0]);

      const updateTotalCurated = () => {
        setTotalCurated(totalCurated + 1); 
        localStorage.setItem('total-curated', JSON.stringify({ 'total-curated': totalCurated }));   
    }

    let propsCuration = {
      updateEarnings, 
      updateTotalCurated, 
      totalCurated,
      updateIndex, 
      index,
      data
      }

      let propsNavigation = {
        isSignedIn: props.isSignedIn,
         wallet: props.wallet, 
         earnings
      }

    return (
        <>
        <main className={uiPleaseWait ? 'please-wait' : ''}>
            <Navigation {...propsNavigation} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/curation" element={<Curation {...propsCuration}/>} />
            </Routes>
            {/* <Footer/> */}
        </main>
        </>
    );
}

