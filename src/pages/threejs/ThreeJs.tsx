import { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { GUI } from "dat.gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const ThreeJs = () => {
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

    const loader = new GLTFLoader();

    //loadModel(loader);
    let model: any;
    const MODEL_PATH = require("./prestat2.glb");

    //"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/chair.glb";

    loader.load(
      MODEL_PATH,

      (gltf) => {
        model = gltf.scene;

        // Set the models initial scale
        model.scale.set(4, 4, 4);
        model.position.set(0, 0, 0);
        model.rotation.set(0.5, -1, 0);

        // Add the model to the scene
        const modelFolder = gui.addFolder("3D Model");
        modelFolder.add(model.position, "x", -5, 20);
        modelFolder.add(model.position, "y", -5, 20);
        modelFolder.add(model.position, "z", -5, 20);
        modelFolder.add(model.rotation, "x", -5, 20);
        modelFolder.add(model.rotation, "y", -5, 20);
        modelFolder.add(model.rotation, "z", -5, 20);
        modelFolder.open();

        //GSAP
        gsap.to(model.rotation, {
          x: 1,
          y: -2,
          scrollTrigger: {
            trigger: ".threejsContainer",
            start: "top",
            end: "bottom",
            scrub: true,
            markers: true,
            pin: true,
          },
        });

        scene.add(model);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 5, 10);
    scene.add(light);

    const pointLight = new THREE.PointLight();
    //scene.add(pointLight);

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

    const box = new THREE.Mesh(geometry, material);
    //scene.add(box);

    camera.position.set(0, 0, 2);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    const lightPointFolder = gui.addFolder("Light POINT");
    lightPointFolder.add(pointLight.position, "x", -5, 10);
    lightPointFolder.add(pointLight.position, "y", -5, 10);
    lightPointFolder.add(pointLight.position, "z", -5, 10);
    lightPointFolder.open();
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

    gui.destroy();

    /* const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enabled = true;
    controls.target.set(0, 0, 0); */

    animate();

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

  return (
    <div className="container">
      <h1>3D MODEL</h1>
      <div className="threejsContainer"></div>
      <div>
        <h1>Paragraph</h1>
        <p>
          lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit
          amet, consectetur adiplorem ipsum dolor sit amet, consectetur
          adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit
          amet, consectetur adiplorem ipsum dolor sit amet, consectetur
          adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit
          amet, consectetur adiplorem ipsum dolor sit amet, consectetur
          adiplorem ipsum dolor sit amet, consectetur adip
        </p>
      </div>
    </div>
  );
};

export default ThreeJs;
