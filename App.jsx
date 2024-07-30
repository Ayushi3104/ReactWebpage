import React from "react";
import { useTable, useSortBy, usePagination } from 'react-table';

//  6.9k(gzipped: 2.7k)
/*const fetchUsers = async (page, limit) => {
  const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${page * limit}`);
  const data = await response.json();
  return data.users;
};*/


const data = [
  {

    id: 1,
    gender: "Male",
    salary: 400000,
    Age: 32,

  },
  {

    id: 2,
    gender: "Female",
    salary: 4300000,
    Age: 56,
  },

  {

    id: 3,
    gender: "Male",
    salary: 7000000,
  },
  {

    id: 4,
    gender: "Male",
    salary: 4500000,
  },
  {

    id: 5,
    gender: "Female",
    salary: 3600,
  },
  {

    id: 6,
    gender: "Male",
    salary: 55000,
  },
  {

    id: 7,
    gender: "Female",
    salary: 4800,
  },
  {

    id: 8,
    gender: "Male",
    salary: 490000,
  },

  {

    id: 9,
    gender: "Male",
    salary: 66000,
  },
  {

    id: 10,
    gender: "Male",
    salary: 870000,
  },

];



const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Salary",
    accessor: "salary",
  },


];



const App = () => {
  /*const url = "https://dummyjson.com/users"
    fetch(url)
      .then(response => response.json()).then(json => {
        console.log("jsonnn", json)
      }).catch(e => {
        console.log("e", e)
      })
  },
  */


  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, nextPage, previousPage } =
    useTable({
      columns,
      data,
    },
      useSortBy,
      usePagination
    );

  // const props = getTableProps();


  return (
    <div classname="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted && (<span>{column.isSortedDesc ? "⬆️" : "⬇️"} </span>)}




                </th>
              ))}
            </tr>

          ))}

        </thead>
        <tbody{...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);

            return <tr {...row.getRowProps()}>

              {
                row.cells.map(cell => (
                  <td {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))
              }





            </tr>
          })}





        </tbody>
      </table>

      <div>
        <button>Prev</button>
        <button>Next</button>

      </div>
    </div>
  )

};

export default App;
