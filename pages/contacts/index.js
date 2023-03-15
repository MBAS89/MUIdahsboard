import {Box} from '@mui/material';
import {tokens} from '../../components/theme';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '../data/mockData';
import {useTheme} from '@mui/material';
import Header from "@/components/Header";
import AdminDashLayout from "../../components/AdminDashLayout";
import {Typography} from '@mui/material';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {field:'id',headerName:'ID',flex:0.5},
    {field:'registrarId',headerName:'Registrar ID'},
    {field:'name',headerName:'Name',flex:1,cellClassName:'name-column--cell'},
    {field:'age',headerName:'Age',type:'number',headerAlign:'left',align:'left'},
    {field:'phone',headerName:'Phone Number',flex:1},
    {field:'email',headerName:'Email',flex:1},
    {field:'address',headerName:'Address',flex:1},
    {field:'city',headerName:'City',flex:1},
    {field:'zipCode',headerName:'ZipCode',flex:1},
    {field:'access',headerName:'Access level',flex:1,
    renderCell:({row:{access}})=>{
    return(
    <Box className='bg-pink-300' width='60%' m='0 auto' p='5px' display='flex' justifyContent='center' backgroundColor=
        {access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]} borderRadius = '4px'>
        {access === 'admin' && <AdminPanelSettingsOutlinedIcon/>}
        {access === 'manager' && <SecurityOutlinedIcon/>}
        {access === 'user' && <LockOpenOutlinedIcon/>}
        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            {access}
        </Typography>
    </Box>
)}},
]
  return (
    <AdminDashLayout >
        <Box m='20px' width='1630px' sx={{
            "& .MuiDataGrid-root":{
                border:"none"
            },
            "& .MuiDataGrid-cell":{
                borderBottom:"none"
            },
            "& .name-column--cell":{
                color:colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders":{
                backgroundColor:colors.blueAccent[700],
                borderBottom:"none"
            },
            "& .MuiDataGrid-virtualScroller":{
                backgroundColor:colors.primary[400]
            },
            "& .MuiDataGrid-footerContainer":{
                borderTop:"none",
                backgroundColor:colors.blueAccent[700]
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
              },
        }}>
            <Header title='CONTACTS' subtitle='List of Contacts for Future Reference'></Header>
            <Box m='40px 0 0 0' height='75vh' >
                <DataGrid 
                rows={mockDataContacts}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    </AdminDashLayout>
  )
}

export default Contacts
