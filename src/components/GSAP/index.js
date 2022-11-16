import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import {
  Controls,
  PlayState,
  Reveal,
  Tween,
  SplitWords,
  SplitChars,
  Timeline,
} from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export default function GSAP() {
  return (
    <div>
      {/* 錯置的綠色方塊 */}
      <Tween to={{ x: "200px" }} stagger={0.2} ease="elastic.out(0.2, 0.1)">
        <div style={{ width: "20px", height: "20px", background: "green" }} />
        <div style={{ width: "20px", height: "20px", background: "green" }} />
        <div style={{ width: "20px", height: "20px", background: "green" }} />
        <div style={{ width: "20px", height: "20px", background: "green" }} />
        <div style={{ width: "20px", height: "20px", background: "green" }} />
      </Tween>
      {/* 水平移動的灰色方塊 */}
      <Tween
        to={{
          x: "300px",
          scrollTrigger: {
            trigger: ".square",
            start: "-200px center",
            end: "200px center",
            scrub: 0.5,
            markers: true,
          },
        }}
      >
        <div
          className="square"
          style={{ width: "100px", height: "100px", background: "#ccc" }}
        />
      </Tween>
      {/* 3維運動的粉色方塊 */}
      <Tween
        to={{
          x: "500px",
          y: "500px",
          scrollTrigger: {
            trigger: ".square2",
            start: "-100px center",
            end: "300px center",
            scrub: 0.8,
            markers: true,
          },
        }}
      >
        <div
          className="square2"
          style={{ width: "100px", height: "100px", background: "pink" }}
        />
      </Tween>
      {/* 文字替代動畫 */}
      <Tween to={{ text: "光彩絢麗，耳目一新" }} duration={2}>
        <h3>黯然無光，陳腔濫調</h3>
      </Tween>
      {/* 漸進動畫 */}
      <Reveal repeat>
        <Tween from={{ opacity: 0 }} duration={2}>
          <h3>光彩絢麗，耳目一新</h3>
        </Tween>
      </Reveal>
      {/* 時間軸動畫 */}
      <Timeline
        target={
          <div
            style={{
              width: "100px",
              height: "100px",
              background: "#ccc",
              borderRadius: "0 20px 50% 0",
            }}
          />
        }
      >
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} />
        <Tween to={{ x: "500px" }} />
        <Tween to={{ rotation: 270 }} position="+=1" />
        <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} duration={1} />
      </Timeline>
      {/* 計數器動畫 */}
      <Controls playState={PlayState.stop}>
        <div
          style={{
            width: "100px",
            height: "70px",
            background: "#ccc",
            textAlign: "center",
          }}
        >
          <Tween
            to={{
              count: {
                value: 100,
                format: () => (value) => value.toFixed(2),
              },
            }}
            ease="none"
            duration={5}
          >
            <div style={{ fontSize: "30px", lineHeight: "70px" }}>0</div>
          </Tween>
        </div>
      </Controls>
      {/* 進度條動畫 */}
      <Controls playState={PlayState.stop}>
        <Timeline>
          <Tween
            to={{
              count: {
                value: 100,
                format: () => (value) => `${parseInt(value, 10)} %`,
              },
            }}
            ease="none"
            duration={5}
            position={0}
          >
            <div style={{ fontSize: "30px" }}>0 %</div>
          </Tween>
          <div
            style={{
              width: "300px",
              height: "30px",
              border: "2px solid black",
            }}
          >
            <Tween
              to={{
                width: "300px",
                background: "green",
              }}
              ease="none"
              duration={5}
              position={0}
            >
              <div
                style={{ width: "0px", height: "30px", background: "red" }}
              />
            </Tween>
          </div>
        </Timeline>
      </Controls>
      {/* SVG繪圖動畫 */}
      <Controls playState={PlayState.stop}>
        <svg
          width="200"
          height="200"
          viewBox="-55 -55 110 110"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Tween
            from={{
              svgDraw: 0,
            }}
            to={{
              svgDraw: 1,
            }}
          >
            <circle r="50" stroke="red" strokeWidth="5" fill="transparent" />
          </Tween>
        </svg>
      </Controls>
    </div>
  );
}
