import React, { useState } from 'react'
import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel } from  '@tanstack/react-table';
import '../assets/css/gestioTeam.css'

const Table = ({data, columns}) => {
  console.log(data);

    const table = useReactTable({
        data,
        columns,
        rowsPerPage: 6,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });
    
  return (
    <>
       <table className='table table-sm table-redounded table-bordered table-hover' id='tptmd'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="border-b border-gray-300 text-gray-600 bg-gray-100" >
              {headerGroup.headers.map(header => (
                <th key={header.id} className="py-2 px-4 text-left uppercase">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.slice(0,5).map(row => (
            <tr key={row.id} className="text-gray-600 hover:bg-slate-100" >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="py-2 px-4" >
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length > 0 &&  <nav aria-label="Page navigation example">
        <ul className="pagination">
          <button onClick={() => table.previousPage()} className="btn-p page-item">
              <span className="page-link" aria-hidden="true">«</span>
          </button>
          <button onClick={() => table.nextPage()} className="btn-p page-item">
            <span className="page-link" aria-hidden="true">»</span>
          </button>
        </ul>
      </nav>}
    </>
  )
}

export default Table