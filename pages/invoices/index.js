import {Box} from '@mui/material';
import {useTheme} from '@mui/material';
import {Typography} from '@mui/material';

import {tokens} from '../../components/theme';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from '../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "@/components/Header";
import React from 'react'
import AdminDashLayout from "../../components/AdminDashLayout";

const Invoices= () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {field:'id',headerName:'ID'},
    {field:'name',headerName:'Name',flex:1,cellClassName:'name-column--cell'},
    {field:'phone',headerName:'Phone Number',flex:1},
    {field:'email',headerName:'Email',flex:1},
    {field:'cost',headerName:'Cost',flex:1,
    renderCell:(params)=>(
    <Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>
    )},
    {field:'date',headerName:'Date',flex:1}
   ]

  
  return (
    <AdminDashLayout>
        <Box m='20px' width='1630px'> 
            <Header title='INVOICES' subtitle='List of Invoice Balances'></Header>
            <Box 
                m="40px 0 0 0"
                height="75vh"
                sx={{
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
                "& .MuiCheckbox-root" :{
                    color:`${colors.greenAccent[200]} !important`
                }
            }}>
            <DataGrid 
                checkboxSelection
                rows={mockDataInvoices}
                columns={columns}
            />
            </Box>
        </Box>
    </AdminDashLayout>
  )
}

export default Invoices

{/*
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
*/}