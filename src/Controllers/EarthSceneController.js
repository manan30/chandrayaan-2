import TWEEN from '@tweenjs/tween.js';

class EarthSceneController {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
  }

  animateCameraPosition1(object) {
    TWEEN.removeAll();
    return new TWEEN.Tween(this.camera.position)
      .to({ x: 0, y: 110, z: 300 }, 4000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animate() {
    const animate = this.animateCameraPosition1();
    animate.start();
    // this.animateCameraPosition1().start();
  }

  update(delta) {
    requestAnimationFrame(() => this.update());
    TWEEN.update(delta);
  }

  // cancelUpdate() {}
  // window.cancelAnimationFrame(this.update);
  // }
}

export default EarthSceneController;
