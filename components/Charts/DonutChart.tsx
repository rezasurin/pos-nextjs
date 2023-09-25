"use client"
import ReactEChart, { EChartsOption } from 'echarts-for-react'

export const DonutChart = ({ title }) => {
  const option: EChartsOption = {
    title: {
      text: title
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      // top: '5%',
      // bottom: 'bottom',
      left: 'right'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        right: 80,
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 24,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Main Course' },
          { value: 735, name: 'Coffee' },
          { value: 580, name: 'Beverages' },
          { value: 484, name: 'Side Dishes' },
          { value: 300, name: 'Milk' }
        ]
      }
    ],
    // graphic: {
    //   elements: [
    //     {
    //       type: 'text',
    //       right: 160,
    //       bottom: 60,
    //       style: {
    //         text: "TEST",
    //         font: 'bolder 80px monospace',
    //         fill: 'rgba(100, 100, 100, 0.25)'
    //       },
    //       z: 100
    //     }
    //   ]
    // }
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