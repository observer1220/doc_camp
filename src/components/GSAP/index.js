import React from "react";
import { Controls, PlayState, Tween } from "react-gsap";

export default function GSAP() {
  return (
    <Tween to={{ x: "200px" }} stagger={0.2} ease="elastic.out(0.2, 0.1)">
      <div style={{ width: "20px", height: "20px", background: "green" }} />
      <div style={{ width: "20px", height: "20px", background: "green" }} />
      <div style={{ width: "20px", height: "20px", background: "green" }} />
      <div style={{ width: "20px", height: "20px", background: "green" }} />
      <div style={{ width: "20px", height: "20px", background: "green" }} />
    </Tween>
  );
}
