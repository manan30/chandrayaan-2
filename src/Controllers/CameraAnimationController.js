import TWEEN from '@tweenjs/tween.js';
import { Vector3 } from 'three';

class CameraAnimationController {
  constructor(camera) {
    this.camera = camera;
  }

  animation(object) {
    TWEEN.removeAll();
    this.object = object;
    const animation = new TWEEN.Tween(this.camera.position)
      .to(
        {
          y: this.object.position.y * 5
        },
        5000
      )
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        // console.log(this.camera.position, delta);
        // new TWEEN.Tween(this.camera.position).to({
        //   y: object.position.y
        // });
        // this.camera.position.y = this.object.position.y;
        // this.camera.updateProjectionMatrix();
        // this.camera.lookAt(new Vector3(0, 0, 0));
      });

    animation.start().onComplete(() => {
      // console.log('completed');
      this.camera.lookAt(new Vector3(0, 0, 0));
    });
  }

  update(delta) {
    window.requestAnimationFrame(() => this.update());
    TWEEN.update(delta);
  }

  cancelUpdate() {
    window.cancelAnimationFrame(this.update);
  }
}

export default CameraAnimationController;
