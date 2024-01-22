import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { toggleSidebar } from '../utils/utl';
import { Avatar, Button } from '@mui/joy';

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
        background:"#0174BE"
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
      <Button onClick={()=>{console.log('avatar')}} sx={{ padding: 0 }}>
        <Avatar alt="User Avatar" />
      </Button>
    </Sheet>
  );
}
