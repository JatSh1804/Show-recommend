import { React } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Homepage from "../pages/homepage";

function Nav(props) {
    return <nav style={navStyle}>
        <div className="logoDiv">
            <Link to="/"><img className="logo" src="../img/logo-transparent-svg.svg" style={{ height: "80px" }}></img></Link>
            {/* <span>Show Bizz</span> */}
        </div>
        <ul style={listStyle} >
            <li onClick={onclick} value={"AirNow"}>Air Now</li>
            <li onClick={onclick} value={"Popular"}>Popular</li>
            <li onClick={onclick} value={"Recommendation"}>Recommendation</li>

        </ul>
        <ul style={listStyle}>
            {/* <li>
                <form onsubmit="event.preventDefault();" role="search">
                    <label for="search">Search for stuff</label>
                    <input id="search" type="search" placeholder="Search..." autofocus required />
                    <button type="submit">Go</button>
                </form>
            </li> */}
            <li>Tickets</li>
        </ul>


    </nav>

}
export default Nav;
const navStyle = {
    display: "flex",
    justifyContent: "space-between"
}
const listStyle = {
    display: "flex",
    justifyContent: "space-between"
}
function onclick(event) {
    console.log()
    document.querySelector("#" + event.target.getAttribute('value')).scrollIntoView({
        behavior:"auto",
        block:"center",
        inline:'center'
    })

    // window.scrollTo({
    //     behavior: "smooth",
    //     top: document.querySelector("#" + event.target.getAttribute('value')).offsetTop
    // })

}
