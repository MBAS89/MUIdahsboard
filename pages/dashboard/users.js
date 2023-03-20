import {Box} from '@mui/material';
import {useTheme} from '@mui/material';
import {Typography} from '@mui/material';
import {tokens} from '../../components/theme';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

import GoogleIcon from '@mui/icons-material/Google';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Header from "@/components/Header";
import React from 'react'
import AdminDashLayout from "../../components/AdminDashLayout";

const DashUsers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {field:'id',headerName:'ID'},
    {field:'name',headerName:'User Name',flex:1,cellClassName:'name-column--cell'},
    {field:'email',headerName:'Email',flex:1},
    {field:'status',headerName:'Status',flex:1},
    {field:'enterDate',headerName:'Enter Date',flex:1},
    {field:'provider',headerName:'Provider',flex:1,
    renderCell:({row:{provider}})=>{
        return(
        <Box width='60%' display='flex' justifyContent='left' >
            {provider === 'google' && <GoogleIcon/>}
            {provider === 'credentials' && <MailOutlineIcon/>}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {provider}
            </Typography>
        </Box>
        )}},
    {field:'access',headerName:'Access level',flex:1,

    renderCell:({row:{access}})=>{
    return(
    <Box className='bg-pink-300' width='60%' p='5px' display='flex' justifyContent='center' backgroundColor=
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
            }
        }}>
            <Header title='USERS' subtitle='Managing Users'></Header>
            <Box m='40px 0 0 0' height='75vh' >
                <DataGrid 
                rows={mockDataTeam}
                columns={columns}
                />
            </Box>
        </Box>
    </AdminDashLayout>
  )
}

export default DashUsers