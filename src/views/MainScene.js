import React, { useRef, Suspense } from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import { CameraHelper, DoubleSide } from 'three';

import Light from '../components/Lights';
import CelestialObject from '../components/CelestialObject';
import FallbackMesh from '../components/FallbackMesh';
import Stars from '../components/Stars';

import SunTexture from '../assets/sun.jpg';
import MercuryTexture from '../assets/mercury.jpg';
import VenusTexture from '../assets/venus.jpg';
import EarthTexture from '../assets/earth.jpg';
import MarsTexture from '../assets/mars.jpg';
import JupiterTexture from '../assets/jupiter.jpg';
import SaturnTexture from '../assets/saturn.jpg';
import UranusTexture from '../assets/uranus.jpg';
import NeptuneTexture from '../assets/neptune.jpg';
import EarthSkyBox from '../components/EarthSkybox';
import Spaceship from '../components/Spaceship';

function MainScene() {
  const sunRef = useRef();
  const mercuryOrbitRef = useRef();
  const mercuryRef = useRef();
  const venusOrbitRef = useRef();
  const venusRef = useRef();
  const earthOrbitRef = useRef();
  const earthRef = useRef();
  const marsOrbitRef = useRef();
  const marsRef = useRef();
  const jupiterOrbitRef = useRef();
  const jupiterRef = useRef();
  const saturnOrbitRef = useRef();
  const saturnRef = useRef();
  const uranusOrbitRef = useRef();
  const uranusRef = useRef();
  const neptuneOrbitRef = useRef();
  const neptuneRef = useRef();

  const { camera, scene, clock } = useThree();

  camera.fov = 180;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 20000;

  camera.position.y = 0;
  camera.position.z = 550;
  camera.rotation.y = Math.PI;

  useFrame(({ scene }, delta) => {
    if (sunRef.current) sunRef.current.rotation.y += delta / 100;

    if (mercuryOrbitRef.current)
      mercuryOrbitRef.current.rotation.y += delta / 0.88;
    if (mercuryRef.current) mercuryRef.current.rotation.y += delta / 58.6;

    if (venusOrbitRef.current) venusOrbitRef.current.rotation.y += delta / 2.55;
    if (venusRef.current) venusRef.current.rotation.y += delta / 243;

    if (earthOrbitRef.current) earthOrbitRef.current.rotation.y += delta / 3.65;
    if (earthRef.current) earthRef.current.rotation.y += delta / 0.99;

    if (marsOrbitRef.current) marsOrbitRef.current.rotation.y += delta / 6.86;
    if (marsRef.current) marsRef.current.rotation.y += delta / 1.03;

    if (jupiterOrbitRef.current)
      jupiterOrbitRef.current.rotation.y += delta / 43.28;
    if (jupiterRef.current) jupiterRef.current.rotation.y += delta / 0.41;

    if (saturnOrbitRef.current)
      saturnOrbitRef.current.rotation.y += delta / 107.52;
    if (saturnRef.current) saturnRef.current.rotation.y += delta / 0.45;

    if (uranusOrbitRef.current)
      uranusOrbitRef.current.rotation.y += delta / 306.63;
    if (uranusRef.current) uranusRef.current.rotation.y += delta / 0.72;

    if (neptuneOrbitRef.current)
      neptuneOrbitRef.current.rotation.y += delta / 601.48;
    if (neptuneRef.current) neptuneRef.current.rotation.y += delta / 0.67;
  });

  // console.log(scene.getObjectByName('EarthSkybox'), scene);

  // const cameraHelper = new CameraHelper(camera);
  // scene.add(cameraHelper);

  return (
    <>
      <Light color={0xffffff} />
      <Stars />
      <Suspense fallback={<FallbackMesh />}>
        <object3D>
          <EarthSkyBox />
          {/* <Spaceship /> */}
        </object3D>
      </Suspense>
      {/* <Suspense fallback={<FallbackMesh />}>
        <CelestialObject
          setRef={sunRef}
          position={[0, 5, 0]}
          scale={110}
          textureURL={SunTexture}
        />
      </Suspense> */}
      {/* <object3D>
        <Suspense fallback={<FallbackMesh />}>
          <CelestialObject
            setRef={sunRef}
            position={[0, 5, 0]}
            scale={110}
            textureURL={SunTexture}
          />
        </Suspense>

        <object3D ref={mercuryOrbitRef}>
          <Suspense fallback={<FallbackMesh />}>
            <CelestialObject
              setRef={mercuryRef}
              position={[120, 5, 0]}
              scale={0.38}
              textureURL={MercuryTexture}
              // orbitRequired
            />
          </Suspense>
        </object3D>

        <object3D ref={venusOrbitRef}>
          <Suspense fallback={<FallbackMesh />}>
            <CelestialObject
              setRef={venusRef}
              position={[-130, 5, 40]}
              scale={0.94}
              textureURL={VenusTexture}
              // orbitRequired
            />
          </Suspense>
        </object3D>

        <object3D ref={earthOrbitRef}>
          <Suspense fallback={<FallbackMesh />}>
            <CelestialObject
              setRef={earthRef}
              position={[140, 5, 100]}
              scale={1}
              textureURL={EarthTexture}
            />
          </Suspense>
        </object3D>

        <object3D ref={marsOrbitRef}>
          <Suspense fallback={<FallbackMesh />}>
            <CelestialObject
              setRef={marsRef}
              position={[150, 5, -120]}
              scale={0.53}
              textureURL={MarsTexture}
            />
          </Suspense>
        </object3D>

        <object3D ref={jupiterOrbitRef}>
          <Suspense fallback={<FallbackMesh />}>
            <CelestialObject
              setRef={jupiterRef}
              position={[190, 5, 150]}
              scale={11}
              textureURL={JupiterTexture}
              // orbitRequired
            />
          </Suspense>
        </object3D>

        <object3D ref={saturnOrbitRef}>
          <Suspense fallback={<FallbackMesh />}>
            <CelestialObject
              setRef={saturnRef}
              position={[-250, 5, -170]}
              scale={9.1}
              textureURL={SaturnTexture}
              // orbitRequired
            />
          </Suspense>
        </object3D>

        <object3D ref={uranusOrbitRef}>
          <Suspense fallback={<FallbackMesh />}>
            <CelestialObject
              setRef={uranusRef}
              position={[-300, 5, 190]}
              scale={3.9}
              textureURL={UranusTexture}
              // orbitRequired
            />
          </Suspense>
        </object3D>

        <object3D ref={neptuneOrbitRef}>
          <Suspense fallback={<FallbackMesh />}>
            <CelestialObject
              setRef={neptuneRef}
              position={[350, 5, -210]}
              scale={3.8}
              textureURL={NeptuneTexture}
              // orbitRequired
            />
          </Suspense>
        </object3D>
      </object3D> */}
    </>
  );
}

export default MainScene;
