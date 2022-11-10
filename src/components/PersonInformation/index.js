import React, { useEffect, useLayoutEffect } from "react";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
// import { datasource } from "./mock";
import doctor1 from "../../../static/img/photo/doctor1.jpg";
import doctor2 from "../../../static/img/photo/doctor2.jpg";

const { Meta } = Card;

export default function PersonInformation() {
  const datasource = [
    {
      title: "陳啟川博士",
      description: "寶貝兔牙醫診所副院長",
      avator: doctor1,
      // experience: ["高雄榮總牙醫科臨床醫師", "高雄醫學院醫學系畢業"],
    },
    {
      title: "Kent-san",
      description: "所長",
      avator: doctor2,
      // experience: ["高雄榮總牙醫科臨床醫師"],
    },
  ];
  return (
    // <Row>
    //   {datasource.map((item, idx) => {
    //     <p key={idx}> {item.title}</p>;
    //   })}
    //   <Col></Col>
    // </Row>
    <div>
      <div data-aos="fade-up">
        <Row justify={"center"} gutter={[16, 16]}>
          <Col>
            <Card
              hoverable
              style={{ width: 360 }}
              cover={<img alt="" src={doctor2} />}
            >
              <Meta title="陳啟川博士" description="寶貝兔牙醫診所副院長" />
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: 360 }}
              title="寶貝兔牙醫診所副院長"
              bordered={false}
            >
              <p>高雄榮總牙醫科臨床醫師</p>
              <p>高雄醫學院醫學系畢業</p>
            </Card>
          </Col>
        </Row>
      </div>
      <div data-aos="fade-up">
        <Row justify={"center"} gutter={[16, 16]}>
          <Col>
            <Card
              style={{ width: 360 }}
              title="寶貝兔牙醫診所主治醫師"
              bordered={false}
            >
              <p>台北萬芳醫院牙醫科醫師</p>
              <p>長庚醫學大學醫學系</p>
            </Card>
          </Col>
          <Col>
            <div data-aos="fade-up">
              <Card
                hoverable
                style={{ width: 360 }}
                cover={<img alt="" src={doctor1} />}
              >
                <Meta title="陳曉明醫師" description="主治醫師" />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
