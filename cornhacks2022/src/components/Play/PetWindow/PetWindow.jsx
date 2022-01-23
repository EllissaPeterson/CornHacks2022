import React from "react";
import {Button, Container} from 'reactstrap';
import catTama from '../../../art/cat gotchi.png'
import catNeuNorm from '../../../art/catNeuNorm.png'
import catNeuSquish from '../../../art/catNeuSquish.png'
import catNeuStretch from '../../../art/catNeuStretch.png'
import '../../../App.css';



let pet = {
    level: '',
    happiness: '',
    hunger: '',
    knowledge: '',
    meta: {
        completedCode: ''
    }
}

function PetWindow() {
    return (
        <div className="petWindow">
            <img src={catTama}/>
            <div className="catAnimated">
                <img src={catNeuNorm}/>
            </div>
            <div className="currLevel">
                <h6>Test</h6>
            </div>
        </div>
    );
}

export default PetWindow;