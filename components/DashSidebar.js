import { React,useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Box} from '@mui/material';
import {IconButton} from '@mui/material';
import {useTheme} from '@mui/material';
import {Typography} from '@mui/material';
//import NextLink from 'next/link';
import {tokens} from './theme';
import Link from 'next/link';
//icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

import Image from "next/image";
import userImage from '../public/assets/user.jpg'
import { useRouter } from 'next/router';
//import "react-pro-sidebar/dist/css/styles.css";

export const Item = ({  title,icon, to,  selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <Link href={to}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        
      </MenuItem>
    </Link>
  )
}

const DashSidebar = () => {
    const router = useRouter()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed,setIsCollapsed]= useState(false)
    const [selected,setSelected]= useState('Dashboard')

  return ( 
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed} >
            <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
                }}
            >
                {!isCollapsed && (
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                >
                    <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                    </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                    </IconButton>
                </Box>
                )}
            </MenuItem>

            {!isCollapsed && (
                <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Image 
                    className='w-[100px] h-[100px]'
                    alt="profile-user"
                    src={ userImage }
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                </Box>
                <Box textAlign="center">
                    <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                    >
                    Ed Roh
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                    VP Fancy Admin
                    </Typography>
                </Box>
                </Box>
            )}


            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              
              <Item
              title="Dashboard"
              to='/dashboard'
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
                <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                >
                Data
                </Typography>
                <Item
                title="Manage Team"
                to='/team'
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="Invoices Balances"
                to="/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                >
                Pages
                </Typography>
                <Item
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                >
                Charts
                </Typography>
              
                <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
            </Box>
            </Menu>
      </Sidebar>
    </Box>
  )
}

export default DashSidebar
{/*  <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>*/}

        {/*
          <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
           LOGO AND MENU ICON*/}



        {/*
        <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
           <MenuItem
           onClick={() => setIsCollapsed(!isCollapsed)}
           icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
           className='mt-[10px] mb-[20px]'
           style={{
             color: colors.grey[100],
           }}
         >
           {!isCollapsed && (
             <Box className='flex justify-between items-center ml-[15px]'>
               <Typography variant="h3" color={colors.grey[100]}>
                 ADMINIS
               </Typography>
               <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                 <MenuOutlinedIcon />
               </IconButton>
             </Box>
           )}
           </MenuItem>*/}









           /***latest update */
{/*
           <Box className='bg-pink-300' sx={{
            "& .pro-sidebar-inner" : {
            background:`${colors.primary[400]} !important`
        },
            "& .pro-icon-wrapper" : {
            backgroundColor:"transparent !important"
        },
            "& .pro-inner-item" : {
            padding:"5px 35px 5px 20px !important"
        },
            "& .pro-inner-item:hover" : {
            color:"#868dfb !important"
        },
        "& .pro-menu-item.active" : {
            color:"#6870fa !important"
        },
        }}>
    
    
    <Menu iconShape="square">
    
              {!isCollapsed && (
                <Box className='mb-[25px]'>
                  <Box className='flex justify-center items-center'>
                    <Image
                      alt="profile-user"
                      className='w-[100px] h-[100px] rounded-[50%] cursor-pointer'
                      src={userImage}
                      width={100}
                      height={100}
                    />
                  </Box>
                  <Box className='text-center'>
                    <Typography
                      variant="h2"
                      color={colors.grey[100]}
                      className='font-bold mt-[10px]'
                    >
                      Jhon Watson
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                      Admin
                    </Typography>
                  </Box>
                </Box>
              )}
    
                <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                <Item
                  title="Dashboard"
                  to="/"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Data
                </Typography>
                <Item
                  title="Manage Team"
                  to="/team"
                  icon={<PeopleOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Contacts Information"
                  to="/contacts"
                  icon={<ContactsOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Invoices Balances"
                  to="/invoices"
                  icon={<ReceiptOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
    
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Pages
                </Typography>
                <Item
                  title="Profile Form"
                  to="/form"
                  icon={<PersonOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Calendar"
                  to="/calendar"
                  icon={<CalendarTodayOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
    
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Charts
                </Typography>
                <Item
                  title="Bar Chart"
                  to="/bar"
                  icon={<BarChartOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Pie Chart"
                  to="/pie"
                  icon={<PieChartOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Line Chart"
                  to="/line"
                  icon={<TimelineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Geography Chart"
                  to="/geography"
                  icon={<MapOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                </Box>
              </Menu>
        </Box>
        */}