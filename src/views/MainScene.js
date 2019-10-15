import React, { useRef, Suspense } from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import { CameraHelper } from 'three';

import Light from '../components/Lights';
import Stars from '../components/Stars';
import CelestialObject from '../components/CelestialObject';
import FallbackMesh from '../components/FallbackMesh';

import SunTexture from '../assets/sun.jpg';
import MercuryTexture from '../assets/mercury.jpg';
import VenusTexture from '../assets/venus.jpg';
import EarthTexture from '../assets/earth.jpg';
import MarsTexture from '../assets/mars.jpg';
import JupiterTexture from '../assets/jupiter.jpg';
import SaturnTexture from '../assets/saturn.jpg';
import UranusTexture from '../assets/uranus.jpg';
import NeptuneTexture from '../assets/neptune.jpg';

function MainScene() {
  const sunRef = useRef();
  const mercuryRef = useRef();
  const venusRef = useRef();
  const earthRef = useRef();
  const marsRef = useRef();
  const jupiterRef = useRef();
  const saturnRef = useRef();
  const uranusRef = useRef();
  const neptuneRef = useRef();

  const { camera, scene } = useThree();

  camera.fov = 45;
  camera.aspect = (window.innerWidth / window.innerHeight) * 0.5;
  camera.near = 0.1;
  camera.far = 10000;

  camera.position.y = 100;
  camera.position.z = 500;
  camera.rotation.y = Math.PI;

  useFrame(({ scene }, delta) => {
    scene &&
      scene.children
        .filter(element => element.type === 'Mesh')
        .forEach(element => {
          element.rotation.y += delta / 2;
        });
  });

  // const cameraHelper = new CameraHelper(camera);
  // scene.add(cameraHelper);

  return (
    <>
      <Light color={0xffffff} />
      <Stars />
      <Suspense fallback={<FallbackMesh />}>
        <CelestialObject
          setRef={sunRef}
          position={[0, 5, 0]}
          scale={110}
          textureURL={SunTexture}
        />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <CelestialObject
          setRef={mercuryRef}
          position={[130, 5, 0]}
          scale={0.38}
          textureURL={MercuryTexture}
        />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <CelestialObject
          setRef={venusRef}
          position={[140, 5, 0]}
          scale={0.94}
          textureURL={VenusTexture}
        />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <CelestialObject
          setRef={earthRef}
          position={[150, 5, 0]}
          scale={1}
          textureURL={EarthTexture}
        />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <CelestialObject
          setRef={marsRef}
          position={[160, 5, 0]}
          scale={0.53}
          textureURL={MarsTexture}
        />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <CelestialObject
          setRef={jupiterRef}
          position={[190, 5, 0]}
          scale={11}
          textureURL={JupiterTexture}
        />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <CelestialObject
          setRef={saturnRef}
          position={[250, 5, 0]}
          scale={9.1}
          textureURL={SaturnTexture}
        />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <CelestialObject
          setRef={uranusRef}
          position={[300, 5, 0]}
          scale={3.9}
          textureURL={UranusTexture}
        />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <CelestialObject
          setRef={neptuneRef}
          position={[350, 5, 0]}
          scale={3.8}
          textureURL={NeptuneTexture}
        />
      </Suspense>
    </>
  );
}

export default MainScene;
