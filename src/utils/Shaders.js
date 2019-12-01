const RingVertexShader = `uniform float innerRadius;
      uniform float outerRadius;

      varying vec3 localPosition;

      void main() {
        localPosition = position;
        vec3 viewPosition = (modelViewMatrix * vec4(localPosition, 1.)).xyz;
        gl_Position = projectionMatrix * vec4(viewPosition, 1.);
      }
    `;

const RingFragmentShader = `uniform sampler2D texture;
      uniform float innerRadius;
      uniform float outerRadius;

      varying vec3 localPosition;

      vec4 color() {
        vec2 uv;
        uv.x = (length(localPosition) - innerRadius) / (outerRadius - innerRadius);
        if (uv.x < 0.0 || uv.x > 1.0) {
          discard;
        }

        vec4 pixel = texture2D(texture, uv);
        return pixel;
      }

      void main() {
        gl_FragColor = color();
      }
    `;

export default { RingVertexShader, RingFragmentShader };
