import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';




function createData(name, code, population, size, density) {

  return { name, code, population, size, density };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns = [
    { id: 'name', label: 'Item', minWidth: 170 },
    { id: 'code', label: 'Calories', minWidth: 100 },
    {
      id: 'population',
      label: 'Protein',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString(),
    },
    {
      id: 'size',
      label: 'Sodium',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString(),
    },
    {
      id: 'density',
      label: 'Trans Fats',
      minWidth: 170,
      align: 'right',
      format: value => value.toFixed(),
    },
  ];
  

  const rows = [
    createData(props.selectedBread, 'IT', 60483973, 301340),
    createData(props.selectedMeat, 'US1', 327167434, 9833520),
    createData(props.selectedVeg, 'US2', 111111, 111111),
    createData(props.selectedSauce, 'US3', 11111111, 1111111),
    createData(props.selectedDrink, 'US4', 11111111, 11111),
    createData(props.selectedSide, 'US5', 111111111, 1111111111),
    createData("Totals: ", props.caloriesCalc, props.proteinCalc, props.sodiumCalc, props.transfatsCalc)
  ];


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}



