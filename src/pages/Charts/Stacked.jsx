import React from 'react';
import { ChartsHeader, Header, Stacked as StackedChart } from '../../component';


const Stacked = () => {
  return (
    <div className="m-1 md:m-5 mt-5 p-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
  )
}

export default Stacked