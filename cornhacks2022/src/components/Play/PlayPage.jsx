import React, { useState} from 'react';
import { Button } from 'reactstrap';
import '../../App.css';
import Header from "../Header/Header";
import catTama from "../../art/cat gotchi.png";
import catNeutral from "../../art/catneutral.gif";
import Code from "./PetWindow/Code/Code";

function PlayPage() {
    const [num, setNum] = useState('0');
    const [level, setLevel] = useState('1');
    const [hunger, setHunger] = useState('0');
    const [happy, setHappy] = useState('0');
    const [know, setKnow] = useState('0');

    return (
        <div className="play">
            <header className="App-header">
                <Header />
            </header>
            {/*<div className="challenges">
                <div>Objective {num}</div>
                <div>Title</div>
                <div>Points</div>
                <div>Description</div>
            </div>*/}
            <div className="petWindow">
                <img src={catTama}/>
                <div className="catAnimated">
                    <img src={catNeutral}/>
                </div>
                <div className="currLevel">
                    <h6>{level}</h6>
                </div>
                <div className="currHunger">
                    <h6>{hunger}</h6>
                </div>
                <div className="currHappiness">
                    <h6>{happy}</h6>
                </div>
                <div className="currKnowledge">
                    <h6>{know}</h6>
                </div>
                <Code />
            </div>
            <div className="completedChallenges">
                <Button className="button" id="1" block color="primary" onClick={() => setNum('1')}>Objective 1</Button>{' '}
                <Button className="button" id="2" block color="primary" onClick={() => setNum('2')}>Objective 2</Button>{' '}
                <Button className="button" id="3" block color="primary" onClick={() => setNum('3')}>Objective 3</Button>{' '}
                <Button className="button" id="4" block color="primary" onClick={() => setNum('4')}>Objective 4</Button>{' '}
                <Button className="button" id="5" block color="primary" onClick={() => setNum('5')}>Objective 5</Button>{' '}
                <Button className="button" id="6" block color="primary" onClick={() => setNum('6')}>Objective 6</Button>{' '}
                <Button className="button" id="7" block color="primary" onClick={() => setNum('7')}>Objective 7</Button>{' '}
                <Button className="button" id="8" block color="primary" onClick={() => setNum('8')}>Objective 8</Button>{' '}
                <Button className="button" id="9" block color="primary" onClick={() => setNum('9')}>Objective 9</Button>{' '}
                <Button className="button" id="10" block color="primary" onClick={() => setNum('10')}>Objective 10</Button>{' '}
                <Button className="button" id="11" block color="primary" onClick={() => setNum('11')}>Objective 11</Button>{' '}
                <Button className="button" id="12" block color="primary" onClick={() => setNum('12')}>Objective 12</Button>{' '}
            </div>
        </div>
    );
}

export default PlayPage;