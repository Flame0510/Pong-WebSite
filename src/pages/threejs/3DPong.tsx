import { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { GUI } from "dat.gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Pong = () => {
  useEffect(() => {
    const vertexShader = () => {
      return `
        varying vec3 vUv; 
    
        void main() {
          vUv = position; 
    
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewPosition; 
        }
      `;
    };

    const fragmentShader = () => {
      return `
      uniform vec3 colorA; 
      uniform vec3 colorB; 
      varying vec3 vUv;
  
      void main() {
        gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);
      }
  `;
    };

    //THREE JS
    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      /* alpha: true,  */ antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.querySelector(".threejsContainer");

    container!.append(renderer.domElement);

    const gui = new GUI();

    /* const loader = new GLTFLoader();

    loader.load(require("./prestat-open-correct-gold.glb"), (glb) =>
      scene.add(glb.scene)
    ); */

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 0, -1);
    scene.add(light);

    let uniforms = {
      colorB: { type: "vec3", value: new THREE.Color("#ccc") },
      colorA: { type: "vec3", value: new THREE.Color("#fff") },
    };

    const geometry = new THREE.BoxGeometry();

    const material = new THREE.MeshToonMaterial();
    //const material = new THREE.MeshPhysicalMaterial({ color: "#fff" });

    /* const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      fragmentShader: fragmentShader(),
      vertexShader: vertexShader(),
    }); */

    const topWall = new THREE.Mesh(geometry, material);
    topWall.scale.set(50, 0.5, 0.5);
    topWall.position.set(0, 5, 0);
    scene.add(topWall);

    const bottomWall = new THREE.Mesh(geometry, material);
    bottomWall.scale.set(50, 0.5, 0.5);
    bottomWall.position.set(0, -5, 0);
    scene.add(bottomWall);

    const leftRectangular = new THREE.Mesh(geometry, material);
    leftRectangular.scale.set(0.5, 3, 0.5);
    leftRectangular.position.x = -5;
    leftRectangular.position.y = -3;
    scene.add(leftRectangular);

    const rightRectangular = new THREE.Mesh(geometry, material);
    rightRectangular.scale.set(0.5, 3, 0.5);
    rightRectangular.position.x = 5;
    rightRectangular.position.y = -2;
    scene.add(rightRectangular);

    const ball = new THREE.Mesh(new THREE.SphereGeometry(), material);

    ball.scale.set(0.5, 0.5, 0.5);

    ball.position.x = -2;
    ball.position.y = -2;
    scene.add(ball);

    const cameraZ = 18 - window.innerWidth / 300;
    console.log("CAMERA Z: ", cameraZ);

    camera.position.set(-4, 0, cameraZ);
    camera.rotation.y = -0.3;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    const ballFolder = gui.addFolder("Ball");
    ballFolder.add(ball.position, "x", -5, Math.PI * 2);
    ballFolder.add(ball.position, "y", -5, Math.PI * 2);
    ballFolder.add(ball.position, "z", -5, Math.PI * 2);
    ballFolder.open();
    const lightFolder = gui.addFolder("Light");
    lightFolder.add(light.position, "x", -5, 10);
    lightFolder.add(light.position, "y", -5, 10);
    lightFolder.add(light.position, "z", -5, 10);
    lightFolder.open();
    const cameraFolder = gui.addFolder("Camera");
    cameraFolder.add(camera.position, "x", -10, 10);
    cameraFolder.add(camera.position, "y", -10, 10);
    cameraFolder.add(camera.position, "z", -10, 10);
    cameraFolder.add(camera.rotation, "x", -10, 10);
    cameraFolder.add(camera.rotation, "y", -10, 10);
    cameraFolder.add(camera.rotation, "z", -10, 10);
    cameraFolder.open();

    /* const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enabled = true;
    controls.target.set(0, 0, 0); */

    animate();

    const tl = gsap.timeline();

    gsap.registerPlugin(ScrollTrigger);

    //tl.duration(20);

    tl.to(
      rightRectangular.position,
      {
        y: 1,
        duration: 2,
      },
      0
    )
      .to(
        ball.position,
        {
          x: 4.25,
          y: 0,
          duration: 1,
        },
        0
      )
      .to(leftRectangular.position, { y: 2, duration: 1 }, 1)
      .to(
        ball.position,
        {
          x: -4.25,
          y: 2,
          duration: 1,
        },
        1
      )
      .to(
        ball.position,
        {
          x: -1,
          y: 4.25,
          duration: 1,
        },
        2
      )
      .to(
        ball.position,
        {
          x: 4.25,
          y: -2,
          duration: 1,
        },
        3
      )
      .to(
        rightRectangular.position,
        {
          y: -3,
          duration: 1,
        },
        3
      )
      .to(
        ball.position,
        {
          x: 1,
          y: -4.25,
          duration: 1,
        },
        4
      )
      .to(
        ball.position,
        {
          x: -10,
          y: 3,
          duration: 3,
        },
        5
      )
      .to(
        leftRectangular.position,
        {
          y: -3,
          duration: 1,
        },
        5
      )
      .to(
        rightRectangular.position,
        {
          y: 2,
          duration: 2,
        },
        5
      );
    /* .to(
        ball.position,
        {
          x: 4.25,
          y: -1,
          duration: 1,
        },
        1
      )
      .to(
        rightRectangular.position,
        {
          y: -2,
          duration: 1,
        },
        1
      ); */
    
    tl.duration(5);
    tl.delay(0);
    //tl.play();

    ScrollTrigger.create({
      trigger: "canvas",
      animation: tl,
      start: "top",
      end: "bottom",
      scrub: true,
      markers: true,
      pin: true,
    });

    const cameraTl = gsap.timeline();

    cameraTl
      .from(
        camera.position,
        {
          z: 0,
          duration: 1,
        },
        0
      )
      .to(
        camera.position,
        {
          x: 4,
          duration: 1,
        },
        1
      )
      .to(
        camera.rotation,
        {
          y: 0.3,
          duration: 1,
        },
        1
      );

    cameraTl.duration(5);
    //cameraTl.play();

    ScrollTrigger.create({
      trigger: "canvas",
      animation: cameraTl,
      start: "top",
      end: "bottom",
      scrub: true,
      markers: true,
      pin: true,
    });

    function resizeRendererToDisplaySize(container: any, renderer: any) {
      const canvas = container;
      var width = window.innerWidth;
      var height = window.innerHeight;
      var canvasPixelWidth = canvas.width / window.devicePixelRatio;
      var canvasPixelHeight = canvas.height / window.devicePixelRatio;

      renderer.setSize(width, height, false);
    }

    const setSize = (container: any, camera: any, renderer: any) => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener("resize", () =>
      //setSize(container, camera, renderer)
      //resizeRendererToDisplaySize(container, renderer)
      renderer.setSize(window.innerWidth, window.innerHeight, false)
    );
  }, []);

  return <div className="threejsContainer"></div>;
};

export default Pong;
