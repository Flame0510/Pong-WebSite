import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Multiplayer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      animation: gsap
        .timeline()
        .from("#multiplayer-phone", {
          y: 400,
          opacity: 0,
        })
        .from("#multiplayer-text", {
          x: -200,
          opacity: 0,
        })
        .to("#multiplayer", {
          opacity: 0,
          delay: 1,
        }),
      trigger: "#multiplayer",
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
      id="multiplayer"
      style={{ color: "#fff", backgroundColor: "#8c52ff" }}
    >
      <div className="text text-right" id="multiplayer-text">
        <h2>Gioca con i tuoi amici</h2>
        <h3>Ovunque tu sia!</h3>
        <p>Prova la modalità multiplayer e divertiti con i tuoi amici!</p>
      </div>

      <img
        className="phone"
        id="multiplayer-phone"
        src={require("../../assets/images/pong/match-point.png")}
      />
    </div>
  );
};

export default Multiplayer;
