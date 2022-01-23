import React from "react";
import Objective from "../Objective"
import { Accordion, AccordionItem, AccordionHeader } from "reactstrap";
import '../../../../App.css';

function Challenges() {
    return (
        <div className="challenges">
            <div>Objective [number]</div>
            <div>Title</div>
            <div>Points</div>
            <div>Description</div>
        </div>
    );
}

export default Challenges;