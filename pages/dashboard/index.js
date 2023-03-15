import AdminDashLayout from "../../components/AdminDashLayout";
import React from 'react'
import {Box} from '@mui/material';
import Header from "@/components/Header";
const Dashboard = () => {
  return (
    <AdminDashLayout className="relative">
       <Box m='20px'>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Header title='DASHBOARD' subtitle='welcome to your dashboard'></Header>
        </Box>
       </Box>
    </AdminDashLayout>
    
  )
}

export default Dashboard