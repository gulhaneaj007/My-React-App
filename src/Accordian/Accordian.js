import React, { useState } from "react";
import { questions } from "./AccordianAPI";
import "./Accordion.css";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
    const [data, setdata] = useState(questions);
    return (
        <React.Fragment>  
            
            

            <section className="main_div">
            <h1>React Interview Questions & Answer ?</h1><br /><hr style={{color:"red"}} /><br />
            {data.map((currentVal, index) => {
                // return currentVal.questions;
                // const { id, questions, answer } = currentVal;
                const { id } = currentVal;
                return <MyAccordian
                    key={id}{...currentVal} />
            })}
            </section>
            
        </React.Fragment>
    );
}
export default Accordian;