import profile_picture from "../assets/images/image-jeremy.png";
import "./profile_style.css";
const Profile_card = (props) => {
    return(
        <section className="profile">
            <article className="myProfile">
                <img src={profile_picture}/>
                <div className="informations">
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </article>
            <article className="profileInfos">
                <p onClick={props.action}>daily</p>
                <p onClick={props.action}>weekly</p>
                <p onClick={props.action}>monthly</p>
            </article>
        </section>
    )
}

export default Profile_card;