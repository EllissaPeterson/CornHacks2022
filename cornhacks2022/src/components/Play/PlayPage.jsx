import React from "react";
import { Button } from 'reactstrap';
import '../../App.css';
import Header from "../Header/Header";
import PetWindow from "./PetWindow/PetWindow";
import Challenges from "./Objectives/Panels/Challenges"
import CompletedChallenges from "./Objectives/Panels/CompletedChallenges"

function PlayPage() {
    return (
        <div className="play">
            <header className="App-header">
                <Header />
            </header>

            <Challenges/>
            <PetWindow/>
            <CompletedChallenges/>
        </div>
    );
}

export default PlayPage;