import { useEffect } from 'react';

import './landingPage.css';

import Header from "../components/Header";
import Landing from "../components/Landing";
import Tile1 from '../components/Tile1';
import Tile2 from '../components/Tile2';
import Footer from '../components/Footer';

const LandingPage = () => {
    useEffect(async ()=> {
        const response  = await fetch("https://workboard-ee9ec-default-rtdb.asia-southeast1.firebasedatabase.app/workboard-ee9ec-default-rtdb/board.json")
        const data = await response.json();
        console.log(data);
    },[])
    return (
        <div>
            <Header />
            <div class="spacer">
                &nbsp;
            </div>
            <Landing />
            <Tile1 />
            <Tile2 />
            <Footer />
        </div>
    );
};

export default LandingPage;
