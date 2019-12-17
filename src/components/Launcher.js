import React, { useEffect, useRef } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

import LauncherGLTF from '../assets/launcher.glb';

export default function Model(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, LauncherGLTF, loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/chandrayaan-2/draco-gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  return (
    <group ref={group} {...props}>
      <scene>
        <group name='ML_HP'>
          <mesh name='ML_HP_1_0'>
            <bufferGeometry attach='geometry' {...gltf.__$[2].geometry} />
            <meshStandardMaterial
              attach='material'
              {...gltf.__$[2].material}
              name='mobilelauncher_mat'
              color={0x3b4044}
            />
          </mesh>
          <mesh name='ML_HP_1_1'>
            <bufferGeometry attach='geometry' {...gltf.__$[3].geometry} />
            <meshStandardMaterial
              attach='material'
              {...gltf.__$[3].material}
              name='mobilelauncher_railings_mat'
              color={0x99a3a3}
            />
          </mesh>
        </group>
      </scene>
    </group>
  );
}
