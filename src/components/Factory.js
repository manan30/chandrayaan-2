import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

import FactoryModelURL from '../assets/factory.glb';

export default function Model(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, FactoryModelURL, loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco-gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  return (
    <group ref={group} {...props}>
      <scene>
        <mesh name='Composant_1_001'>
          <bufferGeometry attach='geometry' {...gltf.__$[1].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[1].material}
            name='wire_143224087'
            color={0x99a3a3}
          />
        </mesh>
      </scene>
    </group>
  );
}
