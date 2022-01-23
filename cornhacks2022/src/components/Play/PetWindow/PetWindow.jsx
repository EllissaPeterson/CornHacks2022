import React from "react";
import {Button, Container, ListGroupItem} from 'reactstrap';
import catTama from '../../../art/cat gotchi.png'
import catNeutral from '../../../art/catneutral.gif'
import '../../../App.css';

// const store = Redux.createStore(degradeCount)

let pet = {
    level: '1',
    happiness: '100',
    hunger: '100',
    knowledge: '0',
    meta: {
        completedCode: ''
    }
}

function PetWindow() {
    return (
        <div className="petWindow">
            <img src={catTama}/>
            <div className="catAnimated">
                <img src={catNeutral}/>
            </div>
            <div className="currLevel">
                {/*<h6>Level</h6>*/}
                <li key={pet.level}></li>
            </div>
            <div className="currHunger">
                <h6>Hunger</h6>
            </div>
            <div className="currHappiness">
                <h6>Happy</h6>
            </div>
            <div className="currKnowledge">
                <h6>Know</h6>
            </div>
        </div>
    );
}

export default PetWindow;