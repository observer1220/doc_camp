import React, { useEffect, useLayoutEffect } from "react";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import { datasource } from "./mock";

const { Meta } = Card;

export default function PersonInformation() {
  useEffect(() => {
    console.log(datasource);
  });
  return (
    <>
      <Card>
        <Row justify={"center"} gutter={[16, 16]}>
          {datasource.map((item, idx) => {
            return (
              <Col key={idx}>
                <Card
                  hoverable
                  style={{ width: 360 }}
                  cover={<img alt="" src={item.avator} />}
                >
                  <Meta title={item.title} description={item.description} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Card>
    </>

    // <div>
    //   <div data-aos="fade-up">
    //     <Row justify={"center"} gutter={[16, 16]}>
    //       <Col>
    //         <Card
    //           hoverable
    //           style={{ width: 360 }}
    //           cover={<img alt="" src={doctor2} />}
    //         >
    //           <Meta title="陳啟川博士" description="陽明牙醫副院長" />
    //         </Card>
    //       </Col>
    //       <Col>
    //         <Card
    //           style={{ width: 360 }}
    //           title="陽明牙醫副院長"
    //           bordered={false}
    //         >
    //           <p>高雄榮總牙醫科臨床醫師</p>
    //           <p>高雄醫學院醫學系畢業</p>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </div>
    //   <div data-aos="fade-up">
    //     <Row justify={"center"} gutter={[16, 16]}>
    //       <Col>
    //         <Card
    //           style={{ width: 360 }}
    //           title="陽明牙醫主治醫師"
    //           bordered={false}
    //         >
    //           <p>台北萬芳醫院牙醫科醫師</p>
    //           <p>長庚醫學大學醫學系</p>
    //         </Card>
    //       </Col>
    //       <Col>
    //         <div data-aos="fade-up">
    //           <Card
    //             hoverable
    //             style={{ width: 360 }}
    //             cover={<img alt="" src={doctor1} />}
    //           >
    //             <Meta title="陳曉明醫師" description="主治醫師" />
    //           </Card>
    //         </div>
    //       </Col>
    //     </Row>
    //   </div>
    // </div>
  );
}
