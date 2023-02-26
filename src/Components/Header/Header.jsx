import "./style.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

const headerVariants = {
  initial: {
    y: "-30vh",
  },
  final: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};
const popupVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
const slideinVariants = {
  initial: {
    y: "120vh",
    scale : 0,
  },
  final: {
    y: "10vh",
    scale : 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    y: "120vh",
    scale : 0,
    transition: {
      duration: 1,
    },
  },
};

const Header = ({ setClick, isClicked }) => {
  const handleClick = () => {
    setClick(!isClicked);
  };
  let menuRef = useRef();
  useEffect(()=>{
    let handler =(e)=>{
      if(menuRef.current != undefined){
        if(!menuRef.current.contains(e.target)){
          setClick(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
  })
  return (
    <header className="">
      <motion.div
        className="header"
        variants={headerVariants}
        initial="initial"
        animate="final"
      >
        <div className="logo">
          <img src="/assets/logo.svg" alt="a logo" className="" />
        </div>
        <div className="not-logo desktop">
          <div className="desktop-links">
            <a href="#" className="">
              Features
            </a>
            <a href="#" className="">
              Pricing
            </a>
            <a href="#" className="">
              Resources
            </a>
          </div>
          <div className="d-links2">
            <a href="#" className="">
              Login
            </a>
            <div className="btn">
              <button>Sign Up</button>
            </div>
          </div>
        </div>
        <div className="tiles mobile">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"
          onClick={handleClick}
          >
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
            />
          </svg>
        </div>
      </motion.div>
      <AnimatePresence>
        {isClicked ? (
          <motion.div
            className="popup mobile"
            variants={popupVariants}
            initial="initial"
            animate="final"
            exit="exit"
            key="hinokami"
            >
            <motion.div
              className="slidein"
              variants={slideinVariants}
              initial="initial"
              animate="final"
              ref={menuRef}
              exit="exit"
              key="kagura"
            >
              <div className="a">
                <a href="#" className="">
                  Features
                </a>
              </div>
              <div className="a">
                <a href="#" className="">
                  Pricing
                </a>
              </div>
              <div className="a">
                <a href="#" className="">
                  Resources
                </a>
              </div>
              <hr />
              <div className="secnd">
                <div className="a">
                  <a href="#" className="">
                    Login
                  </a>
                </div>
                <div className="m-btn">
                  <button>Sign Up</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
