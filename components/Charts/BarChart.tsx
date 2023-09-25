"use client"
import React from "react";
import ReactEChart from "echarts-for-react";
// import { ChartProps } from "./types";

const dataChart = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [
        120,
        {
          value: 200,
          itemStyle: {
            color: '#a90000'
          }
        },
        150,
        80,
        70,
        110,
        130
      ],
      type: 'bar'
    }
  ]
}

export const BarChart = ({ title }) => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [
          120,
          {
            value: 200,
            itemStyle: {
              color: '#a90000'
            }
          },
          150,
          80,
          70,
          110,
          130
        ],
        type: 'bar'
      }
    ]
  };

  // console.log(data,)

  return (
    // <div
    //   style={{
    //     width: "50%",
    //     height: "50%"
    //   }}
    // >
    <ReactEChart
      style={{
        width: "100%",
        height: "100%",
      }}
      opts={
        {
          renderer: "svg"
        }
      }
      option={{
        ...option,
        title: {
          ...option.title,
          text: title,
        },
        xAxis: {
          ...option.xAxis,
          data: dataChart?.xAxis,
        },
        series: dataChart.series,
      }}
    />
    // </div>
  );
}