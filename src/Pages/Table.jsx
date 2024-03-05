import { useEffect, useState } from 'react';
import '../App.css'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'email', headerName: 'email', width: 130 },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
];



const Table = () => {
    const [User, setUser] = useState([])

    useEffect(() => {
        fetch('https://assinment-task-for-back-end-surver.vercel.app/postoprs')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUser(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    const rows = User.map((element, index) => ({ id: index+1, email: element.email, fullName: element.name, age: 35 }))
    

    return (
        <div className='container2' style={{ height: 400, }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}
export default Table;