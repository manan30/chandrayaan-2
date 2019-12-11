import TWEEN from '@tweenjs/tween.js';
import { Vector3 } from 'three';

class EarthSceneController {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
  }

  animateCameraPosition1(object) {
    return new TWEEN.Tween(this.camera.position)
      .to({ x: -300, y: 120, z: 300 }, 7000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animateCameraPosition2(object) {
    this.camera.position.set(0, 40, 50);
    return new TWEEN.Tween(this.camera.position)
      .to({ x: 0, y: 100, z: 100 }, 7000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animateCameraPosition3(object) {
    this.camera.position.set(100, 20, 350);
    return new TWEEN.Tween(this.camera.position)
      .to({ x: 70, y: 100, z: 100 }, 7000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animateCameraPosition4(object) {
    return new TWEEN.Tween(this.camera.position)
      .to({ x: 0, y: 250, z: 170 }, 5000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animateCameraPosition5(object) {
    return new TWEEN.Tween(object.position)
      .to({ x: 0, y: 1000 }, 7000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animateCameraPosition6(object) {
    new TWEEN.Tween(this.camera.position)
      .to({ y: 1000 }, 7000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(
          new Vector3(
            object.position.x,
            object.position.y + 50,
            object.position.z
          )
        );
      })
      .start();
  }

  // boosterSeparation() {
  //   this.cylinder = this.scene.getObjectByName('Cylinder003');
  //   return new TWEEN.Tween(this.cylinder)
  //     .to({ y: 2500 }, 5000)
  //     .easing(TWEEN.Easing.Cubic.InOut);
  // }

  animate(object) {
    [this.rocket, this.rocketThrust] = object.children;
    this.animateCameraPosition1(object)
      .start()
      .onComplete(() => {
        this.animateCameraPosition2(object)
          .start()
          .onComplete(() => {
            this.animateCameraPosition3(object)
              .start()
              .onComplete(() =>
                this.animateCameraPosition4(object)
                  .start()
                  .onComplete(() => {
                    this.animateCameraPosition5(object)
                      .delay(2000)
                      .onStart(() => {
                        this.rocketThrust.visible = true;
                        this.animateCameraPosition6(object);
                      })
                      .start();
                    // .onComplete(() => {
                    //   this.boosterSeparation().start();
                    // });
                  })
              );
          });
      });
  }

  update(delta) {
    requestAnimationFrame(() => this.update());
    TWEEN.update(delta);
  }
}

export default EarthSceneController;
