import React, { useEffect, useState } from "react";
import { Table as BTable, Button } from 'react-bootstrap';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table';
import { useSearchParams } from "react-router-dom";

function Table({ columns, data }) {
  const [sorting, setSorting] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const table = useReactTable({
    data: searchedData.length ? searchedData : data,
    columns,
    State: {
      sorting,
    },
    manualSorting: true,
    onSortingChange: setSorting,
    enableMultiSort: false,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  })

//   console.log('datatable', { columns, data });
  useEffect(() => {
    setSearchedData(data.filter(item =>
      Object.values(item).some(value => value?.toString().toLowerCase().includes(searchTerm.toLowerCase()))
    ));
  }, [searchTerm, data]);

  useEffect(() => {
    if (sorting.length) {
      setSearchParams({
        sort: sorting
          .map(el => `${el.id}:${el.desc ? 'desc' : 'asc'}`)
          .join(',')
      })
    } else {
      const obj = Object.fromEntries(searchParams)
      delete obj.sort
      setSearchParams(obj)
    }
  }, [sorting])

  return (
    <div>
      <div className="mb-3 lg:w-1/3 md:w-1/2 sm:full ml-auto drop-shadow">
        <input
          type="text"
          className="form-control"
          placeholder="Search Here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="bg-white rounded-xl overflow-x-scroll drop-shadow">
        <BTable striped bordered hover responsive size="sm" id="table-main">
          <thead style={{height:"5vh", background:"rgb(255, 196, 54)", textAlign:"justify"}}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th style={{ cursor: 'pointer' }}
                    key={header.id}
                    colSpan={header.colSpan}
                    onClick={() => header.column.toggleSorting(null, true)}
                  >
                    <div className="px-1 text-cyan-900">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      <span className=" ">
                        {{
                          true: '↑',
                          false: '↓',
                        }[header.column.isSorted ? header.column.isSortedDesc : null]}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    <div
                      onClick={() => { console.log(flexRender(cell.column.columnDef.cell, cell.getContext())) }}
                      className="w-max ms-2">{flexRender(cell.column.columnDef.cell, cell.getContext())}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </BTable>
      </div>
      <div className="flex justify-center items-center gap-1 me-1">
        <Button
          className="rounded px-1 py-1 px-1 font-bold drop-shadow bg-[#0e4bae]"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </Button>
        <Button
          className="rounded px-1 py-1 px-1 font-bold drop-shadow bg-[#0e4bae]"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </Button>
        <Button
          className="rounded px-1 py-1 px-1 font-bold drop-shadow bg-[#0e4bae]"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </Button>
        <Button
          className="rounded px-1 py-1 px-1 font-bold drop-shadow bg-[#0e4bae]"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </Button>
        <span className="flex text-sm min-w-max items-center gap-1 font-bold text-black">
          | page :
          <input
            style={{ width: '40px' }}
            value={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border py-1 my-2 rounded px-1 text-center"
          />
        </span>
        <select
          className="show-page py-1 bg-primary text-sm text-black px-1 rounded"
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[3, 10, 25, 50, 100, 250, 500].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Table;