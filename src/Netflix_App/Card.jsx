import React from "react";
import Heading from "./Heading";
import Images from "./Images";

function Card(props) {
    //console.log(props); // we can get object of elelmnet propes all element
    return (
        <>
            <div className="cards">
                <div className="card">
                    {/* <img src={props.imgsrc} alt="mypic" className="card_img" /> */}
                    <Images imgsrc={props.imgsrc} />
                    <div className="card_info">
                        <h5 className="card_category">{props.title}</h5>
                        <Heading SeriesName={props.SeriesName} />
                        {/* <h2 className="card_title">{props.SeriesName}</h2> */}
                        <a href={props.WebLink} target="_rahul">
                            <button><span><i className="fa fa-play"></i></span> Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Card;
