import React, { useMemo } from 'react';
import { useLoader } from 'react-three-fiber';
import { TextureLoader, MeshBasicMaterial, BackSide, BoxGeometry } from 'three';

import frontImage from '../assets/skybox/dawnmountain-xneg.png';
import backImage from '../assets/skybox/dawnmountain-xpos.png';
import topImage from '../assets/skybox/dawnmountain-yneg.png';
import bottomImage from '../assets/skybox/dawnmountain-ypos.png';
import leftImage from '../assets/skybox/dawnmountain-zneg.png';
import rightImage from '../assets/skybox/dawnmountain-zpos.png';

function EarthSkyBox() {
  const textureFront = useLoader(TextureLoader, frontImage);
  const textureBack = useLoader(TextureLoader, backImage);
  const textureTop = useLoader(TextureLoader, topImage);
  const textureBottom = useLoader(TextureLoader, bottomImage);
  const textureLeft = useLoader(TextureLoader, leftImage);
  const textureRight = useLoader(TextureLoader, rightImage);

  const materials = useMemo(() => {
    const materialTextures = [];
    materialTextures.push(
      new MeshBasicMaterial({ map: textureFront, side: BackSide })
    );
    materialTextures.push(
      new MeshBasicMaterial({ map: textureBack, side: BackSide })
    );
    materialTextures.push(
      new MeshBasicMaterial({ map: textureTop, side: BackSide })
    );
    materialTextures.push(
      new MeshBasicMaterial({ map: textureBottom, side: BackSide })
    );
    materialTextures.push(
      new MeshBasicMaterial({ map: textureLeft, side: BackSide })
    );
    materialTextures.push(
      new MeshBasicMaterial({ map: textureRight, side: BackSide })
    );
    return materialTextures;
  }, [
    textureBack,
    textureBottom,
    textureFront,
    textureLeft,
    textureRight,
    textureTop
  ]);

  const geometry = useMemo(() => new BoxGeometry(1000, 500, 500), []);

  return <mesh args={[geometry, materials]} />;
}

export default EarthSkyBox;
