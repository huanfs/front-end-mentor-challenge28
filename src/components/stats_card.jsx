import { useState, useEffect, useRef } from "react";

import ellipsis from "../assets/images/icon-ellipsis.svg";
import "./stats_card.scss";

const Stats_card = (props) => {
    return(
       <section className="stats">
         <article className="bg" style={{backgroundColor:props.color}}>
            <img src={props.img}/>
        </article>
        <article className="data">
            <article className="action">
                <h3>{props.action}</h3>
                <img src={ellipsis}/>
            </article>
            <article className="time">
                <h2>34H</h2>
                <p>Last 2 weks</p>
            </article>
        </article>
       </section>
    )
}

export default Stats_card;