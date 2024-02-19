import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import PieActiveArc from "../components/PieActiveArc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FormLabel, Stack } from "@mui/joy";
import BasicTable from "../components/BasicTable";
import { FaGooglePlus } from "react-icons/fa";


export default function Dashbord() {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"5%"}}>
      <div style={{ marginTop: "2%" }}>
        <Typography level="h1" color="neutral">
          Dashboard
        </Typography>
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
            width: "25%",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PiStudent style={{ fontSize: "30px" }} />
          <CardContent>
            <Typography level="body-sm" id="card-description">
              Total Enrollment
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
            width: "25%",
          }}
        >
          <FaHandHoldingUsd style={{ fontSize: "30px" }} />
          <CardContent>
            <Typography level="body-sm" id="card-description">
              Fee Collection
            </Typography>
            <Typography
              level="title-lg"
              aria-describedby="card-description"
              mb={1}
            >
              20000
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
            width: "25%",
          }}
        >
          <FaPeopleGroup style={{ fontSize: "30px" }} />
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
      <Stack sx={{ display: { xs: "none", md: "flex" } }}>
        <div style={{ display: "flex", gap: "3%" }}>
          <div style={{ width: "50%" }}>
            <Card>
              <PieActiveArc />
            </Card>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
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
                width: "50%",
                height: "12vh",
                color: "white",
                background:
                  "linear-gradient(223deg, #fb0505 49%, rgba(232,232,236,1) 110%)",
              }}
            >
              <FaGooglePlus style={{ fontSize: "30px" }} />
              <CardContent>
                <Typography
                  sx={{ color: "white" }}
                  level="body-sm"
                  id="card-description"
                >
                  Follow us on Google Plus
                </Typography>
                <Typography
                  level="title-lg"
                  aria-describedby="card-description"
                  mb={1}
                  sx={{ color: "white" }}
                >
                  20000
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
                width: "50%",
                height: "20vh",
                background:
                  "linear-gradient(223deg, #316FF6 49%, rgba(232,232,236,1) 110%)",
                color: "white",
              }}
            >
              <FaFacebook style={{ fontSize: "30px" }} />
              <CardContent>
                <Typography
                  sx={{ color: "white" }}
                  level="body-sm"
                  id="card-description"
                >
                  Like us on Facebook
                </Typography>
                <Typography
                  level="title-lg"
                  aria-describedby="card-description"
                  mb={1}
                  sx={{ color: "white" }}
                >
                  20000
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
                width: "50%",
                color: "white",
                background:
                  "linear-gradient(223deg, #1DA1F2 49%, rgba(232,232,236,1) 110%)",
              }}
            >
              <FaTwitter style={{ fontSize: "30px" }} />
              <CardContent>
                <Typography
                  sx={{ color: "white" }}
                  level="body-sm"
                  id="card-description"
                >
                  Follow us on Twitter
                </Typography>
                <Typography
                  level="title-lg"
                  aria-describedby="card-description"
                  mb={1}
                  sx={{ color: "white" }}
                >
                  75800
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </Stack>
      <Stack sx={{ display: { xs: "flex", md: "none" } }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "3%" }}>
          <div style={{ width: "100%" }}>
            <Card>
              <PieActiveArc />
            </Card>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
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
                width: "50%",
                height: "20vh",
                color: "white",
                background:
                  "linear-gradient(223deg, #fb0505 49%, rgba(232,232,236,1) 110%)",
              }}
            >
              <FaGooglePlus style={{ fontSize: "30px" }} />
              <CardContent>
                <Typography
                  sx={{ color: "white" }}
                  level="body-sm"
                  id="card-description"
                >
                  Follow us on Google Plus
                </Typography>
                <Typography
                  level="title-lg"
                  aria-describedby="card-description"
                  mb={1}
                  sx={{ color: "white" }}
                >
                  20000
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
                width: "50%",
                height: "20vh",
                background:
                  "linear-gradient(223deg, #316FF6 49%, rgba(232,232,236,1) 110%)",
                color: "white",
              }}
            >
              <FaFacebook style={{ fontSize: "30px" }} />
              <CardContent>
                <Typography
                  sx={{ color: "white" }}
                  level="body-sm"
                  id="card-description"
                >
                  Like us on Facebook
                </Typography>
                <Typography
                  level="title-lg"
                  aria-describedby="card-description"
                  mb={1}
                  sx={{ color: "white" }}
                >
                  20000
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
                width: "50%",
                color: "white",
                background:
                  "linear-gradient(223deg, #1DA1F2 49%, rgba(232,232,236,1) 110%)",
              }}
            >
              <FaTwitter style={{ fontSize: "30px" }} />
              <CardContent>
                <Typography
                  sx={{ color: "white" }}
                  level="body-sm"
                  id="card-description"
                >
                  Follow us on Twitter
                </Typography>
                <Typography
                  level="title-lg"
                  aria-describedby="card-description"
                  mb={1}
                  sx={{ color: "white" }}
                >
                  75800
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </Stack>
      <Stack sx={{ display: { xs: "none", md: "flex" } }}>
        <Card style={{width:"50%"}}>
          <FormLabel>Exam Schedule</FormLabel>
          <BasicTable/>
        </Card>
      </Stack>
      <Stack sx={{ display: { xs: "flex", md: "none" } }}>
        <Card style={{width:"90%"}}>
        <FormLabel>Exam Schedule</FormLabel>
          <BasicTable/>
        </Card>
      </Stack>

     
    </div>
  );
}
