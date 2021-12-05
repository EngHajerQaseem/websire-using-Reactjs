
import React from "react";

import { useTable, usePagination } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';

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
    )

    // Render the UI for your table
    return (
        <div>
            
        
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
            <ul className="pagination">
                <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <a className="page-link">First</a>
                </li>
                <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <a className="page-link">{'<'}</a>
                </li>
                <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                    <a className="page-link">{'>'}</a>
                </li>
                <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <a className="page-link">Last</a>
                </li>
                <li>
                    <a className="page-link">
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </a>
                </li>
                <li>
                    <a className="page-link">
                        <input
                            className="form-control"
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{ width: '60vw', height: '20px' }}
                        />
                    </a>
                </li>{' '}
                <select
                    className="form-control"
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                    style={{ width: '120px', height: '38px' }}
                >
                    {[5, 10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </ul>
        </div >
    )
}

function PaginationTableComponent3() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'Teacher Name',
                        accessor: 'teachername',
                    },
                    {
                        Header: 'Gender',
                        accessor: 'gender',
                    },
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Address',
                        accessor: 'address',
                    },
                    {
                        Header: 'Phone',
                        accessor: 'phone',
                    },
                    {
                        Header: 'Age',
                        accessor: 'age',
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                    },
                   
                ],
            },
        ],
        []
    )

    const data = [
        {
            "teachername": "Mohammed",
            "gender": "Male",
            "address": "30St",
            "phone": 46,
            "age": 25,
            "status": "Active"
        },
        {
            "teachername": "Saeed",
            "gender": "Male",
            "address": "Hada",
            "phone": 56,
            "age": 15,
            "status": "Active"
        },
        {
            "teachername": "Amani",
            "gender": "Female",
            "address": "Aden",
            "phone": 45,
            "age": 66,
            "status": "Unactive"
        },
        {
            "teachername": "Nawal",
            "gender": "Female",
            "address": "Taiz",
            "phone": 25,
            "age": 67,
            "status": "Active"
        },

        {
            "teachername": "Hamed",
            "gender": "Male",
            "address": "Taiz",
            "phone": 25,
            "age": 67,
            "status": "Active"
        },
        {
            "teachername": "Ahlam",
            "gender": "Female",
            "address":"Aden",
            "phone": 28,
            "age": 23,
            "status": "Unactive"
        }]
    console.log(JSON.stringify(data));


    return (
        <Table columns={columns} data={data} />
    )
}

export default PaginationTableComponent3;