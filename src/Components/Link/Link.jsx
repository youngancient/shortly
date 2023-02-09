import LinkButton from "./LinkBtn";
import "./style.css";

const Link =()=>{
    return(
        <div className="link">
            <div className="l-one">
                <p>preVious link</p>
            </div>
            <div className="l-two">
                <a href="#" className="">shortened link</a>
                <LinkButton />
            </div>
        </div>
    )
}

export default Link;