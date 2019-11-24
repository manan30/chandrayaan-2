import React from 'react';
import { useThree } from 'react-three-fiber';
import { CameraHelper } from 'three';
import Light from '../components/Lights';
import Rocket from '../components/Rocket';

function EarthScene() {
  const { scene, camera } = useThree();

  camera.fov = 45;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 10000;

  // camera.up.set(0, 0, 1);
  camera.position.set(0, 10, 20);
  console.log(scene);

  // const cameraHelper = new CameraHelper(camera);
  // scene.add(cameraHelper);

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

      <Rocket />
    </>
  );
}

export default EarthScene;
