import { useState, useEffect, useRef } from "react"
import './App.scss'
/*components*/
import Profile_card from "./components/profile_card.jsx";
import Stats_card from "./components/stats_card.jsx";
/*images*/
import icon_play from "./assets/images/icon-play.svg";
import icon_work from "./assets/images/icon-work.svg";
import icon_study from "./assets/images/icon-study.svg";
import icon_exercise from "./assets/images/icon-exercise.svg";
import icon_social from "./assets/images/icon-social.svg";
import icon_self_care from "./assets/images/icon-self-care.svg";
function App() {
  const[results, setResults] = useState();
  useEffect(()=>{
    try{
        const data = fetch("src/assets/data.json")
        .then(response=>response.json())
        .then(data=>{setResults(data); console.log(data)})
        .catch(err=>console.log(`Deu erro : ${err}`))
    }
    catch{
        console.log("CARALHO PUTA QUE PARIU")
    }
  },[])
  return (
    <>
     <Profile_card />
     <Stats_card data={results} img={icon_work} action="work" color="var(--LightOrange)"/>
     <Stats_card img={icon_play} action="play" color="var(--SoftBlue)"/>
     <Stats_card img={icon_study} action="study" color="var(--LightRed)"/>
     <Stats_card img={icon_exercise} action="exercise" color="var(--LimeGreen)"/>
     <Stats_card img={icon_social} action="social" color="var(--Violet)"/>
     <Stats_card img={icon_self_care} action="self care" color="var(--SoftOrange)"/>
    </>
  )
}

export default App
