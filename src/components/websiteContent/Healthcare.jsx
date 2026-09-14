import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export function Healthcare() {

  const chartRef = useRef(null);

  useEffect(() => {
      // 2. Initialize the chart inside useEffect (after the DOM is mounted)
      const myChart = echarts.init(chartRef.current);

      // 3. Set the chart options
      const option = {
        title: {
          text: 'ECharts Example'
        },
        tooltip: {},
        xAxis: {
          data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
        },
        yAxis: {},
        series: [
          {
            name: 'sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };



      myChart.setOption(option);

      // 4. Clean up the instance when the component unmounts
      return () => {
        myChart.dispose();
      };
    }, []);

  return (
    <main id="main-content" className="px-spacing" style={{ minHeight: '80vh' }}>
      {/* <h1 className="text-center my-spacing-l">Medicaid Stress Testing</h1>
      <p>Descriptive analytics, interactive dashboard, visualizations, etc.</p>*/}
      <div id="chart1" ref={chartRef} style={{ width: '600px', height: '400px' }}></div>
    </main>
  );
}
