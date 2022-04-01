import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "./home.scss";

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //const tl = gsap.timeline();

    //let section = gsap.utils.toArray(".screen");

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const headerTl = gsap.timeline();
    const headerTlScroll = gsap.timeline({ duration: 2 });

    /* gsap.utils.toArray(".header .white-ball").map((whiteBall: any) =>
      headerTl.to(whiteBall, { opacity: 0 }).to(whiteBall, {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        opacity: 1,
      })
    ); */

    headerTl
      .from(".header .white-ball, .header .white-rectangular", {
        opacity: 0,
        y: -200,
      })
      .from(".header img", {
        opacity: 0,
      })
      .to(".header img", {
        x: 200,
      })
      .from(".header #title", {
        opacity: 0,
        x: -200,
      });

    headerTlScroll.to(".header .white-ball, .header .white-rectangular", {
      x: 100,
      y: -100,
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

    ScrollTrigger.create({
      animation: headerTlScroll,
      trigger: ".header",
      start: "top",
      end: "bottom",
      scrub: true,
      markers: true,
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

    //CONTAINER
    gsap.from("#start-phone", {
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

    gsap.from("#pong-text", {
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

    //CONTAINER 2
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

    const pongTl = gsap.timeline();

    pongTl
      .to(
        ".pong-container #left-rectangular",
        {
          width: 300,
          height: 50,
          rotation: 90,
          x: -400,
          duration: 1,
          delay: 0,
        },
        1
      )
      .to(
        ".pong-container #right-rectangular",
        {
          x: 400,
          rotation: 90,
          duration: 1,
          delay: 0,
        },
        1
      )
      .to(
        ".pong-container .white-ball",
        {
          x: 350,
          y: 100,
          duration: 1,
          delay: 0,
        },
        2
      )
      .to(
        ".pong-container #right-rectangular",
        {
          y: 200,
          duration: 1,
          delay: 0,
        },
        2
      )
      .to(
        ".pong-container .white-ball",
        {
          x: -350,
          y: 150,
          duration: 1,
          delay: 0,
        },
        3
      )
      .to(
        ".pong-container #left-rectangular",
        {
          y: 100,
          duration: 1,
        },
        3
      )
      .to(
        ".pong-container #right-rectangular",
        {
          y: -200,
          duration: 1,
        },
        3
      )
      .to(
        ".pong-container .white-ball",
        {
          x: 0,
          y: 0,
          borderRadius: 12,
          duration: 1,
        },
        4
      )
      .to(
        ".pong-container #right-rectangular",
        {
          y: 300,
          duration: 1,
        },
        4
      )
      .to(
        ".pong-container .white-ball",
        {
          borderRadius: 0,
          duration: 1,
          delay: 1,
        },
        5
      )
      .to(
        ".pong-container .white-ball",
        {
          width: "90%",
          height: "90%",
          duration: 1,
        },
        5
      )
      .to(
        ".pong-container .white-rectangular",
        {
          transition: "0.3s",
          backgroundColor: "lightblue",
          zIndex: 1,
          duration: 1,
        },
        5
      )
      .to(".pong-container #left-rectangular", { y: -200 }, 6)
      .to(".pong-container #right-rectangular", { y: -200 }, 6)
      .to(
        ".pong-container #left-rectangular, .pong-container #right-rectangular",
        {
          rotation: 3600,
          duration: 1,
        },
        7
      )
      .from(
        ".pong-container #bottom-rectangular",
        { y: 200, opacity: 0, duration: 1 },
        7
      )
      .to(".pong-container #bottom-rectangular", { y: 200, duration: 1 }, 7)
      .to(".pong-container #bottom-rectangular", { width: 500, duration: 1 }, 7)
      .to(".pong-container #bottom-rectangular", { width: 400, duration: 1 }, 8)
      .to(
        ".pong-container #left-rectangular",
        { x: -170, y: 0, rotation: 3690, duration: 1 },
        8
      )
      .to(
        ".pong-container #right-rectangular",
        { x: 40, y: 0, width: 360, rotation: 3825, duration: 1 },
        8
      )
      .to(
        ".pong-container .white-rectangular",
        {
          width: 800,
          duration: 1,
          delay: 1,
        },
        9
      )
      .to(
        ".pong-container",
        {
          scale: 0.8,
          duration: 1,
          delay: 1,
        },
        9
      )
      .to(
        ".pong-container .white-rectangular",
        {
          width: 50,
          height: 50,
          duration: 1,
          delay: 2,
        },
        10
      )
      .to(
        ".pong-container #left-rectangular",
        { x: -100, duration: 2, delay: 2 },
        10
      )
      .to(
        ".pong-container #right-rectangular",
        { x: 100, y: 0, rotation: 3870, duration: 2, delay: 2 },
        10
      )
      .to(
        ".pong-container #bottom-rectangular",
        { x: 0, y: 0, duration: 2, delay: 2 },
        10
      )
      .to(
        ".pong-container .white-rectangular",
        {
          borderRadius: "50%",
          duration: 1,
          delay: 1,
        },
        11
      )
      .to(".pong-container", { scale: 1, duration: 1 }, 11)
      .to(".pong-container .white-rectangular", {
        y: 200,
        opacity: 0,
        duration: 1,
        delay: 1,
      })
      .to(".pong-container .white-ball", {
        width: "100%",
        height: "100%",
        duration: 1,
      });

    ScrollTrigger.create({
      animation: pongTl,
      trigger: ".pong-container",
      start: "1400",
      end: "12000",
      scrub: true,
      pin: ".container",
      markers: true,
      //toggleActions: "restart",
      //snap: 1,
    });
  }, []);

  return (
    <div className="home">
      <div className="header">
        <h1 id="title">PONG</h1>
        <img src={require("../../assets/images/pong/pong.png")} />
        <div
          className="white-ball white-ball-50"
          style={{ top: 300, right: 50 }}
        ></div>
        <div
          className="white-ball white-ball-100"
          style={{ top: 100, left: 200 }}
        ></div>
        <div
          className="white-ball white-ball-50"
          style={{ top: 700, left: 100 }}
        ></div>

        <div
          className="white-rectangular white-rectangular-50"
          style={{ bottom: 200, right: 200, rotate: "-36deg" }}
        ></div>
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
            <p>L'amato gioco in una veste tutta nuova.</p>
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
            <p>Prova la modalità multiplayer e divertiti con i tuoi amici!</p>
          </div>

          <img
            className="phone"
            id="registration-phone"
            src={require("../../assets/images/pong/match-point.png")}
          />
        </div>

        <div
          className="content-container pong-container"
          style={{ backgroundColor: "lightblue" }}
        >
          <div
            className="white-rectangular white-rectangular-50"
            id="left-rectangular"
            style={{ width: "600%", height: "100%" }}
          ></div>
          <div
            className="white-rectangular white-rectangular-50"
            id="right-rectangular"
          ></div>

          <div
            className="white-rectangular white-rectangular-50"
            id="bottom-rectangular"
          ></div>
          <div className="white-ball white-ball-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
