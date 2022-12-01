import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import { BarChart, ComposedChart, DonutChart, LineChart, PieChart, RadarChart, RadialChart, ScatterChart } from '@ui5/webcomponents-react-charts';
import { Grid, Tab, TabContainer } from "@ui5/webcomponents-react";
import { Button, Card, Col, Row, Statistic } from "antd";
import { LineChartData, BarChartData, RadarChartData, ScatterChartData, DonutChartData, PieChartData } from './mock'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

export default function ChartPage() {
  return (
    <Layout title={'各式圖表'} description="Description will go into a meta tag in <head />">
      <TabContainer
        onTabSelect={function noRefCheck() { }}>
        <Tab additionalText="5" text="Tab One" icon="menu" selected>
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
        <Tab additionalText="20" icon="activities" selected text="Tab Two">
          Content Tab 2
        </Tab>
      </TabContainer>
    </Layout>
  );
}
