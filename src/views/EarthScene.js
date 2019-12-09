import React, { Suspense } from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import { CameraHelper } from 'three';

import Light from '../components/Lights';
import Rocket from '../components/Rocket';
import Launcher from '../components/Launcher';
import LightTower from '../components/LightTower';
import FallbackMesh from '../components/FallbackMesh';

function EarthScene() {
  const { scene, camera } = useThree();

  camera.fov = 60;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 10000;

  camera.position.set(-400, 110, 300);
  camera.lookAt(scene.position);

  // const cameraHelper = new CameraHelper(camera);
  // scene.add(cameraHelper);

  // const smokeParticles = Smoke({ scene });
  useFrame((_, delta) => {});

  return (
    <>
      <Light color={0xffffff} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeBufferGeometry
          attach='geometry'
          args={[window.innerWidth, window.innerHeight]}
        />
        <meshNormalMaterial attach='material' />
      </mesh>
      <Suspense fallback={<FallbackMesh />}>
        <LightTower position={[0, -60, -400]} scale={[10, 10, 5]} />
        <LightTower position={[-225, -60, 10]} scale={[10, 10, 5]} />
        <LightTower position={[200, -60, 20]} scale={[10, 10, 5]} />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <Launcher rotation={[0, Math.PI / 2, 0]} />
      </Suspense>
      <Suspense fallback={<FallbackMesh />}>
        <Rocket position={[0, 90, 0]} name={'rocket'} />
      </Suspense>
    </>
  );
}

export default EarthScene;
