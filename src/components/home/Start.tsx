import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Start = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      animation: gsap
        .timeline()
        .from("#start-phone", {
          x: -200,
          opacity: 0,
        })
        .from("#pong-text", {
          x: 200,
          opacity: 0,
        })
        .to("#start", {
          delay: 1,
        }),
      trigger: "#start",
      start: "top",
      end: "+=2000",
      scrub: true,
      //markers: true,
      pin: true,
    });
  }, []);

  return (
    <div
      className="content-container"
      id="start"
      //style={{ background: "yellow" }}
    >
      <img
        className="phone"
        id="start-phone"
        src={require("../../assets/images/pong/match.png")}
      />

      <div className="text" id="pong-text">
        <h2>Pong un classico!</h2>
        <p>L'amato gioco in una veste tutta nuova.</p>
      </div>
    </div>
  );
};

export default Start;
