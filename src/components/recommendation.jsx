import React, { useState, useEffect } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { Link } from "react-router-dom";

function Recommended() {
    var imdbProp;
    const [data, setRecommendData] = useState([]);
    const url = "https://api.tvmaze.com/shows?page=1"

    const fetchInfo = async () => {
        return await fetch(url)
            .then((res) => res.json())
            .then((d) => {
                // console.log(d)
                let recommendationData = d.filter(e => {
                    return (e.averageRuntime >= 61) ? true : false;
                });
                setRecommendData(recommendationData)
            })
    }

    useEffect(() => {
        fetchInfo();
    }, [])
    // console.log(data)


    function render(start, end) {
        return <div className="row">

            {data.slice(start, end).map(f => {
                {/* console.log(f.rating) */ }
                return <div key={f.id} className="col-sm item">
                    <Link to={{ pathname: "show/" + f.externals.imdb }} ><img src={f.image.medium} ></img></Link>
                    <h2>{f.name}</h2>
                    <p>{(f.premiered != null) ? f.premiered.slice(0, 4) + " | " : ""}{(f.genres[0] != undefined) ? f.genres[0] + ' | ' : ""}&nbsp;&nbsp;&nbsp; {"⭐" + " " + f.rating.average} </p>

                </div>
            })}
        </div>




    }
    return <div className="genre">
        <h1>Recommendation</h1>
        <div className="container" id="Recommendation" value="Recommendation">

            {render(0,4)}
            {render(4, 8)}
            {render(8, 12)}
            {render(12, 16)}




        </div>
    </div>

}
// function linkclick(event) {
//     imdbProp = event.target.getAttribute("imdbId")

// }

export default Recommended;