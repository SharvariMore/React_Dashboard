import React from 'react';
import { Header, ChartsHeader, LineChart } from '../../component';


const Line = () => {
  return (
    <div className="m-1 md:m-5 mt-5 p-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Inflation Rate"/>
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  )
}

export default Line