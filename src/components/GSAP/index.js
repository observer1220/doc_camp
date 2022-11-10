import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";

const Box = ({ children, className }) => {
  return <div className={"box " + className}>{children}</div>;
};

function Container({ children }) {
  return (
    <div>
      <Box>Don't Animate Me</Box>
    </div>
  );
}

export default function GSAP() {
  const app = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      gsap.to(".animate", {
        x: 200,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });
    }, app); // <- Scope!

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.app} ref={app}>
      <Box className="animate">Box</Box>
      <Container></Container>
      <Box className="animate">Box</Box>
    </div>
  );
}
