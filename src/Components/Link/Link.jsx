import LinkButton from "./LinkBtn";
import "./style.css";
import { useState } from "react";


const Link = ({prevLink , newLink}) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = (e)=>{
    setIsCopied(true);

  }
  return (
    <div className="link">
      <div className="l-one">
        <p>
          { prevLink }
        </p>
      </div>
      <div className="l-two">
        <a href="#" className="">
          { newLink }
        </a>
        <div className="link-btn">
          <LinkButton isCopied={isCopied} handleCopy={handleCopy} />
        </div>
      </div>
    </div>
  );
};

export default Link;
