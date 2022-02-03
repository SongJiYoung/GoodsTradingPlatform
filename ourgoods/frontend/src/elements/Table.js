import React from "react";
import styled from "styled-components";
import { useTable, useGlobalFilter, useSortBy } from "react-table";

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  return (
    <React.Fragment>
      <TableSheet {...getTableProps()}>
        <TableHead>
          {headerGroups.map((header) => (
            <TableRow {...header.getHeaderGroupProps()}>
              {header.headers.map((column) => (
                <TableHeader {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableData {...cell.getCellProps()}>{cell.render("Cell")}</TableData>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </TableSheet>
    </React.Fragment>
  );
}

export default Table;

const TableSheet = styled.table`
  width: 1000px;
  margin: auto;
  margin-bottom: 2.5rem;
`;

const TableHead = styled.thead`
  font-size: 15px;
  color: #333333;
  border: 1px solid #666666;
`;

const TableHeader = styled.th`
  border: 1px solid #666666;
  padding: 3px 5px;
`;

const TableBody = styled.tbody`
  font-size: 14px;
  color: #333333;
`;

const TableRow = styled.tr`
  border: 1px solid #666666;
`;

const TableData = styled.td`
  border: 1px solid #666666;
  padding: 3px 5px;
`;