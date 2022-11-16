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

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

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
  // useEffect(() => {
  //   axios.get('https://openapi.twse.com.tw/v1/opendata/t187ap03_L').then(res => {
  //     console.log(res);
  //   })
  // })
  // const { fullpages } = this.state;

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
        pluginWrapper={pluginWrapper}
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
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      shape="circle"
                      size="large"
                      icon={<CaretDownOutlined />}
                      onClick={() => fullpageApi.moveSectionDown()}
                    />
                  </div>
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

      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <div style={{ width: '80%' }}>
          O’Glamping
          2021年O’glamping誕生在台灣海角的最南端，墾丁貓鼻頭國家公園內。這是一座愛露營人的夢幻天堂，有說走就走免裝備的野營服務，有專業露營車位，及DIY營位。獨樹一幟的獨門、獨院、獨戶的營位，保有露營的隱私，及降低聲音干擾，更備有多功能的種種設施及營區活動，讓露營更舒適及豐富動態。 遠眺大尖山，鄰近海灘，無光害的最佳觀星點，園主創造了一處人人皆可露的桃花源，邀您一起吹海風，戲灘，探索自然，盡享野營趣味。位於臺灣左腳最南端貓鼻頭公園旁，占地總面積約4公頃
        </div>
      </div> */}
    </Layout>
  );
}
