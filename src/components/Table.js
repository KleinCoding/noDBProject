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
// console.log("this is create data!")
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


  // let valCal =0;
  // let valProt = 0;
  // let valSod= 0;
  // let valTran= 0;




  function  createDataBread (element) {
    let valCal =0;
    let valProt = 0;
    let valSod= 0;
    let valTran= 0;
  
    if (element === "Wheat") {
      let valCal = (props.breads[1].calories);
      let valProt = (props.breads[1].protein);
      let valSod = (props.breads[1].sodium);
      let valTran = (props.breads[1].transfats);
      console.log("Create data bread step 1", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "White") {
      let valCal = (props.breads[2].calories);
      let valProt = (props.breads[2].protein);
      let valSod = (props.breads[2].sodium);
      let valTran = (props.breads[2].transfats);
      console.log("Create data bread step 1-white", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Italian Herb") {
      let valCal = (props.breads[3].calories);
      let valProt = (props.breads[3].protein);
      let valSod = (props.breads[3].sodium);
      let valTran = (props.breads[3].transfats);
      console.log("Create data bread step 1-herb", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Flatcarboard") {
      let valCal = (props.breads[4].calories);
      let valProt = (props.breads[4].protein);
      let valSod = (props.breads[4].sodium);
      let valTran = (props.breads[4].transfats);
      console.log("Create data bread step 1-flat", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    console.log("Create data bread step 2", element, valCal, valProt, valSod, valTran)
    return { element, valCal, valProt, valSod, valTran};
  }
  
 
  function  createDataMeat (element) {
    let valCal =0;
    let valProt = 0;
    let valSod= 0;
    let valTran= 0;
  
    if (element === "Ham") {
      let valCal = (props.meats[1].calories);
      let valProt = (props.meats[1].protein);
      let valSod = (props.meats[1].sodium);
      let valTran = (props.meats[1].transfats);
      console.log("Create data meat step 1 - 1", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Turkey") {
      let valCal = (props.meats[2].calories);
      let valProt = (props.meats[2].protein);
      let valSod = (props.meats[2].sodium);
      let valTran = (props.meats[2].transfats);
      console.log("Create data meat step 1- 2", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Iguana") {
      let valCal = (props.meats[3].calories);
      let valProt = (props.meats[3].protein);
      let valSod = (props.meats[3].sodium);
      let valTran = (props.meats[3].transfats);
      console.log("Create data bread step 1- 3", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Salami") {
      let valCal = (props.meats[4].calories);
      let valProt = (props.meats[4].protein);
      let valSod = (props.meats[4].sodium);
      let valTran = (props.meats[4].transfats);
      console.log("Create data bread step 1- 4", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    console.log("Create data meat step 2", element, valCal, valProt, valSod, valTran)
    return { element, valCal, valProt, valSod, valTran};
  }
  
  function  createDataVeg (element) {
    let valCal =0;
    let valProt = 0;
    let valSod= 0;
    let valTran= 0;
  
    if (element === "Lettuce") {
      let valCal = (props.vegs[1].calories);
      let valProt = (props.vegs[1].protein);
      let valSod = (props.vegs[1].sodium);
      let valTran = (props.vegs[1].transfats);
      console.log("Create data veg step 1 - 1", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Spinach") {
      let valCal = (props.vegs[2].calories);
      let valProt = (props.vegs[2].protein);
      let valSod = (props.vegs[2].sodium);
      let valTran = (props.vegs[2].transfats);
      console.log("Create data veg step 1- 2", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Bulbasaur") {
      let valCal = (props.vegs[3].calories);
      let valProt = (props.vegs[3].protein);
      let valSod = (props.vegs[3].sodium);
      let valTran = (props.vegs[3].transfats);
      console.log("Create data veg step 1- 3", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Onion") {
      let valCal = (props.vegs[4].calories);
      let valProt = (props.vegs[4].protein);
      let valSod = (props.vegs[4].sodium);
      let valTran = (props.vegs[4].transfats);
      console.log("Create data veg step 1- 4", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    console.log("Create data veg step 2", element, valCal, valProt, valSod, valTran)
    return { element, valCal, valProt, valSod, valTran};
  }
  
 
  function  createDataSauce (element) {
    let valCal =0;
    let valProt = 0;
    let valSod= 0;
    let valTran= 0;
  
    if (element === "Vainaigrette") {
      let valCal = (props.sauces[1].calories);
      let valProt = (props.sauces[1].protein);
      let valSod = (props.sauces[1].sodium);
      let valTran = (props.sauces[1].transfats);
      console.log("Create data veg sauce 1 - 1", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Mustard") {
      let valCal = (props.sauces[2].calories);
      let valProt = (props.sauces[2].protein);
      let valSod = (props.sauces[2].sodium);
      let valTran = (props.sauces[2].transfats);
      console.log("Create data veg sauce 1- 2", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Cream of people") {
      let valCal = (props.sauces[3].calories);
      let valProt = (props.sauces[3].protein);
      let valSod = (props.sauces[3].sodium);
      let valTran = (props.sauces[3].transfats);
      console.log("Create data veg sauce 1- 3", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Mayo") {
      let valCal = (props.sauces[4].calories);
      let valProt = (props.sauces[4].protein);
      let valSod = (props.sauces[4].sodium);
      let valTran = (props.sauces[4].transfats);
      console.log("Create data veg sauce 1- 4", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    console.log("Create data sauce step 2", element, valCal, valProt, valSod, valTran)
    return { element, valCal, valProt, valSod, valTran};
  }
  
 




 
 
  function  createDataDrink (element) {
    let valCal =0;
    let valProt = 0;
    let valSod= 0;
    let valTran= 0;
  
    if (element === "Coke") {
      let valCal = (props.drinks[1].calories);
      let valProt = (props.drinks[1].protein);
      let valSod = (props.drinks[1].sodium);
      let valTran = (props.drinks[1].transfats);
      console.log("Create data drink 1 - 1", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Sprite") {
      let valCal = (props.drinks[2].calories);
      let valProt = (props.drinks[2].protein);
      let valSod = (props.drinks[2].sodium);
      let valTran = (props.drinks[2].transfats);
      console.log("Create data drink 1- 2", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Sugarjuice") {
      let valCal = (props.drinks[3].calories);
      let valProt = (props.drinks[3].protein);
      let valSod = (props.drinks[3].sodium);
      let valTran = (props.drinks[3].transfats);
      console.log("Create data drink 1- 3", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Salami Water") {
      let valCal = (props.drinks[4].calories);
      let valProt = (props.drinks[4].protein);
      let valSod = (props.drinks[4].sodium);
      let valTran = (props.drinks[4].transfats);
      console.log("Create data drink 1- 4", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    console.log("Create data drink step 2", element, valCal, valProt, valSod, valTran)
    return { element, valCal, valProt, valSod, valTran};
  }
  
 
  function  createDataSide (element) {
    let valCal =0;
    let valProt = 0;
    let valSod= 0;
    let valTran= 0;
  
    if (element === "Chocochip") {
      let valCal = (props.sides[1].calories);
      let valProt = (props.sides[1].protein);
      let valSod = (props.sides[1].sodium);
      let valTran = (props.sides[1].transfats);
      console.log("Create data side 1 - 1", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Macadamia nut") {
      let valCal = (props.sides[2].calories);
      let valProt = (props.sides[2].protein);
      let valSod = (props.sides[2].sodium);
      let valTran = (props.sides[2].transfats);
      console.log("Create data drink 1- 2", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Chips") {
      let valCal = (props.sides[3].calories);
      let valProt = (props.sides[3].protein);
      let valSod = (props.sides[3].sodium);
      let valTran = (props.sides[3].transfats);
      console.log("Create data side 1- 3", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    if (element === "Death") {
      let valCal = (props.sides[4].calories);
      let valProt = (props.sides[4].protein);
      let valSod = (props.sides[4].sodium);
      let valTran = (props.sides[4].transfats);
      console.log("Create data side 1- 4", element, valCal, valProt, valSod, valTran)
      return { element, valCal, valProt, valSod, valTran};
    }
    console.log("Create data side step 2", element, valCal, valProt, valSod, valTran)
    return { element, valCal, valProt, valSod, valTran};
  }
  


  function  createDataTotal (element) {
    let valCal =props.caloriesCalc;
    let valProt = props.proteinCalc;
    let valSod= props.sodiumCalc;
    let valTran= props.transfatsCalc;
    console.log("combine data", element, valCal, valProt, valSod, valTran)
    return { element, valCal, valProt, valSod, valTran};
  }





  
  const columns = [
    { id: 'element', label: 'Item', minWidth: 170 },

    { id: 'valCal', label: 'Calories', minWidth: 100 },
    {
      id: 'valProt',
      label: 'Protein',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString(),
    },
    {
      id: 'valSod',
      label: 'Sodium',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString(),
    },
    {
      id: 'valTran',
      label: 'Trans Fats',
      minWidth: 170,
      align: 'right',
      format: value => value.toFixed(),
    },
  ];
  

  const rows = [
    createDataBread(props.selectedBread),
    createDataMeat(props.selectedMeat),
    createDataVeg(props.selectedVeg),
    createDataSauce(props.selectedSauce),
    createDataDrink(props.selectedDrink),
    createDataSide(props.selectedSide),
    createDataTotal("Totals: ")
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



