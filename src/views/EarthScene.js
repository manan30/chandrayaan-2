import React, { Suspense } from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import { CameraHelper } from 'three';

import Light from '../components/Lights';
import Rocket from '../components/Rocket';
import FallbackMesh from '../components/FallbackMesh';
// import { Smoke, animateSmoke } from '../components/Smoke';

function EarthScene() {
  const { scene, camera } = useThree();

  camera.fov = 45;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 10000;

  camera.position.set(0, 60, 300);

  // const cameraHelper = new CameraHelper(camera);
  // scene.add(cameraHelper);

  // const smokeParticles = Smoke({ scene });
  // useFrame((_, delta) => {
  //   animateSmoke(smokeParticles, delta);
  // });

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
        <Rocket position={[0, 80, 0]} />
      </Suspense>
    </>
  );
}

export default EarthScene;
