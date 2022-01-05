import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion';
import {HelpType, Rating} from "./components/Rating";
import {OnOff} from "./components/OnOff";
import classes from './App.module.css'

function App() {

    let [accordion, setAccordion] = useState(false)

    let [rating, setRating] = useState<HelpType>(0)

    let [switchOn, setSwitchOn] = useState(false)


    return (
        <div className={classes.main}>

            <Accordion titleValue={"Users"}
                       collapsed={accordion}
                       onChange={()=> {setAccordion(!accordion)}}/>

            <Rating value={rating}
                    onClick={setRating}/>

            <OnOff on={switchOn}
                   onChange={setSwitchOn}/>
        </div>
    );
}

export default App;
