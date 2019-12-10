import React, { Suspense } from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import { CameraHelper } from 'three';

import Light from '../components/Lights';
import Rocket from '../components/Rocket';
import Launcher from '../components/Launcher';
import LightTower from '../components/LightTower';
import FallbackMesh from '../components/FallbackMesh';
import EarthSceneController from '../Controllers/EarthSceneController';

function EarthScene() {
  const rocketRef = React.useRef();
  const { scene, camera } = useThree();

  camera.fov = 60;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 10000;

  camera.position.set(-400, 110, 300);
  camera.lookAt(scene.position);

  const earthSceneController = new EarthSceneController(scene, camera);

  setTimeout(() => {
    earthSceneController.animate(rocketRef.current);
  }, 10000);

  useFrame((_, delta) => {
    earthSceneController.update(delta);
  });

  return (
    <>
      {/* <Light color={0xffffff} type='ambientLight' /> */}

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeBufferGeometry
          attach='geometry'
          args={[window.innerWidth, window.innerHeight]}
        />
        <meshBasicMaterial attach='material' color={0x000000} />
      </mesh>
      <Suspense fallback={<FallbackMesh />}>
        <LightTower
          position={[0, -60, -400]}
          scale={[10, 10, 5]}
          pointLightPositions={[
            [0, 100, -125],
            [0, 200, -125]
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
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <Launcher rotation={[0, Math.PI / 2, 0]} />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <Rocket
          position={[0, 90, 0]}
          name={'rocket'}
          spaceshipRef={rocketRef}
        />
      </Suspense>
    </>
  );
}

export default EarthScene;
