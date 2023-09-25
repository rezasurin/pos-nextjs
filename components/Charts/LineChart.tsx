"use client"

import ReactEChart from 'echarts-for-react'

const LineChart = ({title}) => {
  const option = {
    title: {
      text: title
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  };

  return (
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
    option={option}
    />
  )
}

export default LineChart