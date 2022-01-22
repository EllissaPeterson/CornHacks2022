import React from "react";
import { Button } from 'reactstrap';
import '../../App.css';
import Header from "../Header/Header";
import PetWindow from "./PetWindow/PetWindow";
import Challenges from "./Objectives/Panels/Challenges"
import CompletedChallenges from "./Objectives/Panels/CompletedChallenges"
import Code from "./Code/Code"

function PlayPage() {
    return (
        <div className="play">
            <header className="App-header">
                <Header />
                <PetWindow/>
                <Challenges/>
                <CompletedChallenges/>
                <Code/>
            </header>
        </div>
    );
}

export default PlayPage;