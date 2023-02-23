import "./style.css";
const Stat = ({ img, alt, head, text }) => {
  return (
    <div className="stat bdr">
      <div className="img bdr">
        <img src={img} alt={alt} className="" />
      </div>
      <div className="b">
        <h4>{head}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Stat;
