import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

import PoleGLB from '../assets/light-tower.glb';

export default function Model(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, PoleGLB, loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco-gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  return (
    <group ref={group} {...props}>
      <scene>
        <mesh name='pole_Plane030'>
          <bufferGeometry attach='geometry' {...gltf.__$[1].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[1].material}
            name='Material.001'
          />
        </mesh>
        <mesh name='pole_base_Cube045'>
          <bufferGeometry attach='geometry' {...gltf.__$[2].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[2].material}
            name='dsndsy_silvery'
          />
        </mesh>
      </scene>
    </group>
  );
}
