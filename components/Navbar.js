import React from 'react'

import {Box} from '@mui/material';
import {IconButton} from '@mui/material';
import {useTheme} from '@mui/material';

import { ColorModeContext , tokens } from './theme';
import {useContext} from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box className='flex justify-between p-2 '>
        {/*SEARCH BAR*/}
        <Box className='flex rounded-[3px]' backgroundColor={colors.primary[400]}>
            <InputBase className='ml-2 flex-1' placeholder='Search'/>
            <IconButton type='button' className='p-1'>
            <SearchIcon/>
            </IconButton>
        </Box>
        <Box className='flex'>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode ==='dark' ?(
                <DarkModeOutlinedIcon/>
                ):(
                <LightModeOutlinedIcon/>
                )}
                </IconButton>
            <IconButton><NotificationsOutlinedIcon/></IconButton>
            <IconButton><SettingsOutlinedIcon/></IconButton>
            <IconButton><PersonOutlinedIcon/></IconButton>
        </Box>
    </Box>
  )
}

export default Navbar