import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';

import Header from './Header';
import Sidebar from './Sidebar';
// import { useAuth } from "../utils/AuthContext";

export default function Layout({ children }) {
  const [error, setError] = useState("");

//   const { user, logout } = useAuth();

//   async function handleLogout() {
//     try {
//       await logout();
//     } catch {
//       setError("Failed to log out");
//     }
//   }


  return (
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header/>
        <Sidebar/>
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
            overflow:"scroll",
            // backgroundColor:"#a9a9a969"
          }}
        >
          {children}
        </Box>
      </Box>
  );
}
