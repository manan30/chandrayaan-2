import * as THREE from 'three';
import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import LanderURL from '../assets/lander.glb';

export default function Model(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, LanderURL);

  return (
    <group ref={group} {...props}>
      <scene>
        <mesh name='leg'>
          <bufferGeometry attach='geometry' {...gltf.__$[1].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[1].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='leg001'>
          <bufferGeometry attach='geometry' {...gltf.__$[2].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[2].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='leg002'>
          <bufferGeometry attach='geometry' {...gltf.__$[3].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[3].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='leg003'>
          <bufferGeometry attach='geometry' {...gltf.__$[4].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[4].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Box003'>
          <bufferGeometry attach='geometry' {...gltf.__$[5].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[5].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Sphere001'>
          <bufferGeometry attach='geometry' {...gltf.__$[6].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[6].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='leg006'>
          <bufferGeometry attach='geometry' {...gltf.__$[7].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[7].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='leg007'>
          <bufferGeometry attach='geometry' {...gltf.__$[8].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[8].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='leg008'>
          <bufferGeometry attach='geometry' {...gltf.__$[9].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[9].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder005'>
          <bufferGeometry attach='geometry' {...gltf.__$[10].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[10].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder006'>
          <bufferGeometry attach='geometry' {...gltf.__$[11].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[11].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder007'>
          <bufferGeometry attach='geometry' {...gltf.__$[12].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[12].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder008'>
          <bufferGeometry attach='geometry' {...gltf.__$[13].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[13].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder009'>
          <bufferGeometry attach='geometry' {...gltf.__$[14].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[14].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Box004'>
          <bufferGeometry attach='geometry' {...gltf.__$[15].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[15].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder014'>
          <bufferGeometry attach='geometry' {...gltf.__$[16].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[16].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Door'>
          <bufferGeometry attach='geometry' {...gltf.__$[17].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[17].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder015'>
          <bufferGeometry attach='geometry' {...gltf.__$[18].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[18].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder016'>
          <bufferGeometry attach='geometry' {...gltf.__$[19].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[19].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Door001'>
          <bufferGeometry attach='geometry' {...gltf.__$[20].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[20].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder017'>
          <bufferGeometry attach='geometry' {...gltf.__$[21].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[21].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder018'>
          <bufferGeometry attach='geometry' {...gltf.__$[22].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[22].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder019'>
          <bufferGeometry attach='geometry' {...gltf.__$[23].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[23].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder020'>
          <bufferGeometry attach='geometry' {...gltf.__$[24].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[24].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder021'>
          <bufferGeometry attach='geometry' {...gltf.__$[25].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[25].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder022'>
          <bufferGeometry attach='geometry' {...gltf.__$[26].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[26].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder023'>
          <bufferGeometry attach='geometry' {...gltf.__$[27].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[27].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder024'>
          <bufferGeometry attach='geometry' {...gltf.__$[28].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[28].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Box005'>
          <bufferGeometry attach='geometry' {...gltf.__$[29].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[29].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Object001'>
          <bufferGeometry attach='geometry' {...gltf.__$[30].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[30].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Box006'>
          <bufferGeometry attach='geometry' {...gltf.__$[31].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[31].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Box007'>
          <bufferGeometry attach='geometry' {...gltf.__$[32].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[32].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Object002'>
          <bufferGeometry attach='geometry' {...gltf.__$[33].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[33].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder026'>
          <bufferGeometry attach='geometry' {...gltf.__$[34].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[34].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Plane001'>
          <bufferGeometry attach='geometry' {...gltf.__$[35].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[35].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Object003'>
          <bufferGeometry attach='geometry' {...gltf.__$[36].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[36].material}
            name='Material__27'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Solar_panel'>
          <bufferGeometry attach='geometry' {...gltf.__$[37].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[37].material}
            name='Material__97'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Solar_panel001'>
          <bufferGeometry attach='geometry' {...gltf.__$[38].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[38].material}
            name='Material__97'
            transparent
            opacity={0}
          />
        </mesh>
        <group name='Box001'>
          <mesh name='Box001_1_0'>
            <bufferGeometry attach='geometry' {...gltf.__$[40].geometry} />
            <meshStandardMaterial
              attach='material'
              {...gltf.__$[40].material}
              name='Matertransparent
              opacity={0}ial__27'
              transparent
              opacity={0}
            />
          </mesh>
          <mesh name='Box001_1_1'>
            <bufferGeometry attach='geometry' {...gltf.__$[41].geometry} />
            <meshStandardMaterial
              attach='material'
              {...gltf.__$[41].material}
              name='Material__97'
              transparent
              opacity={0}
            />
          </mesh>
          <mesh name='Box001_1_2'>
            <bufferGeometry attach='geometry' {...gltf.__$[42].geometry} />
            <meshStandardMaterial
              attach='material'
              {...gltf.__$[42].material}
              name='Material__28'
              transparent
              opacity={0}
            />
          </mesh>
          <mesh name='Box001_1_3'>
            <bufferGeometry attach='geometry' {...gltf.__$[43].geometry} />
            <meshStandardMaterial
              attach='material'
              {...gltf.__$[43].material}
              name='Material__72'
              transparent
              opacity={0}
            />
          </mesh>
          <mesh name='Box001_1_4'>
            <bufferGeometry attach='geometry' {...gltf.__$[44].geometry} />
            <meshStandardMaterial
              attach='material'
              {...gltf.__$[44].material}
              name='03___Default'
              transparent
              opacity={0}
            />
          </mesh>
        </group>
        <group name='Box008'>
          <mesh name='Box008_1_0'>
            <bufferGeometry attach='geometry' {...gltf.__$[46].geometry} />
            <meshStandardMaterial
              attach='material'
              {...gltf.__$[46].material}
              name='Material__27'
              transparent
              opacity={0}
            />
          </mesh>
          <mesh name='Box008_1_1'>
            <bufferGeometry attach='geometry' {...gltf.__$[47].geometry} />
            <meshStandardMaterial
              attach='material'
              {...gltf.__$[47].material}
              name='03___Default'
              transparent
              opacity={0}
            />
          </mesh>
        </group>
        <mesh name='Cylinder001'>
          <bufferGeometry attach='geometry' {...gltf.__$[48].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[48].material}
            name='wire_015015015'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder002'>
          <bufferGeometry attach='geometry' {...gltf.__$[49].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[49].material}
            name='wire_015015015'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder003'>
          <bufferGeometry attach='geometry' {...gltf.__$[50].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[50].material}
            name='wire_015015015'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder004'>
          <bufferGeometry attach='geometry' {...gltf.__$[51].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[51].material}
            name='wire_015015015'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder010'>
          <bufferGeometry attach='geometry' {...gltf.__$[52].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[52].material}
            name='wire_043043043'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder011'>
          <bufferGeometry attach='geometry' {...gltf.__$[53].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[53].material}
            name='wire_043043043'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder012'>
          <bufferGeometry attach='geometry' {...gltf.__$[54].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[54].material}
            name='wire_043043043'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder013'>
          <bufferGeometry attach='geometry' {...gltf.__$[55].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[55].material}
            name='wire_043043043'
            transparent
            opacity={0}
          />
        </mesh>
        <mesh name='Cylinder025'>
          <bufferGeometry attach='geometry' {...gltf.__$[56].geometry} />
          <meshStandardMaterial
            attach='material'
            {...gltf.__$[56].material}
            name='wire_043043043'
            transparent
            opacity={0}
          />
        </mesh>
      </scene>
    </group>
  );
}
