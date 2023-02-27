import LinkButton from "./LinkBtn";
import "./style.css";
import { useState } from "react";


const Link = ({prevLink , newLink}) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = (e)=>{
    setIsCopied(true);

  }
  const truncate = (str, num) => {
    return str.length > num ? str.substring(0, num) + "..." : str;
  };
  return (
    <>
    {
      prevLink !== undefined
      ?
      <div className="link">
      <div className="l-one">
        <p className="">
          { prevLink !== undefined
          ? truncate(prevLink,65)
        : "" }
        </p>
      </div>
      <div className="l-two">
        <a href={newLink} className="" target="_blank">
          { newLink }
        </a>
        <div className="link-btn">
          <LinkButton isCopied={isCopied} handleCopy={handleCopy} />
        </div>
      </div>
    </div>
    : <></>
    }
    </>
  );
};

export default Link;
