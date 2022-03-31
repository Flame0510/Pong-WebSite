import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { start } from "repl";
import "./home.scss";

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //const tl = gsap.timeline();

    //let section = gsap.utils.toArray(".screen");

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const headerTl = gsap.timeline();
    headerTl
      .to(".header img", {
        opacity: 0,
        x: -150,
      })
      .from(".header img", {
        opacity: 0,
      })
      .to(".header img", {
        x: 0,
      })
      .from(".header #title", {
        x: -200,
        opacity: 0,
      });

    gsap.to(".header #title, .header img", {
      y: 600,
      scrollTrigger: {
        trigger: ".header",
        start: "top",
        end: "bottom",
        scrub: true,
      },
    });

    /* gsap.to(".container", {
      y: "-100vh",
      scrollTrigger: {
        trigger: ".header",
        start: "top",
        end: "bottom",
        scrub: true,
        //markers: true,
      },
    }); */

    //const startTl = gsap.timeline({duration: 2});

    /* gsap.to("#start", {
      scrollTrigger: {
        trigger: "#start",
        start: "-" + windowHeight,
        end: "bottom",
        //markers: true,
        scrub: true,
        pin: ".container",
      },
    }); */

    //PHONE
    gsap.to("#start-phone", {
      ease: "power1.out",
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".container",
        start: "top",
        end: "600",
        scrub: true,
        markers: true,
        pin: ".container",
      },
    });

    //PONG
    gsap.to("#pong-text", {
      ease: "none",
      x: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".container",
        start: "top",
        end: "600",
        scrub: true,
      },
    });

    //PHONE 2
    gsap.from("#registration", {
      scrollTrigger: {
        trigger: "#registration",
        start: "600",
        end: "1400",
        markers: true,
        scrub: true,
        pin: ".container",
      },
    });

    gsap.from("#registration-phone", {
      y: 400,
      opacity: 0,
      scrollTrigger: {
        trigger: "#registration",
        start: "600",
        end: "900",
        //markers: true,
        scrub: true,
        //pin: ".container",
      },
    });

    gsap.to("#registration-phone", {
      scrollTrigger: {
        trigger: "#registration",
        start: "900",
        end: "1200",
        //markers: true,
        scrub: true,
      },
    });

    gsap.from("#registration-text", {
      ease: "none",
      x: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: "#registration",
        start: "900",
        end: "1200",
        //markers: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="home">
      <div className="header">
        <h1 id="title">PONG</h1>
        <img src={require("../../assets/images/pong/pong.png")} />
      </div>

      <div className="container">
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
            <p>
              Il vecchio gioco in una veste nuova e con funzioni degne di un
              gioco recente.
            </p>
          </div>
        </div>

        <div
          className="content-container"
          id="registration"
          style={{ color: "#fff", backgroundColor: "#8c52ff" }}
        >
          <div className="text text-right" id="registration-text">
            <h2>Gioca con i tuoi amici</h2>
            <h3>Ovunque tu sia!</h3>
            <p>
              Prova la modalità multiplayer e divertiti con i tuoi amici!
            </p>
          </div>

          <img
            className="phone"
            id="registration-phone"
            src={require("../../assets/images/pong/match-point.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
