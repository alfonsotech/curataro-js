import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import Curation from './Curation';


export default function Routing(props) {
    const [uiPleaseWait, setUiPleaseWait] = React.useState(true);
   
    return (
        <>
        <main className={uiPleaseWait ? 'please-wait' : ''}>
                <Navigation isSignedIn={props.isSignedIn} wallet={props.wallet} />
                <div className="">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/curation" element={<Curation />} />
                    </Routes>
                </div>
            <Footer/>
        </main>
        </>
    );
}

