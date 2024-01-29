import * as React from "react";
import { useState } from "react";

import GlobalStyles from "@mui/joy/GlobalStyles";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import BrightnessAutoRoundedIcon from "@mui/icons-material/BrightnessAutoRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BusinessIcon from "@mui/icons-material/Business";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HttpsIcon from "@mui/icons-material/Https";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ArticleIcon from "@mui/icons-material/Article";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import EditNoteIcon from "@mui/icons-material/EditNote";
import GroupsIcon from "@mui/icons-material/Groups";
import CreateIcon from "@mui/icons-material/Create";
import MoneyIcon from "@mui/icons-material/Money";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import SportsIcon from "@mui/icons-material/Sports";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import TransformIcon from "@mui/icons-material/Transform";
import ReportIcon from "@mui/icons-material/Report";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import BackupIcon from "@mui/icons-material/Backup";
import { FaSchoolFlag } from "react-icons/fa6";


// import ColorSchemeToggle from './ColorSchemeToggle';
import { closeSidebar } from "../utils/utl";
import { useNavigate } from "react-router";
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
        <IconButton
          variant="soft"
          color="primary"
          size="sm"
          sx={{ marginLeft: "10px", cursor:"pointer" }}
          onClick={()=>navigate('/')}
        >
          {/* <BrightnessAutoRoundedIcon /> */}
          <FaSchoolFlag/>
        </IconButton>
        <Typography level="title-lg">School</Typography>
        {/* <ColorSchemeToggle sx={{ ml: 'auto' }} /> */}
      </Box>
      {/* <Input
        sx={{ margin: "2px" , marginX:"10px" }}
        size="sm"
        startDecorator={<SearchRoundedIcon />}
        placeholder="Search"
      /> */}
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
          <ListItem>
            <ListItemButton
              sx={{ color: "white" }}
              onClick={() => NavigateAndToggleSidebar("/")}
            >
              <DashboardRoundedIcon sx={{ color: "#FFC436" }} />
              Dashbord
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              onClick={() => NavigateAndToggleSidebar("")}
              sx={{ color: "white" }}
            >
              <BusinessIcon sx={{ color: "#FFC436" }} />
              Account
            </ListItemButton>
          </ListItem>
          {/* <ListItem>
            <ListItemButton
              onClick={() => NavigateAndToggleSidebar("/booking")}
              sx={{ color: "white" }}
            >
              <MenuBookIcon sx={{ color: "#FFC436" }} />
              Entry
            </ListItemButton>
          </ListItem> */}
          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton
                  onClick={() => setOpen(!open)}
                  sx={{ color: "white" }}
                >
                  <AssignmentRoundedIcon sx={{ color: "#FFC436" }} />
                  Master
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: open ? "rotate(180deg)" : "none",
                      marginX: "43%",
                    }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5, background: "#0056d212" }}>
                <ListItem>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/generalledger")}
                    sx={{ color: "white" }}
                  >
                    <ImportContactsIcon sx={{ color: "#FFC436" }} />
                    General Ledger
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/classmaster")}
                    sx={{ color: "white" }}
                  >
                    <ArticleIcon sx={{ color: "#FFC436" }} />
                    Class Master
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ color: "white" }}
                    onClick={() => NavigateAndToggleSidebar("/sectionmaster")}
                  >
                    <AutoStoriesIcon sx={{ color: "#FFC436" }} />
                    Section Master
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ color: "white" }}
                    onClick={() => NavigateAndToggleSidebar("/subjectmaster")}
                  >
                    <LibraryBooksIcon sx={{ color: "#FFC436" }} />
                    Subject Master
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ color: "white" }}
                    onClick={() => NavigateAndToggleSidebar("/feemaster")}
                  >
                    <CurrencyRupeeIcon sx={{ color: "#FFC436" }} />
                    Fee Master
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ color: "white" }}
                    onClick={() => NavigateAndToggleSidebar("/studentmaster")}
                  >
                    <PersonIcon sx={{ color: "#FFC436" }} />
                    Student Master
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ color: "white" }}
                    onClick={() =>
                      NavigateAndToggleSidebar("/examinationmaster")
                    }
                  >
                    <EditNoteIcon sx={{ color: "#FFC436" }} />
                    Examination
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ color: "white" }}
                    onClick={() => NavigateAndToggleSidebar("/staffmaster")}
                  >
                    <GroupsIcon sx={{ color: "#FFC436" }} />
                    Staff Master
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
                  <CreateIcon sx={{ color: "#FFC436" }} />
                  Entry
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: open ? "rotate(180deg)" : "none",
                      marginX: "48%",
                    }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5, background: "#0056d212" }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    role="menuitem"
                    component="a"
                    onClick={() => NavigateAndToggleSidebar("/feereceive")}
                    sx={{ color: "white" }}
                  >
                    <MoneyIcon sx={{ color: "#FFC436" }} />
                    Fee Receive
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/singlevoucher")}
                    sx={{ color: "white" }}
                  >
                    <PersonIcon sx={{ color: "#FFC436" }} />
                    Single Voucher
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/marksheet")}
                    sx={{ color: "white" }}
                  >
                    <ReceiptLongIcon sx={{ color: "#FFC436" }} />
                    Mark Sheet
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() =>
                      NavigateAndToggleSidebar("/attendanceremark")
                    }
                    sx={{ color: "white" }}
                  >
                    <ReceiptLongIcon sx={{ color: "#FFC436" }} />
                    Attendance Remarks
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/transfernextyer")}
                    sx={{ color: "white" }}
                  >
                    <MultipleStopIcon sx={{ color: "#FFC436" }} />
                    Transfer To Next Year
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/paymentvoucher")}
                    sx={{ color: "white" }}
                  >
                    <ReceiptIcon sx={{ color: "#FFC436" }} />
                    Payment Voucher
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/sportfeereceive")}
                    sx={{ color: "white" }}
                  >
                    <SportsIcon sx={{ color: "#FFC436" }} />
                    Sport Fee Receive
                  </ListItemButton>
                </ListItem>
                {/* <ListItem>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/")}
                    sx={{ color: "white" }}
                  >
                    <SchoolIcon sx={{ color: "#FFC436" }} />
                    Mark Sheet - Student Wise
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/")}
                    sx={{ color: "white" }}
                  >
                    <ContactMailIcon sx={{ color: "#FFC436" }} />
                    SMS
                  </ListItemButton>
                </ListItem> */}
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
                  <LocalLibraryIcon sx={{ color: "#FFC436" }} />
                  Library
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: open ? "rotate(180deg)" : "none",
                      marginX: "42%",
                    }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5, background: "#0056d212" }}>
                <ListItem>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/bookmaster")}
                    sx={{ color: "white" }}
                  >
                    <ImportContactsIcon sx={{ color: "#FFC436" }} />
                    Book Master
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() =>
                      NavigateAndToggleSidebar("/bookreceiveissue")
                    }
                    sx={{ color: "white" }}
                  >
                    <ArticleIcon sx={{ color: "#FFC436" }} />
                    Book Issue / Receive
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
                  <ApartmentIcon sx={{ color: "#FFC436" }} />
                  Hostel
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: open ? "rotate(180deg)" : "none",
                      marginX: "45%",
                    }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5, background: "#0056d212" }}>
                <ListItem>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/hostel")}
                    sx={{ color: "white" }}
                  >
                    <AddHomeWorkIcon sx={{ color: "#FFC436" }} />
                    Student Hostel
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/hostelfeeMaster")}
                    sx={{ color: "white" }}
                  >
                    <CurrencyRupeeIcon sx={{ color: "#FFC436" }} />
                    Hostel Fee Master
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() =>
                      NavigateAndToggleSidebar("/hostelfeereceive")
                    }
                    sx={{ color: "white" }}
                  >
                    <DownloadDoneIcon sx={{ color: "#FFC436" }} />
                    Hostel Fee Receive
                  </ListItemButton>
                </ListItem>
                {/* <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("")}
                    sx={{ color: "white" }}
                  >
                    <TransformIcon sx={{ color: "#FFC436" }} />
                    Hostel Student Transfer
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("")}
                    sx={{ color: "white" }}
                  >
                    <TransformIcon sx={{ color: "#FFC436" }} />
                    Hostel FeeMaster Transfer
                  </ListItemButton>
                </ListItem> */}
              </List>
            </Toggler>
          </ListItem>
          {/* <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton
                  onClick={() => setOpen(!open)}
                  sx={{ color: "white" }}
                >
                  <ReportIcon sx={{ color: "#FFC436" }} />
                  Report
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: open ? "rotate(180deg)" : "none",
                      marginX: "44%",
                    }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5, background: "#0056d212" }}>
                <ListItem>
                  <ListItemButton sx={{ color: "white" }}>
                    <AssignmentRoundedIcon sx={{ color: "#FFC436" }} />
                    Master
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("")}
                    sx={{ color: "white" }}
                  >
                    <CurrencyRupeeIcon sx={{ color: "#FFC436" }} />
                    Fee
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("")}
                    sx={{ color: "white" }}
                  >
                    <LibraryBooksIcon sx={{ color: "#FFC436" }} />
                    Library
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("")}
                    sx={{ color: "white" }}
                  >
                    <ApartmentIcon sx={{ color: "#FFC436" }} />
                    Hostel
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("")}
                    sx={{ color: "white" }}
                  >
                    <ReceiptLongIcon sx={{ color: "#FFC436" }} />
                    Mark Sheet
                  </ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem> */}
          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton
                  onClick={() => setOpen(!open)}
                  sx={{ color: "white" }}
                >
                  <SettingsSuggestIcon sx={{ color: "#FFC436" }} />
                  Payroll Sytem
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: open ? "rotate(180deg)" : "none",
                      marginX: "44%",
                    }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5, background: "#0056d212" }}>
                <ListItem>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/staffpayroll")}
                    sx={{ color: "white" }}
                  >
                    <GroupsIcon sx={{ color: "#FFC436" }} />
                    Staff Master
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/salaryentry")}
                    sx={{ color: "white" }}
                  >
                    <AccountBalanceWalletIcon sx={{ color: "#FFC436" }} />
                    Salary Entry
                  </ListItemButton>
                </ListItem>
                {/* <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/")}
                    sx={{ color: "white" }}
                  >
                    <ReceiptIcon sx={{ color: "#FFC436" }} />
                    pay Slip
                  </ListItemButton>
                </ListItem> */}
                {/* <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => NavigateAndToggleSidebar("/")}
                    sx={{ color: "white" }}
                  >
                    <AppRegistrationIcon sx={{ color: "#FFC436" }} />
                    Pay Register
                  </ListItemButton>
                </ListItem> */}
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
                  <AppSettingsAltIcon sx={{ color: "#FFC436" }} />
                  Maintenance
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: open ? "rotate(180deg)" : "none",
                      marginX: "40%",
                    }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5, background: "#0056d212" }}>
                <ListItem>
                  <ListItemButton sx={{ color: "white" }}>
                    <BackupIcon sx={{ color: "#FFC436" }} />
                    Data Backup
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    sx={{ color: "white" }}
                  >
                    <RestorePageIcon sx={{ color: "#FFC436" }} />
                    Data Restore
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
      <Box
        sx={{ display: "flex", gap: 1, alignItems: "center", marginX: "10px" }}
      >
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
