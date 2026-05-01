import {
  d as u,
  y as A,
  D as C,
  A as S,
  O as x,
  _ as w,
  P as R,
} from "./CG2MQ2lF.js";
const B = { class: "relative w-full h-full overflow-hidden" },
  E = ["width", "height"],
  L = `
  attribute vec2 a_position;
  varying vec2 v_uv;

  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,
  F = `
  precision mediump float;

  uniform float u_time;
  uniform vec2 u_resolution;
  varying vec2 v_uv;

  // Your brand colors
  vec3 color1 = vec3(0.568, 0.0, 0.388);   // #910063
  vec3 color2 = vec3(0.910, 0.447, 0.039); // #E8720A
  vec3 color3 = vec3(0.859, 0.0, 0.027);   // #DB0007

  // Smooth noise function
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Fractal noise
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for(int i = 0; i < 4; i++) {
      value += amplitude * smoothNoise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }

    return value;
  }

  // Create blob-like shapes
  float createBlob(vec2 uv, vec2 center, float radius, float time) {
    vec2 offset = uv - center;

    // Add organic movement
    offset.x += sin(time * 0.08 + center.y * 4.0) * 0.1;
    offset.y += cos(time * 0.06 + center.x * 3.0) * 0.1;

    float dist = length(offset);

    // Add noise to make it more organic
    float noiseValue = fbm(uv * 3.0 + time * 0.2) * 0.3;

    return smoothstep(radius + 0.2, radius - 0.1, dist + noiseValue);
  }

  void main() {
    vec2 uv = v_uv;
    float time = u_time * 0.001;

    // Create multiple blobs with different properties
    float blob1 = createBlob(uv, vec2(0.3 + sin(time * 0.5) * 0.2, 0.4 + cos(time * 0.3) * 0.15), 0.25, time);
    float blob2 = createBlob(uv, vec2(0.7 + cos(time * 0.4) * 0.15, 0.6 + sin(time * 0.7) * 0.2), 0.3, time + 1.0);
    float blob3 = createBlob(uv, vec2(0.5 + sin(time * 0.6) * 0.1, 0.2 + cos(time * 0.8) * 0.1), 0.2, time + 2.0);

    // Create base gradient from center
    vec2 center = vec2(0.5, 0.5);
    float gradient = 1.0 - length(uv - center) * 0.8;
    gradient = smoothstep(0.2, 1.0, gradient);

    // Start with a base color mix
    vec3 baseColor = mix(color1, color2, uv.x);
    baseColor = mix(baseColor, color3, uv.y * 0.5);

    // Apply blob influences more vibrantly
    vec3 finalColor = baseColor;
    finalColor = mix(finalColor, color2 * 1.2, blob1 * 0.8);
    finalColor = mix(finalColor, color3 * 1.1, blob2 * 0.7);
    finalColor = mix(finalColor, color1 * 1.3, blob3 * 0.6);

    // Brighten the overall result
    finalColor = mix(finalColor, finalColor * 1.2, gradient);

    // Ensure vibrant colors
    finalColor = clamp(finalColor, 0.0, 1.0);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`,
  T = {
    __name: "ContainerGradient",
    setup(P) {
      const a = u(null),
        l = u(800),
        c = u(600);
      let e = null,
        i = null,
        s = null;
      const h = Date.now();
      function v(o, r, n) {
        const t = o.createShader(r);
        return (
          o.shaderSource(t, n),
          o.compileShader(t),
          o.getShaderParameter(t, o.COMPILE_STATUS)
            ? t
            : (console.error(
                "Shader compilation error:",
                o.getShaderInfoLog(t),
              ),
              o.deleteShader(t),
              null)
        );
      }
      function b(o, r, n) {
        const t = o.createProgram();
        return (
          o.attachShader(t, r),
          o.attachShader(t, n),
          o.linkProgram(t),
          o.getProgramParameter(t, o.LINK_STATUS)
            ? t
            : (console.error("Program linking error:", o.getProgramInfoLog(t)),
              o.deleteProgram(t),
              null)
        );
      }
      function p() {
        if (!a.value) return;
        if (((e = a.value.getContext("webgl")), !e)) {
          console.error("WebGL not supported");
          return;
        }
        const o = v(e, e.VERTEX_SHADER, L),
          r = v(e, e.FRAGMENT_SHADER, F);
        if (!o || !r || ((i = b(e, o, r)), !i)) return;
        const n = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
          t = e.createBuffer();
        (e.bindBuffer(e.ARRAY_BUFFER, t),
          e.bufferData(e.ARRAY_BUFFER, n, e.STATIC_DRAW));
        const m = e.getAttribLocation(i, "a_position"),
          _ = e.getUniformLocation(i, "u_time"),
          g = e.getUniformLocation(i, "u_resolution");
        function d() {
          !e ||
            !i ||
            (e.viewport(0, 0, a.value.width, a.value.height),
            e.clear(e.COLOR_BUFFER_BIT),
            e.useProgram(i),
            e.uniform1f(_, Date.now() - h),
            e.uniform2f(g, a.value.width, a.value.height),
            e.enableVertexAttribArray(m),
            e.bindBuffer(e.ARRAY_BUFFER, t),
            e.vertexAttribPointer(m, 2, e.FLOAT, !1, 0, 0),
            e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
            (s = requestAnimationFrame(d)));
        }
        d();
      }
      function f() {
        if (!a.value) return;
        const o = a.value.parentElement.getBoundingClientRect();
        l.value = o.width;
        const r = o.height * 1.5;
        ((c.value = r <= 600 ? 600 : r),
          e && e.viewport(0, 0, l.value, c.value));
      }
      return (
        A(() => {
          (f(), p(), window.addEventListener("resize", f));
        }),
        C(() => {
          (s && cancelAnimationFrame(s),
            window.removeEventListener("resize", f));
        }),
        (o, r) => (
          x(),
          S("div", B, [
            w(
              "canvas",
              {
                ref_key: "canvas",
                ref: a,
                class: "absolute inset-0",
                width: l.value,
                height: c.value,
              },
              null,
              8,
              E,
            ),
            R(o.$slots, "default"),
          ])
        )
      );
    },
  };
export { T as _ };
