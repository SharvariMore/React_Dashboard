import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../component';

const Employees = () => {
  return (
    <div className="m-1 md:m-5 mt-5 p-1 md:p-5 bg-white rounded-3xl">
      <Header category="Page" title="Employees"/>
      <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees;