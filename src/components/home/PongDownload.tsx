import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMobile } from "./useMobile";

const PongDownload = () => {
  const isMobile  = useMobile();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //PONG CONTAINER
    const pongDownloadTl = gsap
      .timeline()
      .to(
        ".pong-container #left-rectangular",
        {
          width: 300,
          height: 50,
          x: isMobile ? -100 : -200,
          rotation: 90,
          duration: 1,
        },
        0
      )
      .to(
        ".pong-container #right-rectangular",
        {
          x: isMobile ? 100 : 200,
          rotation: 90,
          duration: 1,
        },
        0
      )

      .to(
        ".pong-container #white-ball",
        {
          x: isMobile ? 50 : 150,
          y: 100,
          duration: 1,
        },
        2
      )
      .to(
        ".pong-container #right-rectangular",
        {
          y: 200,
          duration: 1,
        },
        2
      )

      .to(
        ".pong-container #white-ball",
        {
          x: isMobile ? -50 : -150,
          y: 150,
          duration: 1,
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
        ".pong-container #white-ball",
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
        ".pong-container #white-ball",
        {
          borderRadius: 0,
          duration: 1,
          delay: 1,
        },
        5
      )
      .to(
        ".pong-container #white-ball",
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
          backgroundColor: "lightblue",
          transition: "0.3s",
          zIndex: 1,
          duration: 1,
        },
        5
      )

      .to(
        ".pong-container #left-rectangular",
        {
          y: 0,
          duration: 1,
        },
        6
      )
      .to(
        ".pong-container #right-rectangular",
        {
          y: 0,
          duration: 1,
        },
        6
      )

      .to(
        ".pong-container #left-rectangular",
        {
          width: 200,
          height: 28,
          x: 0,
          y: 14,
          rotation: 0,
          duration: 1,
        },
        7
      )
      .to(
        ".pong-container #right-rectangular",
        {
          width: 200,
          height: 28,
          x: 0,
          y: -14,
          rotation: 0,
          duration: 1,
        },
        7
      )

      .to(
        ".pong-container #left-rectangular, .pong-container #right-rectangular",
        {
          width: 150,
          duration: 1,
        },
        8
      )

      .to(
        ".pong-container #left-rectangular, .pong-container #right-rectangular",
        {
          opacity: 0,
          duration: 1,
        },
        9
      )
      .to(
        ".pong-container #download-btn",
        {
          display: "block",
          opacity: 1,
          zIndex: 10,
          duration: 1,
        },
        9
      )

      .to(
        ".pong-container #download-btn",
        {
          //scale: 1.5,
          //y: isMobile ? 120 : 150,
          y: 60,
          duration: 1,
        },
        10
      )

      .to(
        ".pong-container",
        {
          backgroundColor: "#d16691",
          duration: 1,
        },
        11
      )
      .from(
        ".pong-container #logo-img",
        {
          y: 100,
          scale: 0.8,
          opacity: 0,
          duration: 1,
        },
        11
      )
      .to(
        ".pong-container #download-btn",
        {
          backgroundColor: "#d16691",
          duration: 1,
        },
        11
      )
      .from(
        ".pong-container .background-white-ball-container .white-ball",
        {
          opacity: 0,
          backgroundColor: "#d16691",
          stagger: 0.4,
          duration: 1,
        },
        11
      );

    ScrollTrigger.create({
      animation: pongDownloadTl,
      trigger: ".pong-container",
      start: "top",
      end: "+=10000",
      scrub: true,
      pin: true,
      //markers: true,
    });

    /* gsap
      .timeline({ repeat: 100 })
      .to(
        ".pong-container .background-white-ball-container .white-ball",
        {
          x: 50,
          y: 50,
          stagger: 0.3,
          duration: 1,
        },
        0
      )
      .to(
        ".pong-container .background-white-ball-container .white-ball",
        {
          x: 0,
          y: 0,
          stagger: 0.3,
          duration: 1,
        },
        1
      ); */
  }, []);

  return (
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

      <div className="white-ball white-ball-50" id="white-ball"></div>
      <div className="background-white-ball-container">
        <div className="white-ball white-ball-50"></div>
        <div className="white-ball white-ball-50"></div>
        <div className="white-ball white-ball-100"></div>
        <div className="white-ball white-ball-50"></div>
      </div>

      <div className="download-container">
        <img
          src={require("../../assets/images/pong/logo.png")}
          id="logo-img"
          alt="logo-image"
        />

        <a
          href={require("../../assets/pong.apk")}
          className="download-btn"
          id="download-btn"
        >
          Scarica ora
        </a>
      </div>
    </div>
  );
};

export default PongDownload;
