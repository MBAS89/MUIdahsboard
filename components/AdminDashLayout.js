import {Box,IconButton,useTheme} from '@mui/material';
import {useContext} from 'react';
import { ColorModeContext , tokens } from './theme';
import InputBase from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import dynamic from 'next/dynamic'
import SearchIcon from '@mui/icons-material/Search';
import Navbar from './Navbar';

const DashSidebar = dynamic(() => import('./DashSidebar'))

const AdminDashLayout = ({ children }) => {

  return (
    <div className="">
    
    <div className='flex'>
     
        <div><DashSidebar/></div>
        <div>
        <Navbar/>
        {children}
        </div>
    </div>
    
    </div>
  )
}

export default AdminDashLayout