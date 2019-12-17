import React, { useMemo } from 'react';
import * as THREE from 'three';

function Stars() {
  const starsGeometry = new THREE.SphereGeometry(0.5);

  const points = useMemo(
    () =>
      new Array(10000).fill().map(() => {
        const star = new THREE.Vector3();

        star.x = THREE.Math.randFloatSpread(5000, 10000);
        star.y = THREE.Math.randFloatSpread(5000, 10000);
        star.z = THREE.Math.randFloatSpread(5000, 10000);

        return star;
      }),
    []
  );

  starsGeometry.setFromPoints(points);

  const starsMaterial = new THREE.PointsMaterial({ color: 0x888888 });

  return <points args={[starsGeometry, starsMaterial]} />;
}

export default Stars;
