import React from 'react';
import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Header, Pie as PieChart } from '../../component';

const Pie = () => {
  return (
    <div className="m-1 md:m-5 mt-5 p-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart 
      id="chart-pie" 
      data={pieChartData} 
      legendVisiblity 
      height="full" />
    </div>
  </div>
  )
}

export default Pie