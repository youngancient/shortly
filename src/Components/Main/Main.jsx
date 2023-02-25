import Button from "../Btn/Btn";
import Link from "../Link/Link";
import "./style.css";
import { useState } from "react";
import Stat from "../Stat/Stat";

const linkData = [
  {
    prevLink:
      "preVious link preVious link preVious link preVious link preVious link",
    newLink: "new link new link new link new link",
    id: 1,
  },
  {
    prevLink:
      "preVious link preVious link preVious link preVious link preVious link",
    newLink: "new link new link new link new link",
    id: 2,
  },
  {
    prevLink:
      "preVious link preVious link preVious link preVious link preVious link",
    newLink: "new link new link new link new link",
    id: 3,
  },
];
const statData = [
  {
    imgSrc: "/assets/recog.svg",
    alt: "recognition",
    head: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    id: 4,
  },
  {
    imgSrc: "/assets/record.svg",
    alt: "records",
    head: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    id: 5,
  },
  {
    imgSrc: "/assets/custom.svg",
    alt: "customize",
    head: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    id: 6,
  },
];

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
        <div className="second pad">
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
            {linkData.map((link) => (
              <Link
                prevLink={link.prevLink}
                newLink={link.newLink}
                key={link.id}
              />
            ))}
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
              {statData.map((stat) => (
                <Stat
                  img={stat.imgSrc}
                  alt={stat.alt}
                  head={stat.head}
                  text={stat.text}
                  key={stat.id}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="third">
          <h3>Boost your links today</h3>
          <div className="third-btn">
            <a href="#" className="">
              <Button />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
