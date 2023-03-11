import "./style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const statVariants = {
  initial :{
    scale : 0.8,
  },
  final:{
    scale : 1,
    transition :{
      duration : 1.5
    }
  }
}

const Stat = ({ img, alt, head, text }) => {
  return (
    <motion.div className="stat"
    variants={statVariants}
    initial = "initial"
    whileInView= "final"
    viewport={{once : true}}
    >
      <div className="img">
        <img src={img} alt={alt} className="" />
      </div>
      <div className="b">
        <h4>{head}</h4>
        <p>{text}</p>
      </div>
    </motion.div>
  );
};

export default Stat;
