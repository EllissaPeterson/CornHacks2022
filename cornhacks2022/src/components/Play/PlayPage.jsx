import React, { useState} from 'react';
import { Button } from 'reactstrap';
import '../../App.css';
import Header from "../Header/Header";
import catTama from "../../art/cat gotchi.png";
import catNeutral from "../../art/catneutral.gif";

function PlayPage() {
    const [num, setNum] = useState("msk9HaS6Ic");
    const [level, setLevel] = useState(1);
    const [hunger, setHunger] = useState(0);
    const [happy, setHappy] = useState(0);
    const [know, setKnow] = useState(0);

    const problem = <div className="se-widget" data-widget={num}/>;

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
                <div className="code">
                    {num}
                    <div className="se-widget" data-widget={num}/>
                </div>
            </div>
            <div className="completedChallenges">
                <Button className="button" id="1" block color="primary" onClick={() => setNum("msk9HaS6Ic")}>Objective 1</Button>{' '}
                <Button className="button" id="2" block color="primary" onClick={() => setNum("3TCnmBtjk6")}>Objective 2</Button>{' '}
                <Button className="button" id="3" block color="primary" onClick={() => setNum("fksvScNZpf")}>Objective 3</Button>{' '}
                <Button className="button" id="4" block color="primary" onClick={() => setNum("IvAExOrIfy")}>Objective 4</Button>{' '}
                <Button className="button" id="5" block color="primary" onClick={() => setNum("flDt28zl4C")}>Objective 5</Button>{' '}
            </div>
            <div className="manual">
                <Button className="upgrade" id="5" block color="primary" onClick={() => {setLevel(level + 1); setHappy(happy + 3); setKnow(know + 2); setHunger(hunger + 1)}}>Level Up</Button>{' '}
            </div>
        </div>
    );
}

export default PlayPage;