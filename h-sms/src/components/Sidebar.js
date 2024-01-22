import * as React from "react";
import { useState } from "react";

import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import BrightnessAutoRoundedIcon from "@mui/icons-material/BrightnessAutoRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BusinessIcon from "@mui/icons-material/Business";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HttpsIcon from '@mui/icons-material/Https';

// import ColorSchemeToggle from './ColorSchemeToggle';
import { closeSidebar } from "../utils/utl";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

function Toggler({ defaultExpanded = false, renderToggle, children }) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "0.2s ease",
          "& > *": {
            overflow: "hidden",
          },
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handelLogout = () => {
    try {
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  const NavigateAndToggleSidebar = (path) => {
    navigate(path);
  };

  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
        background: "rgb(12, 53, 106)",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
            "--ListItem-selected-background": theme.palette.primary.main, // New property for selected item background color
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box
        sx={{
          display: "flex",
          height: "9%",
          gap: 1,
          alignItems: "center",
          background: "rgb(255, 196, 54)",
        }}
      >
        <IconButton variant="soft" color="primary" size="sm">
          <BrightnessAutoRoundedIcon />
        </IconButton>
        <Typography level="title-lg">School</Typography>
        {/* <ColorSchemeToggle sx={{ ml: 'auto' }} /> */}
      </Box>
      <Input
        sx={{ margin: "2px" }}
        size="sm"
        startDecorator={<SearchRoundedIcon />}
        placeholder="Search"
      />
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          {/* <ListItem>
            <ListItemButton>
              <HomeRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Home</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem> */}

          <ListItem>
            <ListItemButton sx={{ color: "white" }}>
              <DashboardRoundedIcon sx={{ color: "#FFC436" }} />
              dashbord
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              onClick={() => NavigateAndToggleSidebar("/hotel")}
              sx={{ color: "white" }}
            >
              <BusinessIcon sx={{ color: "#FFC436" }} />
              Account
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={() => NavigateAndToggleSidebar("/booking")}
              sx={{ color: "white" }}
            >
              <MenuBookIcon sx={{ color: "#FFC436" }} />
              Entry
            </ListItemButton>
          </ListItem>
          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton
                  onClick={() => setOpen(!open)}
                  sx={{ color: "white" }}
                >
                  <AssignmentRoundedIcon sx={{ color: "#FFC436" }} />
                  Hostel
                  <KeyboardArrowDownIcon
                    sx={{ transform: open ? "rotate(180deg)" : "none" }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5, background: "#0056d212" }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("")}
                    sx={{ color: "white" }}
                  >
                    <SchoolIcon sx={{ color: "#FFC436" }} />
                    Master
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton sx={{ color: "white" }}>
                    <SchoolIcon sx={{ color: "#FFC436" }} />
                    Master
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ color: "white" }}
                    onClick={() => NavigateAndToggleSidebar("")}
                  >
                    <SchoolIcon sx={{ color: "#FFC436" }} />
                    Master
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton sx={{ color: "white" }}>
                    <SchoolIcon sx={{ color: "#FFC436" }} />
                    Master
                  </ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>
          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton
                  onClick={() => setOpen(!open)}
                  sx={{ color: "white" }}
                >
                  <GroupRoundedIcon sx={{ color: "#FFC436" }} />
                  Users
                  <KeyboardArrowDownIcon
                    sx={{ transform: open ? "rotate(180deg)" : "none" }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5, background: "#0056d212" }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    role="menuitem"
                    component="a"
                    href="/joy-ui/getting-started/templates/profile-dashboard/"
                    sx={{ color: "white" }}
                  >
                    <PersonIcon sx={{ color: "#FFC436" }} />
                    My profile
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton sx={{ color: "white" }}>
                    <PersonAddIcon sx={{ color: "#FFC436" }} />
                    Create a new user
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton sx={{ color: "white" }}>
                    <HttpsIcon sx={{ color: "#FFC436" }} />
                    Roles & permission
                  </ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>
        </List>

        <List
          size="sm"
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            "--List-gap": "8px",
            mb: 2,
          }}
        >
          <ListItem>
            <ListItemButton sx={{ color: "white" }}>
              <SupportRoundedIcon />
              Support
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ color: "white" }}>
              <SettingsRoundedIcon />
              Settings
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            {/* <Typography level="title-sm"></Typography> */}
            <Typography level="title-sm" sx={{ color: "white" }}>
              {user ? user.email : "Guest"}
            </Typography>
            <Typography level="body-xs"></Typography>
          </Box>
          <IconButton
            onClick={handelLogout}
            size="sm"
            variant="plain"
            color="neutral"
          >
            <LogoutRoundedIcon sx={{ color: "#FFC436" }} />
          </IconButton>
        </Box>
      </Box>
    </Sheet>
  );
}