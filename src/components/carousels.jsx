import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Carousel(props) {
    const url = props.url;
    const [data, setData] = useState([]);

    var imageURL;
    var showID;
    const fetchInfo = async () => {
        return await fetch(url)
            .then((res) => res.json())
            .then((d) => {
                let filterData = d.filter((e => {
                    switch (props.title) {
                        case "Popular":
                            if (e.rating.average > 8) {
                                return true
                            } else {
                                return false
                            }
                        case "Airing":
                            return true

                        case "Top Rated":
                            return true

                        default:
                            break;
                    }

                }));
                setData(filterData)
            })

    }
    useEffect(() => {
        fetchInfo();
    }, [])
    // console.log(data)
    // console.log(fetchInfo)



    return <div className="genre">
        <h1 >{props.title}</h1>

        <div id={props.value} className="wrapper">
            {/* <p>{props.title}</p> */}
            <section id={`${props.value}sect1`}>
                <a href={`#${props.value}sect3`} className="arrow__btn">‹</a>
                {data.slice(0, 5).map(d => {

                    switch (props.title) {
                        case "Popular":
                            imageURL = d.image.medium;
                            showID = d.externals.imdb;

                            break;
                        case "Top Rated":
                            imageURL = d.image.medium;
                            showID = d.externals.imdb;
                            break;

                        case "Airing":
                            imageURL = d.show.image.medium;
                            showID = d.show.externals.imdb;
                            break;
                    }
                    return <div key={d.id} className="item"><Link to={"/show/" + showID}><img src={imageURL} /></Link></div>
                })}
                <a href={`#${props.value}sect2`} className="arrow__btn">›</a>
            </section>

            <section id={`${props.value}sect2`}>
                <a href={`#${props.value}sect1`} className="arrow__btn">‹</a>
                {data.slice(5, 10).map(d => {
                    switch (props.title) {
                        case "Popular":
                            imageURL = d.image.medium;
                            showID = d.externals.imdb
                            break;
                        case "Airing":
                            imageURL = d.show.image.medium;
                            showID = d.show.externals.imdb
                            break;
                        case "Top Rated":
                            imageURL = d.image.medium;
                            showID = d.externals.imdb;
                            break;
                    }
                    return <div key={d.id} className="item"><Link to={"/show/" + showID}><img src={imageURL} /></Link></div>
                })}
                <a href={`#${props.value}sect3`} className="arrow__btn">›</a>
            </section>


            <section id={`${props.value}sect3`}>
                <a href={`#${props.value}sect2`} className="arrow__btn">‹</a>
                {data.slice(15, 20).map(d => {
                    {/* console.log(d) */ }
                    switch (props.title) {
                        case "Popular":
                            imageURL = d.image.medium;
                            showID = d.externals.imdb
                            break;
                        case "Airing":
                            imageURL = d.show.image.medium;
                            showID = d.show.externals.imdb
                            break;
                        case "Top Rated":
                            imageURL = d.image.medium;
                            showID = d.externals.imdb;
                            break;
                    }
                    return <div key={d.id} className="item"><Link to={"/show/" + showID}><img src={imageURL} /></Link></div>
                })}
                <a href={`#${props.value}sect1`} className="arrow__btn">›</a>
            </section>

        </div>
    </div>


}
export default Carousel;