import React, { useMemo } from 'react';
import * as THREE from 'three';

function Stars() {
  const [coords, geo, mat] = useMemo(() => {
    return [
      new Array(2000)
        .fill()
        .map([
          Math.random() * 800 - 400,
          Math.random() * 800 - 400,
          Math.random() * 800 - 400
        ]),
      new THREE.SphereBufferGeometry(1, 10, 10),
      new THREE.MeshBasicMaterial({ color: new THREE.Color('lightblue') })
    ];
  });

  return (
    <group>
      {coords.map(a => {
        return <mesh geometry={geo} material={mat} position={[...a]} />;
      })}
    </group>
  );
}

export default Stars;
