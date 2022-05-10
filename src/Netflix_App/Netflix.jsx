import React from "react";
import Seriesdetails from "./Seriesdetails";
import Card from "./Card";

const Netflix = ()=>{
        return (
        <Card
            key={Seriesdetails[1].id}
            imgsrc={Seriesdetails[1].imgsrc}
            title={Seriesdetails[1].title}
            SeriesName={Seriesdetails[1].SeriesName}
            WebLink={Seriesdetails[1].WebLink}
        />
        );
}
export default Netflix;