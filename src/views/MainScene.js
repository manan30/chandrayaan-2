import React, { useRef, Suspense } from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import { CameraHelper } from 'three';

import Light from '../components/Lights';
import CelestialObject from '../components/CelestialObject';
import FallbackMesh from '../components/FallbackMesh';

import SunTexture from '../assets/sun.jpg';

function MainScene() {
  const sunRef = useRef();

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
      <Suspense fallback={<FallbackMesh />}>
        <CelestialObject
          setRef={sunRef}
          position={[0, 5, 0]}
          scale={110}
          textureURL={SunTexture}
        />
      </Suspense>
    </>
  );
}

export default MainScene;
