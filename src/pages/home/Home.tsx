import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./home.scss";

const Home = () => {
  let homeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".box",
      animation: gsap.to(".box", {
        x: 400, 
      }),
      start: "top",
      end: "end",
    });
  }, []);

  return (
    <div className="home" ref={homeRef}>
      <h1>HOME</h1>

      <div className="box"></div>
    </div>
  );
};

export default Home;
