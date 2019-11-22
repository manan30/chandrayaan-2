import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import PropTypes from 'prop-types';

import SpaceshipGLTF from '../assets/spaceship.gltf';

function Spaceship({ setRef, scale, position }) {
  const gltf = useLoader(GLTFLoader, SpaceshipGLTF, loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco-gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  return (
    <group ref={setRef} scale={scale} position={position}>
      <scene name='OSG_Scene'>
        <object3D
          name='RootNode_(gltf_orientation_matrix)'
          rotation={[-1.5707963267948963, 0, 0]}>
          <object3D name='RootNode_(model_correction_matrix)'>
            <object3D
              name='831fbfc1db574bdab9c7d1856c34ea3afbx'
              rotation={[1.5707963267948963, 0, 0]}>
              <object3D name='RootNode'>
                <object3D
                  name='NurbsPath'
                  position={[0, 859.56689453125, 2.5747125148773193]}
                  rotation={[-1.5707964897155757, 0, 0]}
                  scale={[100, 100.00000000000001, 100.00000000000001]}>
                  <mesh name='NurbsPath_MainRocket_Mat_0'>
                    <bufferGeometry
                      attach='geometry'
                      {...gltf.__$[6].geometry}
                    />
                    <meshStandardMaterial
                      attach='material'
                      {...gltf.__$[6].material}
                      name='MainRocket_Mat'
                    />
                  </mesh>
                </object3D>
                <object3D
                  name='Cylinder001'
                  rotation={[-1.5707964897155757, 0, 0]}
                  scale={[100, 100.00000000000001, 100.00000000000001]}>
                  <mesh name='Cylinder001_Others_Mat_0'>
                    <bufferGeometry
                      attach='geometry'
                      {...gltf.__$[8].geometry}
                    />
                    <meshStandardMaterial
                      attach='material'
                      {...gltf.__$[8].material}
                      name='Others_Mat'
                    />
                  </mesh>
                </object3D>
                <object3D
                  name='Cylinder003'
                  position={[
                    -227.86166381835938,
                    -1149.1202392578125,
                    -0.00014901159738656133
                  ]}
                  rotation={[-1.5707964897155757, 0, 0]}
                  scale={[
                    4.068006992340088,
                    4.068006992340088,
                    4.068006992340088
                  ]}>
                  <mesh name='Cylinder003_Booster_Mat_0'>
                    <bufferGeometry
                      attach='geometry'
                      {...gltf.__$[10].geometry}
                    />
                    <meshStandardMaterial
                      attach='material'
                      {...gltf.__$[10].material}
                      name='Booster_Mat'
                    />
                  </mesh>
                </object3D>
              </object3D>
            </object3D>
          </object3D>
        </object3D>
      </scene>
    </group>
  );
}

Spaceship.propTypes = {
  setRef: PropTypes.objectOf(PropTypes.any),
  scale: PropTypes.arrayOf(PropTypes.number),
  position: PropTypes.arrayOf(PropTypes.number)
};

Spaceship.defaultProps = {
  setRef: {},
  scale: [1, 1, 1],
  position: [0, 0, 0]
};

export default Spaceship;
