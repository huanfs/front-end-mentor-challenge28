
import ellipsis from "../assets/images/icon-ellipsis.svg";

import "./stats_card.scss";

const Stats_card = ({data, img, color, period}) => {
    return(
        <>
            {data && data.map((i, index)=>{
                return(
                <section className="stats" key={index}>
                    <article  className="bg" style={{backgroundColor:color[index]}}>
                        <img src={img[index]}/>
                    </article>
                    <article className="data">
                        <article className="action">
                            <h3>{data[index].title}</h3>
                            <img src={ellipsis}/>
                        </article>
                        <article className="time">
                            <h2>
                                {period=="daily" && (
                                    data[index].timeframes.daily.current
                                )}
                                {period=="weekly" && (
                                    data[index].timeframes.weekly.current
                                )}
                                {period=="monthly" && (
                                    data[index].timeframes.monthly.current
                                )}
                            </h2>
                            <p>
                                Last
                                {period=="daily" && (
                                    <>
                                    <span>{data[index].timeframes.daily.previous}</span>
                                    days
                                    </>
                                )}


                                {period=="weekly" && (
                                     <>
                                     <span>{data[index].timeframes.weekly.previous}</span>
                                     weeks
                                     </>
                                )}



                                {period=="monthly" && (
                                    <>
                                    <span>{data[index].timeframes.monthly.previous}</span>
                                    months
                                    </>
                                )}
                            </p>
                        </article>
                    </article>
                </section>
                )
            })}
        </>
    )
}

export default Stats_card;