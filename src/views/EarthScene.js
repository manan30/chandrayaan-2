import React, { Suspense } from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import { Fog, Color } from 'three';

import Light from '../components/Lights';
import Rocket from '../components/Rocket';
import Launcher from '../components/Launcher';
import LightTower from '../components/LightTower';
import FallbackMesh from '../components/FallbackMesh';
import Ground from '../components/Ground';
import Road from '../components/Road';
import Factory from '../components/Factory';
import Earth from '../components/Earth';
import CelestialObject from '../components/CelestialObject';

import EarthSceneController from '../Controllers/EarthSceneController';

import EarthTextureURL from '../assets/earth.jpg';
import MoonTextureURL from '../assets/moon.jpg';

function EarthScene() {
  const rocketRef = React.useRef();
  const { scene, camera, gl } = useThree();

  gl.setClearColor(new Color(0x040911));
  gl.setSize(window.innerWidth, window.innerHeight);

  camera.fov = 60;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 10000;

  camera.position.set(-400, 110, 300);
  camera.lookAt(scene.position);

  scene.fog = new Fog(0x040911, 500, 20000);

  const earthSceneController = new EarthSceneController(scene, camera);

  // setTimeout(() => {
  //   if (rocketRef.current) earthSceneController.animate(rocketRef.current);
  //   // if (rocketRef.current)
  //   // console.log(
  //   //   rocketRef.current.children[0].children[0].children[0].children[0]
  //   //     .children[0].children[0].children[2]
  //   // );
  //   // console.log();
  // }, 5000);

  // useFrame((_, delta) => {
  //   earthSceneController.update(delta);
  // });

  return (
    <>
      <Light color={0x000000} type='ambientLight' intensity={0.1} />
      <hemisphereLight args={[0x040911, 0xffffff, 0.3]} />

      <Suspense fallback={<FallbackMesh />}>
        <Ground />
      </Suspense>

      {/* <Suspense fallback={<FallbackMesh />}>
        <Road />
      </Suspense> */}

      <Suspense fallback={<FallbackMesh />}>
        <Factory position={[0, 0, -250]} scale={[0.05, 0.05, 0.05]} />
      </Suspense>

      <Suspense fallback={<FallbackMesh />}>
        <LightTower
          position={[-225, -60, -500]}
          scale={[10, 10, 5]}
          pointLightPositions={[
            [-200, 100, -250],
            [-200, 200, -250]
          ]}
          spotLightPosition={[0, 300, -140]}
        />
        <LightTower
          position={[-225, -60, 10]}
          scale={[10, 10, 5]}
          pointLightPositions={[
            [-200, 100, 250],
            [-200, 200, 250]
          ]}
          spotLightPosition={[-200, 300, 250]}
        />
        <LightTower
          position={[200, -60, 20]}
          scale={[10, 10, 5]}
          pointLightPositions={[
            [225, 100, 260],
            [225, 200, 260]
          ]}
          spotLightPosition={[225, 300, 260]}
        />
        <LightTower
          position={[200, -60, -500]}
          scale={[10, 10, 5]}
          pointLightPositions={[
            [225, 100, -250],
            [225, 200, -250]
          ]}
          spotLightPosition={[225, 300, 260]}
        />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <Light
          type='spotLight'
          intensity={1}
          color={0xffffff}
          position={[-150, 30, 0]}
        />
        <Light
          type='spotLight'
          intensity={1}
          color={0xffffff}
          position={[150, 30, 0]}
        />
        <Launcher rotation={[0, Math.PI / 2, 0]} />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <Rocket
          position={[0, 90, 0]}
          name={'rocket'}
          spaceshipRef={rocketRef}
        />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <Earth
          position={[-400, 1900, 0]}
          // position={[0, 200, 0]}
          scale={20}
          textureURL={EarthTextureURL}
        />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <CelestialObject
          position={[1100, 2200, -100]}
          scale={50}
          textureURL={MoonTextureURL}
        />
      </Suspense>
    </>
  );
}

export default EarthScene;
