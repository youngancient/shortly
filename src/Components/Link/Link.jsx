import LinkButton from "./LinkBtn";
import "./style.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Link = ({ prevLink, newLink }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = (e) => {
    if(isCopied == false){
      navigator.clipboard.writeText(newLink);
    }
    setIsCopied(true);
  };
  const truncate = (str, num) => {
    return str.length > num ? str.substring(0, num) + "..." : str;
  };
  const  linkVariants = {
    initial :{
      y: "50vh",
      opacity : 0,
    },
    final:{
      y : 0,
      opacity : 1,
      transition : {
        duration : 2,
      },
    }
  }
  return (
    <>
      {prevLink !== undefined ? (
        <motion.div className="link"
        variants= {linkVariants}
        initial = "initial"
        animate = "final"
        >
          <div className="l-one bdr">
            <p className="">
              {prevLink !== undefined ? truncate(prevLink, 65) : ""}
            </p>
          </div>
          <div className="l-two">
            <a href={newLink} className="" target="_blank">
              {newLink}
            </a>
            <div className="link-btn">
              <LinkButton isCopied={isCopied} handleCopy={handleCopy} />
            </div>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Link;
