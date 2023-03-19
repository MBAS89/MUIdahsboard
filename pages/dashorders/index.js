import {Box} from '@mui/material';
import {tokens} from '../../components/theme';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { mockDataOrders } from '../data/mockData';
import {useTheme} from '@mui/material';
import Header from "@/components/Header";
import AdminDashLayout from "../../components/AdminDashLayout";
import {Typography} from '@mui/material';

const DashOrders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {field:'id',headerName:'ID',flex:0.5},
    {field:'userName',headerName:'User Name',flex:1,cellClassName:'name-column--cell'},
    {field:'items',headerName:'Items',flex:1},
    {field:'userEmail',headerName:'User Email',flex:1},
    {field:'totalPrice',headerName:'Total Price',flex:1},
    {field:'status',headerName:'Status',flex:1,
    renderCell:({row:{status}})=>{
    return(
    <Box width='60%' p='1px' display='flex' justifyContent='center' borderRadius = '10px' backgroundColor=
        {status === 'Delivered' ? colors.greenAccent[600]  : colors.greenAccent[700]} >
        {status === 'Pending' && "style={{ backgroundColor: '#4caf50' }}"}
        {status === 'Failed' && <SecurityOutlinedIcon/>}
        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            {status}
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
            <Header title='ORDERS' subtitle='List of Orders'></Header>
            <Box m='40px 0 0 0' height='75vh' >
                <DataGrid 
                rows={mockDataOrders}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    </AdminDashLayout>
  )
}

export default DashOrders
{/*{status === 'Delivered' ? colors.greenAccent[600]  : colors.greenAccent[700]} */}