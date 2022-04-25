import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import PongDownload from "../../components/home/PongDownload";
import Pong from "../threejs/3DPong";
import "./home.scss";
import Start from "../../components/home/Start";
import Registration from "../../components/home/Multiplayer";
import Header from "../../components/home/Header";

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //const tl = gsap.timeline();

    //let section = gsap.utils.toArray(".screen");

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

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
    /* gsap.from("#start-phone", {
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
    }); */

    //CONTAINER 1
    /* ScrollTrigger.create({
      animation: gsap
        .timeline()
        .from("#start-phone", {
          x: -200,
          opacity: 0,
        })
        .from("#pong-text", {
          ease: "none",
          x: 200,
          opacity: 0,
        }),
      trigger: "#start",
      start: "top",
      end: "bottom",
      scrub: true,
      markers: true,
      pin: true,
    }); */

    //CONTAINER 2
    /*  ScrollTrigger.create({
      animation: gsap
        .timeline()
        .from("#registration-phone", {
          y: 400,
          opacity: 0,
        })
        .from("#registration-text", {
          ease: "none",
          x: 200,
          opacity: 0,
        }),
      trigger: "#registration",
      start: "top",
      end: "bottom",
      scrub: true,
      markers: true,
      pin: true,
    }); */

    //PONG CONTAINER
    /* ScrollTrigger.create({
      animation: gsap
        .timeline()
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
        .to(
          ".pong-container #bottom-rectangular",
          { width: 500, duration: 1 },
          7
        )
        .to(
          ".pong-container #bottom-rectangular",
          { width: 400, duration: 1 },
          8
        )
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
        }),
      trigger: ".pong-container",
      start: "top",
      end: "+=10000",
      scrub: true,
      pin: ".pong-container",
      markers: true,
    }); */
  }, []);

  return (
    <div className="home">
      <Header />

      <Start />

      <Registration />

      <PongDownload />

      {/* <div
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
      </div> */}
    </div>
  );
};

export default Home;
