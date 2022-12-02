import React, { useEffect, useRef, useState } from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import { BarChart, ComposedChart, DonutChart, LineChart, PieChart, RadarChart, RadialChart, ScatterChart } from '@ui5/webcomponents-react-charts';
import { Grid, Tab, TabContainer } from "@ui5/webcomponents-react";
import { Button, Card, Col, Row, Statistic } from "antd";
import { LineChartData, BarChartData, RadarChartData, ScatterChartData, DonutChartData, PieChartData } from './mock'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Line, Pie } from '@antv/g2plot';
import { last } from '@antv/util';
import * as _ from '@antv/util';
import axios from "axios";
import createG2 from 'g2-react';
import { Stat } from 'g2';
import { diamond } from './diamand'

export default function ChartPage() {
  const myChart = useRef();
  const [state] = useState({
    data: diamond.slice(0, diamond.length / 2 - 1),
    width: 500,
    height: 250,
    plotCfg: {
      margin: [10, 100, 50, 120],
    },
  })

  const Pie = createG2(chart => {
    chart.coord('theta');
    chart.intervalStack().position(Stat.summary.proportion()).color('cut');
    chart.render();
  });

  const changeHandler = () => {
    const chart = myChart.current
    // console.log(chart)
    // chart.clear();
    // chart.intervalStack().position(Stat.summary.proportion()).color('clarity');
    // chart.current.render();
  }


  // 第1個圖表
  const divStyles = {
    position: 'absolute',
    background: 'rgba(255,255,255,0.95)',
    boxShadow: 'rgb(174, 174, 174) 0px 0px 10px',
    borderRadius: '4px',
  };

  const setStyles = (container, styles) => {
    for (const key in styles) {
      container.style[key] = styles[key];
    }
  };

  axios.get('https://gw.alipayobjects.com/os/bmw-prod/5a209bb2-ee85-412f-a689-cdb16159a459.json')
    .then((res) =>
      res.data.filter((d) => ['United States', 'France', 'Germany', 'Austria', 'Japan', 'Sweden'].includes(d.country)))
    .then((data) => {
      console.log(data);
      const line = new Line('container', {
        padding: 'auto',
        appendPadding: [8, 10, 0, 10],
        data,
        xField: 'year',
        yField: 'value',
        seriesField: 'country',
        smooth: true,
        lineStyle: ({ country }) => {
          const importantCountries = ['United States', 'France', 'Germany'];
          const idx = importantCountries.indexOf(country);
          return { lineWidth: idx !== -1 ? 2 : 1 };
        },
        interactions: [{ type: 'brush' }],
        tooltip: {
          follow: true,
          enterable: true,
          offset: 18,
          shared: true,
          marker: { lineWidth: 0.5, r: 3 },
        },
      });

      line.render();

      const createPie = (container, data) => {
        const piePlot = new Pie(container, {
          data,
          width: 120,
          height: 120,
          appendPadding: 10,
          autoFit: false,
          angleField: 'value',
          colorField: 'type',
          legend: false,
          tooltip: false,
          animation: false,
          color: line.chart.themeObject.colors10,
          label: {
            type: 'inner',
            offset: '-10%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          },
        });
        piePlot.render();
      };

      line.update({
        tooltip: {
          customContent: (value, items) => {
            const pieData = items.map((item) => ({
              type: item.name,
              value: Number(item.value),
            }));
            const container = document.createElement('div');
            const pieContainer = document.createElement('div');
            setStyles(container, divStyles);
            createPie(pieContainer, pieData);
            container.appendChild(pieContainer);
            return container;
          },
        },
      });
      // 初始化，默认激活
      const point = line.chart.getXY(last(data.filter((d) => !!d.value)));
      line.chart.showTooltip(point);
    });

  return (
    <Layout title={'各式圖表'} description="Description will go into a meta tag in <head />">
      <TabContainer>
        <Tab text="SAP UI5圖表" selected>
          <Grid>
            <Card data-layout-span="XL4 L4 M12 S12">
              <Statistic title="Active" value={11.28} precision={2} valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%" />
            </Card>
            <Card data-layout-span="XL4 L4 M12 S12">
              <Statistic title="Idle" value={9.3} precision={2} valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
            <Card data-layout-span="XL4 L4 M12 S12">
              <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
              <Button style={{ marginTop: 16 }} type="primary">
                Recharge
              </Button>
            </Card>
            <LineChart
              data-layout-span="XL8 L8 M12 S12"
              dataset={LineChartData}
              dimensions={[
                {
                  accessor: 'name',
                  interval: 0
                }
              ]}
              measures={[
                {
                  accessor: 'users',
                  label: 'Users'
                },
                {
                  accessor: 'sessions',
                  hideDataLabel: true,
                  label: 'Active Sessions'
                },
                {
                  accessor: 'volume',
                  label: 'Vol.'
                }
              ]}
              onClick={function noRefCheck() { }}
            />
            <BarChart
              data-layout-span="XL4 L4 M12 S12"
              chartConfig={{
                zoomingTool: true
              }}
              dataset={BarChartData}
              dimensions={[
                {
                  accessor: 'name',
                }
              ]}
              measures={[
                {
                  accessor: 'users',
                  label: 'number of users'
                },
                {
                  accessor: 'sessions'
                },
                {
                  accessor: 'volume'
                }
              ]}
              onClick={function noRefCheck() { }}
            />
            <ScatterChart
              data-layout-span="XL8 L8 M12 S12"
              dataset={ScatterChartData}
              measures={[
                {
                  accessor: 'users',
                  axis: 'x',
                  label: 'Users'
                },
                {
                  accessor: 'sessions',
                  axis: 'y',
                  label: 'Sessions'
                },
                {
                  accessor: 'volume',
                  axis: 'z'
                }
              ]}
              onClick={function noRefCheck() { }}
            />
            <RadarChart
              data-layout-span="XL4 L4 M12 S12"
              chartConfig={{
                polarGridType: 'polygon'
              }}
              dataset={RadarChartData}
              dimensions={[
                {
                  accessor: 'name',
                }
              ]}
              measures={[
                {
                  accessor: 'users',
                  label: 'number of users'
                },
                {
                  accessor: 'sessions'
                },
                {
                  accessor: 'volume'
                }
              ]}
              onClick={function noRefCheck() { }}
            />
            <DonutChart
              data-layout-span="XL4 L4 M12 S12"
              dataset={DonutChartData}
              dimension={{
                accessor: 'name'
              }}
              measure={{
                accessor: 'users'
              }}
              onClick={function noRefCheck() { }}
            />
            <PieChart
              data-layout-span="XL4 L4 M12 S12"
              dataset={PieChartData}
              dimension={{
                accessor: 'name'
              }}
              measure={{
                accessor: 'users'
              }}
              onClick={function noRefCheck() { }}
              onDataPointClick={function noRefCheck() { }}
              onLegendClick={function noRefCheck() { }}
            />
            <RadialChart
              data-layout-span="XL4 L4 M12 S12"
              chartConfig={{
                innerRadius: '75%',
              }}
              displayValue="50%"
              onClick={function noRefCheck() { }}
              value={50}
            />
          </Grid>
        </Tab>
        <Tab text="AntV圖表">
          {/* 第1張圖 */}
          <div id="container" />
          {/* 第2張圖 */}
          <div id="container"></div>
        </Tab>
      </TabContainer>
    </Layout>
  );
}
