import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";


import { toggleSidebar } from '../utils/utl';
import { Avatar, Box, Button, Input, Typography } from '@mui/joy';

export default function Header() {
  return (
    <Sheet
      sx={{
        display: { xs: 'flex', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '5%',
        zIndex: 9995,
        p: 2,
        gap: 1,
        borderBottom: '1px solid',
        borderColor: 'background.level1',
        boxShadow: 'sm',
        background:"#0174BE",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Header-height': '52px',
            [theme.breakpoints.up('md')]: {
              '--Header-height': '0px',
            },
          },
        })}
      />
      <IconButton
        onClick={() => toggleSidebar()}
        variant="outlined"
        color="neutral"
        size="sm"
      >
        <MenuIcon />
      </IconButton>
     
      <div style={{display:"flex", alignItems:"center", gap :"3%", padding:"3%"}}>
      <Input
        sx={{ margin: "2px" , display:{xs:"none", md:"flex"}}}
        size="sm"
        startDecorator={<SearchRoundedIcon />}
        placeholder="Search"
      />
      <div  style={{display:"flex" , gap:"33%"}} >
        <MailOutlineIcon sx={{color:"white"}}/>
        <NotificationsIcon sx={{color:"white"}}/>
      </div>  
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', margin:"23px" }}>
        <Avatar
          size="sm"
          // src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
        />
        <Box sx={{ minWidth: 0, flex: 1, display:{xs:"none", md:"block"} }} >
          <Typography level="title-sm" sx={{color:"white"}}>Snehangshu</Typography>
          <Typography level="body-xs" sx={{color:"white"}}>Snehangshu@gmail.com</Typography>
        </Box>
      </Box>
      </div>
    </Sheet>
  );
}
