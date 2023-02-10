import Button from "../Btn/Btn";
import Link from "../Link/Link";
import "./style.css";

const Main = () => {
  return (
    <main>
      <div className="main">
        <div className="hero">
          <div className="hero-img">
            <img
              src="/assets/illustration-working.svg"
              alt="hero work image"
              className=""
            />
          </div>
          <div className="hero-text">
            <div className="text">
              <h1>More than just shorter links</h1>
              <p>
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </p>
              <div className="hero-btn">
                <a href="#" className="">
                  <Button />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="second pad bdr">
          <div className="shorten">
            <form className="">
              <div className="cont">
                <div className="input">
                  <input
                    type="url"
                    name="url"
                    id=""
                    placeholder="shorten a link here"
                  />
                </div>
                {/* <p className="error mobile">Please add a link</p> */}
                <div className="short-btn">
                  <button type="submit">Shorten It!</button>
                </div>
              </div>
              {/* <p className="error desktop">Please add a link</p> */}
            </form>
          </div>
            <div className="short-links">
              <Link />
              <Link />
              <Link />
            </div>
          <div className="below-shorten">
            <div className="bs1">
            <h3>Advanced Statistics</h3>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
            </div>
            <div className="bs2">
              components here
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
