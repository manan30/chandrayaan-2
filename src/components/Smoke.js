import Proton from 'proton-engine';
import { useFrame, useThree } from 'react-three-fiber';

const dot =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJkSURBVHjaxJeJbusgEEW94S1L//83X18M2MSuLd2pbqc4wZGqRLrKBsyZhQHny7Jk73xVL8xpVhWrcmiB5lX+6GJ5YgQ2owbAm8oIwH1VgKZUmGcRqKGGPgtEQQAzGR8hQ59fAmhJHSAagigJ4E7GPWRXOYC6owAd1JM6wDQPADyMWUqZRMqmAojHp1Vn6EQQEgUNMJLnUjMyJsM49wygBkAPw9dVFwXRkncCIIW3GRgoTQUZn6HxCMAFEFd8TwEQ78X4rHbILoAUmeT+RFG4UhQ6MiIAE4W/UsYFjuVjAIa2nIY4q1R0GFtQWG3E84lqw2GO2QOoCKBVu0BAPgDSU0eUDjjQenNkV/AW/pWChhpMTelo1a64AOKM30vk18GzTHXCNtI/Knz3DFBgsUqBGIjTInXRY1yA9xkVoqW5tVq3pDR9A0hfF5BSARmVnh7RMDCaIdcNgbPBkgzn1Bu+SfIEFSpSBmkxyrMicb0fAEuCZrWnN89veA/4XcakrPcjBWzkTuLjlbfTQPOlBhz+HwkqqPXmPQDdrQItxE1moGof1S74j/8txk8EHhTQrAE8qlwfqS5yukm1x/rAJ9Jiaa6nyATqD78aUVBhFo8b1V4DdTXdCW+IxA1zB4JhiOhZMEWO1HqnvdoHZ4FAMIhV9REF8FiUm0jsYPEJx/Fm/N8OhH90HI9YRHesWbXXZwAShU8qThe7H8YAuJmw5yOd989uRINKRTJAhoF8jbqrHKfeCYdIISZfSq26bk/K+yO3YvfKrVgiwQBHnwt8ynPB25+M8hceTt/ybPhnryJ78+tLgAEAuCFyiQgQB30AAAAASUVORK5CYII=';

function Smoke() {
  const { gl } = useThree();
  let emitter;
  let proton;

  gl.width = window.innerWidth;
  gl.height = window.innerHeight;

  console.log(gl);
  function createImageEmitter() {
    emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(
      new Proton.Span(150, 500),
      // new Proton.Span(100, 50),
      new Proton.Span(0.1, 0.2)
    );

    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(new Proton.Life(1, 2));
    emitter.addInitialize(new Proton.Body([dot], 32));
    emitter.addInitialize(new Proton.Radius(40));
    emitter.addInitialize(
      new Proton.V(new Proton.Span(3, 6), new Proton.Span(0, 360), 'polar')
    );

    emitter.addBehaviour(new Proton.Alpha(1, 0));
    emitter.addBehaviour(new Proton.Color('#ffffff', '#ffffff'));
    emitter.addBehaviour(new Proton.Scale(Proton.getSpan(0.3, 4), 0));
    emitter.addBehaviour(
      new Proton.CrossZone(
        new Proton.RectZone(0, 0, gl.width, gl.height),
        'dead'
      )
    );

    emitter.p.x = gl.width / 2;
    emitter.p.y = gl.height / 2;
    emitter.rotation = 48;
    emitter.emit();

    return emitter;
  }

  (function createProton() {
    const protonParticle = new Proton();
    emitter = createImageEmitter();
    protonParticle.addEmitter(emitter);

    const rendererType = new Proton.WebGLRenderer(gl);
    rendererType.blendFunc('SRC_ALPHA', 'ONE');
    protonParticle.addRenderer(rendererType);

    proton = protonParticle;
  })();

  console.log(proton);

  (function update() {
    requestAnimationFrame(update);
    proton.update();
  })();
}

export default Smoke;
