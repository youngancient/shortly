import "./style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const statVariants = {
  initial :{
    scale : 0,
    opacity: 0,
    originY : "-10px"
  },
  final:{
    scale : 1,
    opacity : 1,
    transition :{
      duration : 2
    }
  }
}

const Stat = ({ img, alt, head, text }) => {
  const { ref: statRef, inView: statInView } = useInView();
  return (
    <motion.div className="stat"
    variants={statVariants}
    initial = "initial"
    animate = {statInView ? "final" : ""}
    ref={statRef}
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
