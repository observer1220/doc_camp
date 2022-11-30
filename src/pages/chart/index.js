import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import { BarChart, ComposedChart } from '@ui5/webcomponents-react-charts';

export default function ChartPage() {
  return (
    <Layout title={'Chart'} description="Description will go into a meta tag in <head />">
      <ComposedChart
        dataset={[
          {
            name: 'January',
            sessions: 300,
            users: 100,
            volume: 756
          },
          {
            name: 'February',
            sessions: 330,
            users: 230,
            volume: 880
          },
          {
            name: 'March',
            sessions: 404,
            users: 240,
            volume: 700
          },
          {
            name: 'April',
            sessions: 80,
            users: 280,
            volume: 604
          },
          {
            name: 'May',
            sessions: 300,
            users: 100,
            volume: 756
          },
          {
            name: 'June',
            sessions: 330,
            users: 230,
            volume: 880
          },
          {
            name: 'July',
            sessions: 470,
            users: 20,
            volume: 450
          },
          {
            name: 'August',
            sessions: 180,
            users: 220,
            volume: 104
          },
          {
            name: 'September',
            sessions: 360,
            users: 200,
            volume: 879
          },
          {
            name: 'October',
            sessions: 500,
            users: 250,
            volume: 200
          },
          {
            name: 'November',
            sessions: 404,
            users: 240,
            volume: 700
          },
          {
            name: 'December',
            sessions: 80,
            users: 280,
            volume: 604
          }
        ]}
        dimensions={[
          {
            accessor: 'name',
            formatter: function noRefCheck() { },
            interval: 0
          }
        ]}
        measures={[
          {
            accessor: 'sessions',
            label: 'Active Sessions',
            type: 'bar'
          },
          {
            accessor: 'users',
            formatter: function noRefCheck() { },
            label: 'Users',
            type: 'area'
          },
          {
            accessor: 'volume',
            formatter: function noRefCheck() { },
            label: 'Vol.',
            type: 'line'
          }
        ]}
        onClick={function noRefCheck() { }}
        onDataPointClick={function noRefCheck() { }}
        onLegendClick={function noRefCheck() { }}
        style={{
          height: '60vh'
        }}
      />
    </Layout>
  );
}
