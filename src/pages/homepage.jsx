import React from "react";
import { ReactDOM } from "react";
import Nav from "../components/nav";
import Carousel from "../components/carousels";
import Recommended from "../components/recommendation"


function Homepage() {
    const AllShows = "https://api.tvmaze.com/shows";
    const Airing = "https://api.tvmaze.com/schedule/";
    return <div>
        <Nav />
        <Carousel title="Top Rated" url={"https://api.tvmaze.com/shows?page=3"} value="TopRated" />
        <Recommended />
        <Carousel title="Popular" url={AllShows} value="Popular" />
        <Carousel title="Airing" url={Airing} value="Airing" />



    </div>
}
export default Homepage;