import React,{Fragment} from "react";
import "./css/Users.css";
import close from "./images/close.png";
import { useTable, usePagination } from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  // Render the UI for your table
  return (
    <div>
      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <ul className="pagination">
        <li
          className="page-item"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <a className="page-link">First</a>
        </li>
        <li
          className="page-item"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <a className="page-link">{"<"}</a>
        </li>
        <li
          className="page-item"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <a className="page-link">{">"}</a>
        </li>
        <li
          className="page-item"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <a className="page-link">Last</a>
        </li>
        <li>
          <a className="page-link">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </a>
        </li>
        <li>
          <a className="page-link">
            <input
              className="form-control"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "60vw", height: "20px" }}
            />
          </a>
        </li>{" "}
        <select
          className="form-control"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          style={{ width: "120px", height: "38px" }}
        >
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </ul>
    </div>
  );
}

function PaginationTableComponent8() {
  const grades = [
    { ID: "1", gradname: "First Grade" },
    { ID: "2", gradname: "Second Grade" },
    { ID: "3", gradname: "Third Grade" }

  ];


  const subjects = [
    { ID: "1", subname: "Quran" },
    { ID: "2", subname: "Islamic" },
    { ID: "3", subname: "Arabic" }

  ];

  const columns = React.useMemo(() => [
    {
      Header: "Unit Name",
      accessor: "unitname",
    },

    {
      Header: "Edit",
      accessor: "edit",
      Cell: ({ cell }) => (
        <React.Fragment>
             <div id="box6">
          <div className="adds">
            <b>Edit Unit </b>
            <a href="#" className="close">
              <img src={close} />
            </a>
          </div>
          <div className="for5">
            <label>Unit Name</label>
            <input type="text" />
            <div className="for6">
            <label>Subject Name </label>
            
            <select>
            {subjects.map((name)=>
                     <option>{name.subname}</option>
                    
                
                )}
              
            </select>
          </div>

          <div className="for7">
          <label>Grade Name </label>
          <select>
          {grades.map((name)=>
                     <option>{name.gradname}</option>
                    
                
                )}
          </select>
          </div>
            
            <br/>
            

          <button className="update2">Update</button>
          </div>
          
        </div>
        <a href="#box6" >
          <button className="edit">Edit</button>
        </a>
        </React.Fragment>
       
        
      ),
    },
    {
      Header: "Activtion",
      accessor: "activtion",
      Cell: ({ cell }) => (
        <a href="#">
          
          <button className="delete">UnActive</button>
        </a>
      ),
    },
  ]);

  const data = [
    {
        unitname: "First Unit",

      edit: "",
      delete: "",
    },
  ];
  console.log(JSON.stringify(data));

  return <Table columns={columns} data={data} />;
}

export default PaginationTableComponent8;
