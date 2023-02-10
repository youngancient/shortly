import LinkButton from "./LinkBtn";
import "./style.css";

const Link = () => {
  return (
    <div className="link bdr">
      <div className="l-one bdr">
        <p>
          preVious link preVious link preVious link preVious link preVious link
        </p>
      </div>
      <div className="l-two bdr">
        <a href="#" className="">
          shortened link shortened link shortened link
        </a>
        <div className="link-btn">
          <LinkButton />
        </div>
      </div>
    </div>
  );
};

export default Link;
