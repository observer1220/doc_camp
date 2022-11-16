import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Layout from "@theme/Layout";
import axios from "axios";
import styles from "./about.module.css";
import tesla1 from "../../../static/img/car/tesla1.jpg";
import tesla2 from "../../../static/img/car/tesla2.jpg";
import { Button } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

const originalColors = ["#ff5f45", "#0798ec", "#fc6c7c", "#435b71"];

export default function AboutPage() {
  const [sectionsColor, setSectionsColor] = useState([...originalColors]);
  const [fullpages] = useState([
    {
      title: "Model S",
      description:
        "Pushing the envelope of automotive and information technology",
      picture: tesla1,
    },
    {
      title: "Lamborghini",
      description: "We are not supercars. We are Lamborghini.",
      picture: tesla2,
    },
    {
      title: "Section 3",
      description: "",
    },
    {
      title: "Section 4",
      description: "",
    },
  ]);

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
  };

  if (!fullpages.length) {
    return null;
  }

  const Menu = () => (
    <div
      className="menu"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100,
      }}
    ></div>
  );

  return (
    <Layout>
      <Menu />
      <ReactFullpage
        // debug
        // pluginWrapper={pluginWrapper}
        // Get one from https://alvarotrigo.com/fullPage/pricing/
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000}
        navigation
        navigationTooltips={["Model S", "Lamborghini"]}
        showActiveTooltip={true}
        continuousVertical={true}
        fadingEffect={true}
        fitToSection={true}
        fitToSectionDelay={100}
        // parallax={true}
        // parallaxOptions={{
        //   type: "reveal",
        //   percentage: 62,
        //   property: "translate",
        // }}
        // controlArrows={true}
        // controlArrowsHTML={[
        //   '<div class="fp-arrow"></div>',
        //   '<div class="fp-arrow"></div>',
        // ]}
        anchors={["firstPage", "secondPage", "thirdPage", "fourthPage"]}
        sectionSelector={SECTION_SEL}
        onLeave={onLeave}
        sectionsColor={sectionsColor}
        verticalCentered={true}
        render={({ comp, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            {fullpages.map((item, idx) => (
              <div key={idx} className={SEL} id={`slide${idx}`}>
                <div
                  className="slide"
                  style={{
                    backgroundImage: `url(${item.picture})`,
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                  }}
                >
                  <h3 className={styles.title}>{item.title}</h3>
                  {/* <div style={{ background: "black" }}> */}
                  <p className={styles.text}>{item.description}</p>
                  {/* </div> */}
                  {/* <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      shape="circle"
                      size="large"
                      icon={<CaretDownOutlined />}
                      onClick={() => fullpageApi.moveSectionDown()}
                    />
                  </div> */}
                </div>
                {/* <div className="slide">
                    <h3>2</h3>
                  </div>
                  <div className="slide">
                    <h3>3</h3>
                  </div> */}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </Layout>
  );
}
