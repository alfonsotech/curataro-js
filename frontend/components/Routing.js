import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import Curation from './Curation';


export default function Routing(props) {
    const [uiPleaseWait, setUiPleaseWait] = React.useState(true);
   
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
        console.log('earnings', earnings);
        localStorage.setItem('crt-earned', JSON.stringify({ 'crt-earned': earnings }));   
    }

    return (
        <>
        <main className={uiPleaseWait ? 'please-wait' : ''}>
            <Navigation isSignedIn={props.isSignedIn} wallet={props.wallet} earnings={earnings}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/curation" element={<Curation updateEarnings={updateEarnings}/>} />
            </Routes>
            {/* <Footer/> */}
        </main>
        </>
    );
}

