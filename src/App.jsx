import { useState, useEffect, useRef } from "react"
import './App.css'
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
  /*states for ammounts*/
  const[period,setPeriod] = useState("daily");
  /*const with respectively: colors and images*/
  const colors = ["var(--LightOrange", "var(--SoftBlue", 
  "var(--LightRed)","var(--LimeGreen)","var(--Violet)","var(--SoftOrange)"]
  
  const imgs = [icon_work, icon_play, icon_study, icon_exercise, icon_social, icon_self_care];
  function changePeriod({target}){
    setPeriod(target.innerHTML);
  }
  useEffect(()=>{
    try{
        fetch("./data.json")
        .then(response=>response.json())
        .then(data=>{setResults(data); console.log(data)})
    }
    catch{
        console.log("erro inesperado, tente novamente")
    }
  },[])
  return (
    <>
     <Profile_card action={changePeriod}/>
     <Stats_card data={results} img={imgs} color={colors} period={period} change={setPeriod} />
    </>
  )
}

export default App
