import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../component';

const Orders = () => {
  return (
    <div className="m-1 md:m-5 mt-5 p-1 md:p-5 bg-white rounded-3xl">
      <Header category="Page" title="Orders"/>
      <GridComponent
      id="gridComp"
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Orders