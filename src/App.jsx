import React from "react";
// import Netflix from "./Netflix_App/Netflix";
// import Amazone from "./Netflix_App/Amazone";
import Seriesdetails from "./Netflix_App/Seriesdetails";
import Card from "./Netflix_App/Card";
import Netflixheading from "./Netflix_App/Netflixheading";

// const Fevs = "Amazone"; 

const App = () => (
    <>
        <Netflixheading />
        {Seriesdetails.map((val, index) => {
                console.log(index);
                return (
                    <Card
                        key={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        SeriesName={val.SeriesName}
                        WebLink={val.WebLink}
                    />
                );
            })
        }
        {/* ternory if condition */}
        {/* {(Fevs==="Amazone") ? <Amazone />:<Netflix /> } */}
    </>
);
export default App;
