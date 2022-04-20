import { Parallax } from "react-parallax";
import React from "react";
const Container = () => (
  <Parallax
    blur={10}
    bgImage="https://www.renderhub.com/creator-3d/falcon-heavy-v1-2/falcon-heavy-v1-2-02.jpg"
    bgImageAlt="the cat"
    strength={200}
  >
    Content goes here. Parallax height grows with content height.
  </Parallax>
);
export default Container;
