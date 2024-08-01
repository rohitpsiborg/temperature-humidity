import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
} from "@mui/material";

interface Column {
  id: string;
  label: string;
  align?: "left" | "center" | "right";
}

interface Row {
  [key: string]: any;
}

interface CustomTableProps {
  columns: Column[];
  page: number;
  rowsPerPage: number;
  rows: Row[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  actions?: JSX.Element[];
}

const CustomTable: React.FC<CustomTableProps> = ({
  rows,
  page,
  columns,
  setPage,
  setRowsPerPage,
  rowsPerPage,
  actions = [],
}) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
        <TableBody>
          <TableRow>
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex} align={column.align}>
                <strong>{column.label}</strong>
              </TableCell>
            ))}
            {actions.length > 0 && (
              <TableCell align="center">
                <strong>Action</strong>
              </TableCell>
            )}
          </TableRow>
          {rows &&
            rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} align={column.align}>
                    {row[column.id]}
                  </TableCell>
                ))}
                {actions.length > 0 && (
                  <TableCell align="center">
                    {actions.map((action, index) => (
                      <React.Fragment key={index}>{action}</React.Fragment>
                    ))}
                  </TableCell>
                )}
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              page={page}
              count={rows.length}
              rowsPerPageOptions={[5, 10, 25]}
              rowsPerPage={rowsPerPage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
