import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export function EChart({ option }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    chartInstance.setOption(option);

    // making the resizing smooth
    const handleResize = () => {
      chartInstance.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartInstance.dispose();
    };
  }, [option]);

  return <div ref={chartRef} className="echart" />;
}
