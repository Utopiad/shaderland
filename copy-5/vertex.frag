#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.068,0.912,0.825);
vec3 colorB = vec3(1.000,0.076,0.317);

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st, float pct){
  return  smoothstep( pct + 0.02, pct, st.y) -
          smoothstep( pct, pct - 0.02, st.y);
}

void main() {
		vec2 st = gl_FragCoord.xy /u_resolution;
		float x = st.x;

    vec3 color = vec3(0.0);
		// float y = 0.5 + sin(x + u_time) / 2.;
		float y = pow(cos(x + u_time / 2.0), 3.5);

    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    color = mix(colorA, colorB, y);
		// float pct = plot(st, y);
		// color = (1.-pct)*color+pct*vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}
