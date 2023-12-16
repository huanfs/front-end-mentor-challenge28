
import ellipsis from "../assets/images/icon-ellipsis.svg";

import "./stats_card.css";

const Stats_card = ({data, img, color, period}) => {
    return(
        <div>
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
                                    <span>days - </span>
                                    {`${data[index].timeframes.daily.previous} hrs`}
                                    </>
                                )}


                                {period=="weekly" && (
                                     <>
                                     <span>weeks - </span>
                                     {`${data[index].timeframes.weekly.previous}`}
                                     </>
                                )}



                                {period=="monthly" && (
                                    <>
                                    <span>months - </span>
                                    {`${data[index].timeframes.monthly.previous}`}
                                    </>
                                )}
                            </p>
                        </article>
                    </article>
                </section>
                )
            })}
        </div>
    )
}

export default Stats_card;