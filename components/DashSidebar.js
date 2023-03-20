import { React,useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Box} from '@mui/material';
import {IconButton} from '@mui/material';
import {useTheme} from '@mui/material';
import {Typography} from '@mui/material';
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

import { useRouter } from 'next/router';

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
    <Sidebar collapsed={isCollapsed}>
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
                WEBSITE 
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>
        <Box paddingLeft={isCollapsed ? "" : "10%"}>
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
            title="Users"
            to="/dashboard/users"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Orders"
            to="/dashboard/orders"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Products"
            to="/dashboard/products"
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
            to="/dashboard/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Calendar"
            to="/dashboard/calendar"
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


{/*  color: colors.grey[100],
<Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
              
               <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
             </Box>
            ml="15px"
          
          
           {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt="profile-user"
                  className='w-[100px] h-[100px]'
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
                  Jhon Watson
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}*/}













