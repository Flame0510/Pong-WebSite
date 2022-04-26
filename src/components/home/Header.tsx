import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Header = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headerTl = gsap.timeline();
    const headerTlScroll = gsap.timeline({ duration: 2 });

    headerTl
      .from(".header .white-ball, .header .white-rectangular", {
        opacity: 0,
        stagger: 0.2,
        y: -200,
      })
      .from(
        ".header img",
        {
          x: 200,
          opacity: 0,
        },
        "title-image"
      )
      .from(
        ".header .title",
        {
          x: -200,
          opacity: 0,
        },
        "title-image"
      );

    headerTlScroll.to(".header .white-ball, .header .white-rectangular", {
      x: 100,
      y: -100,
    });

    gsap.to(".header .title, .header img", {
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
      //markers: true,
    });
  }, []);
  return (
    <div className="header">
      <h1 className="title">PONG</h1>

      <img
        className="pong-image"
        src={require("../../assets/images/pong/pong.png")}
      />
      <div className="background-items-container">
        <div className="white-ball white-ball-50"></div>
        <div className="white-ball white-ball-100"></div>
        <div className="white-ball white-ball-50"></div>

        <div className="white-rectangular white-rectangular-50"></div>
      </div>
    </div>
  );
};

export default Header;
