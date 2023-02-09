import { useState } from 'react'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import './App.css'
import { motion, AnimatePresence } from "framer-motion";


function App() {
  const [isClicked, setClick] = useState(false);
  return (
    <div className="App">
      <Header setClick={setClick} isClicked={isClicked} />
      <Main />
      <Footer />
    </div>
  )
}


export default App
