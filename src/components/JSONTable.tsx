import { useState, useEffect } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';


export default function JSONTable()
{
const [tableData, setTableData] = useState([])

useEffect(() => {
    fetch('http://localhost:3000/users')
    .then((data) => data.json()).
    then((data) => setTableData(data))
}
)

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'username', headerName: 'Username', width: 130 },
        { field: 'password', headerName: 'Password', width: 130 },
      ];

    return (
        <DataGrid
        rows={tableData}
        columns={columns}
      />
    )
}
