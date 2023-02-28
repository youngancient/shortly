import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useInView } from "react-intersection-observer";

const loaderVariant = {
  exit:{
    opacity: 0,
    transition :{
      duration : 2
    }
  }
}

function App() {
  const [isClicked, setClick] = useState(false);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="loader"
            variants={loaderVariant}
            key="hinokami"
            exit="exit"
          >
            <ScaleLoader color={"hsl(180, 66%, 49%)"} size={80} />
          </motion.div>
        ) : (
          <motion.div className="app-main"
          key= "kagura"
          >
            <Header setClick={setClick} isClicked={isClicked}  />
            <Main />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
