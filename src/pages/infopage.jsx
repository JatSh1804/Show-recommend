import React, { useState, useEffect } from "react";
import Nav from "../components/nav";

const Location = window.location
// console.log(imdbID)

function InfoPage() {
    const imdbID = Location.pathname.slice(6)
    const [data, setData] = useState({
        runtime: null,
        premiered: "2007-02-22",
        rating: { average: 8.4 },
        genres: ['comedy'],
        language: "English",
        summary: "<p>Chat show featuring celebrities, music and fabulous weirdness from the British public.</p>",
        image:{original:""}
    });

    let pageInfo = async () => {
        return await fetch("https://api.tvmaze.com/lookup/shows?imdb=" + imdbID)
            .then(res => res.json())
            .then(d => {
                console.log(d)
                setData((prevState) => ({ ...prevState, ...d }))
                console.log(data)
            })
    }
    useEffect(() => {
        pageInfo();

    }, [])
    console.log(data)
    return <div className="content" style={{backgroundImage:`url(${data.image.original})`}}>
        <div className="info">


            <h1 className="title">{data.name}</h1>

            <p>{(data.runtime != null) ? data.runtime + "min | " : ""}  {data.premiered.slice(0, 4)} &nbsp;  {"⭐" + data.rating.average}</p>
            <p>Genre: {data.genres.map(e => e + " ")}</p>
            <span dangerouslySetInnerHTML={{ __html: data.summary.slice(0,150) }}></span>
            <p>language: {data.language}</p>
            <div className="btnDiv">
                <button className="ticketBtn" >Get Ticket</button>

                <a href={data.officialSite} target="blank"><button className="trailerBtn" > <i class="bi bi-play-circle" /> Watch Trailer</button></a>


            </div>
        </div>
    </div>
}
export default InfoPage;