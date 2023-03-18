import {Box} from '@mui/material';
import {useTheme} from '@mui/material';
import {Typography} from '@mui/material';
import {tokens} from '../../components/theme';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataProducts } from '../data/mockData';
import Header from "@/components/Header";
import React from 'react'
import AdminDashLayout from "../../components/AdminDashLayout";

const Product= () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {field:'id',headerName:'ID'},
    {field:'name',headerName:'Name',flex:1,cellClassName:'name-column--cell'},
    {field:'category',headerName:'Category',flex:1},
    {field:'variant',headerName:'Variant',flex:1},
    {field:'quantity',headerName:'Quantity',flex:1},
    {field:'price',headerName:'Price',flex:1,
    renderCell:(params)=>(
    <Typography color={colors.greenAccent[500]}>${params.row.price}</Typography>
    )},
    {field:'deliveryDate',headerName:'Delivery Date',flex:1}
   ]

  
  return (
    <AdminDashLayout>
        <Box m='20px' width='1630px'> 
            <Header title='Product' subtitle='List of Products'></Header>
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
                rows={mockDataProducts}
                columns={columns}
            />
            </Box>
        </Box>
    </AdminDashLayout>
  )
}

export default Product

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