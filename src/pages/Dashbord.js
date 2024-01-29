import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";



export default function Dashbord() {
  return (
    <>
    <div style={{marginTop:"2%"}}>
      <Typography level="h1" color="neutral" >Dashboard</Typography>
    </div>
    <div style={{ display: "flex", gap: "6%", marginTop: "3%" }}>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
          width:"25%",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PiStudent style={{fontSize:"30px"}}/>
        <CardContent>
          <Typography level="body-sm" id="card-description">
            total Student
          </Typography>
          <Typography
            level="title-lg"  
            aria-describedby="card-description"
            mb={1}
          >
            256
          </Typography>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width:"25%",

        }}
      >
        <GiTeacher style={{fontSize:"30px"}}/>
        <CardContent>
          <Typography level="body-sm"id="card-description">
            total Teacher
          </Typography>
          <Typography
            level="title-lg"            
            aria-describedby="card-description"
            mb={1}
          >
            20
          </Typography>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width:"25%",

        }}
      >
        <FaPeopleGroup style={{fontSize:"30px"}}/>
        <CardContent>
          <Typography level="body-sm" id="card-description">
            total Employees
          </Typography>
          <Typography
            level="title-lg" 
            aria-describedby="card-description"
            mb={1}
          >
            56
          </Typography>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
