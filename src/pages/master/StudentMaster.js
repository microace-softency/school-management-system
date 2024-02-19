import * as React from "react";
import Box from "@mui/joy/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AspectRatio,
  Button,
  Card,
  CardActions,
  CardOverflow,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
  Stack,
  Typography,
} from "@mui/joy";

export default function StudentMaster() {
  return (
    <Box sx={{ flex: 1, width: "100%", marginTop: "3vh" }}>
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">Student Profile</Typography>
          <Typography level="body-sm">
            Customize how your Student information.
          </Typography>
        </Box>
        <Divider />
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: "block", md: "flex" }, my: 1 }}
        >
          <Stack direction="column" spacing={1}></Stack>
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <FormControl
              sx={{ display: { sm: "flex-column", md: "flex-row" }, gap: 2 }}
            >
              <FormLabel>Admission No</FormLabel>
              <Input size="sm" placeholder="Subject Code" />
              <FormLabel>Date</FormLabel>
              <Input size="sm" type="date" placeholder="Subject Code" />
              {/* <Button>+</Button> */}
            </FormControl>
            <Stack direction="column" spacing={2}>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                  Category
                </FormLabel>
                <Select placeholder=" Select Category">
                  <Option value="1">BPL</Option>
                  <Option value="2">FREE</Option>
                  <Option value="3">GENERAL</Option>
                  <Option value="4">OBC</Option>
                </Select>
              </FormControl>
              <Input type="file" />
              <FormControl>
                <FormLabel>Class</FormLabel>
                <Input placeholder="class" />
              </FormControl>
              <FormControl>
                <FormLabel>Section</FormLabel>
                <Input size="sm" placeholder="Section" />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Roll No</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<AccountCircleIcon />}
                  placeholder="Ammount"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Student Name</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Ledger"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                  Gender
                </FormLabel>
                <Select placeholder=" Select Category">
                  <Option value="female">Female</Option>
                  <Option value="male">Male</Option>
                  <Option value="transgender">Transgender</Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Date of Birth</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl>
                <FormLabel>Birth Regn. No.</FormLabel>
                <Input placeholder="birth regn no." />
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                  Religion
                </FormLabel>
                <Select placeholder=" Select Religion">
                  <Option value="anyother">ANY OTHER</Option>
                  <Option value="cristianity">CRISTIANITY</Option>
                  <Option value="hinduism">HINDUISM</Option>
                  <Option value="islam">ISLAM</Option>
                  <Option value="jainism">JAINISM</Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Mother Tongue</FormLabel>
                <Input placeholder="mother tongue" />
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                  Social Category
                </FormLabel>
                <Select placeholder=" Select  Social Category">
                  <Option value="anyother">GEN</Option>
                  <Option value="cristianity">OBC</Option>
                  <Option value="hinduism">ST</Option>
                  <Option value="islam">SC</Option>
                  <Option value="jainism">UR/X</Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Blood Group</FormLabel>
                <Input placeholder="Blood Group" />
              </FormControl>
              <FormControl>
                <FormLabel>Aadhar Card</FormLabel>
                <Input placeholder="Aadhar Card" />
              </FormControl>
              <FormControl>
                <FormLabel>Health ID</FormLabel>
                <Input placeholder="Health Id" />
              </FormControl>
              <FormControl>
                <FormLabel>Identi. Mark</FormLabel>
                <Input placeholder="Identi. Mark" />
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input placeholder="Address" />
              </FormControl>
              <FormControl>
                <FormLabel>Locality</FormLabel>
                <Input placeholder="Locality" />
              </FormControl>
              <FormControl>
                <FormLabel>Block / Municipality</FormLabel>
                <Input placeholder=" Block / Municipality" />
              </FormControl>
              <FormControl>
                <FormLabel>Panchayat</FormLabel>
                <Input placeholder="Panchayat" />
              </FormControl>
              <FormControl>
                <FormLabel>District</FormLabel>
                <Input placeholder="District" />
              </FormControl>
              <FormControl>
                <FormLabel>Post Office</FormLabel>
                <Input placeholder="Post Office" />
              </FormControl>
              <FormControl>
                <FormLabel>Pin</FormLabel>
                <Input placeholder="Pin" />
              </FormControl>
              <FormControl>
                <FormLabel>Father's Name</FormLabel>
                <Input placeholder=" Father Name" />
              </FormControl>
              <FormControl>
                <FormLabel>Father's Name</FormLabel>
                <Input placeholder=" Father Name" />
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                  Occupation
                </FormLabel>
                <Select placeholder=" Select  Social Category">
                  <Option value="business">Business</Option>
                  <Option value="none">None</Option>
                  <Option value="privateemployee">Private Employee</Option>
                  <Option value="service">Service</Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Mother's Name</FormLabel>
                <Input placeholder=" Mother Name" />
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                  Occupation
                </FormLabel>
                <Select placeholder=" Select  Social Category">
                  <Option value="business">Business</Option>
                  <Option value="housewife">House Wife</Option>
                  <Option value="none">None</Option>
                  <Option value="privateemployee">Private Employee</Option>
                  <Option value="service">Service</Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Guardian's Name</FormLabel>
                <Input placeholder=" Guardian Name" />
              </FormControl>
              <FormControl>
                <FormLabel>Releation</FormLabel>
                <Input placeholder="Releation" />
              </FormControl>
              <FormControl>
                <FormLabel>Mobile No</FormLabel>
                <Input placeholder="Mobile No" />
              </FormControl>
              <FormControl>
                <FormLabel>Mobile No(w)</FormLabel>
                <Input placeholder="Mobile No(w)" />
              </FormControl>
              <FormControl>
                <FormLabel>Annual Family Income</FormLabel>
                <Input placeholder="Annual Family Income" />
              </FormControl>
              <FormControl>
                <FormLabel>Guardian's Qualification</FormLabel>
                <Input placeholder="Guardian's Qualification" />
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                  Studied Earlier
                </FormLabel>
                <Select placeholder=" ">
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Leaving Date</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl>
                <FormLabel>In Which Class</FormLabel>
                <Input placeholder="Which class" />
              </FormControl>
              <FormControl>
                <FormLabel>School Name</FormLabel>
                <Input placeholder="Enter School Name" />
              </FormControl>
              <FormControl>
                <FormLabel>Admin Form No</FormLabel>
                <Input placeholder='Admin Form No' />
              </FormControl>
              <FormControl>
                <FormLabel>Discount%</FormLabel>
                <Input placeholder='Discount%' />
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                  sx={{color:"red"}}
                >
                  Leave Out
                </FormLabel>
                <Select placeholder=" ">
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
              </FormControl>
              <Divider/>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                  Sports
                </FormLabel>
                <Select placeholder=" ">
                  <Option value="atheletic">ATHELETIC</Option>
                  <Option value="atheletic-new">ATHELETIC-NEW</Option>
                  <Option value="swimming-new">SWIMMING-NEW</Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Culture</FormLabel>
                <Input placeholder='Culture' />
              </FormControl>
              <Divider/>
              <FormLabel sx={{color:"blue"}}>Bank Detail</FormLabel>
              <FormControl>
                <FormLabel>Bank Name</FormLabel>
                <Input placeholder='Bank Name' />
              </FormControl>
              <FormControl>
                <FormLabel>A/c. No.</FormLabel>
                <Input placeholder='A/c no...' />
              </FormControl>
              <FormControl>
                <FormLabel>Branch Name</FormLabel>
                <Input placeholder='Branch Name' />
              </FormControl>
              <FormControl>
                <FormLabel>IFSC</FormLabel>
                <Input placeholder='IFSC Code' />
              </FormControl>
              <Divider/>
              <FormLabel sx={{color:"blue"}}>Transport Details</FormLabel>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                  School Bus
                </FormLabel>
                <Select placeholder=" ">
                  <Option value="yes">Yes</Option>
                  <Option value="no">No</Option>
                </Select>
              </FormControl>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{ display: { xs: "none", md: "none" }, my: 1 }}
        >
          <Stack direction="column" spacing={2}>
            <FormControl>
              <FormLabel
                id="select-field-demo-label"
                htmlFor="select-field-demo-button"
              >
                Class
              </FormLabel>
              <Select
                placeholder="Select Class"
                slotProps={{
                  button: {
                    id: "select-field-demo-button",
                    // TODO: Material UI set aria-labelledby correctly & automatically
                    // but Base UI and Joy UI don't yet.
                    "aria-labelledby":
                      "select-field-demo-label select-field-demo-button",
                  },
                }}
              >
                <Option value=""></Option>
                <Option value=""></Option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel
                id="select-field-demo-label"
                htmlFor="select-field-demo-button"
              >
                Fee type
              </FormLabel>
              <Select placeholder=" Select Fee Type">
                <Option value="1">Admission</Option>
                <Option value="2">Monthly</Option>
                <Option value="3">Yearly Charges-1st Instalment</Option>
                <Option value="4">Yearly Charges-2nd Instalment</Option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Fee Name</FormLabel>
              <Input size="sm" placeholder="Fee Name" />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Ammount</FormLabel>
              <Input
                size="sm"
                // startDecorator={<AccountCircleIcon />}
                placeholder="Ammount"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Ledger</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Ledger"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                id="select-field-demo-label"
                htmlFor="select-field-demo-button"
              >
                Effect Month
              </FormLabel>
              <Select
                placeholder="Select Month"
                slotProps={{
                  button: {
                    id: "select-field-demo-button",
                    // TODO: Material UI set aria-labelledby correctly & automatically
                    // but Base UI and Joy UI don't yet.
                    "aria-labelledby":
                      "select-field-demo-label select-field-demo-button",
                  },
                }}
              >
                <Option value="January">January</Option>
                <Option value="February">February</Option>
                <Option value="March">March</Option>
                <Option value="April">April</Option>
                <Option value="May">May</Option>
                <Option value="June">June</Option>
                <Option value="July">July</Option>
                <Option value="August">August</Option>
                <Option value="September">September</Option>
                <Option value="October">October</Option>
                <Option value="November">November</Option>
                <Option value="December">December</Option>
              </Select>
            </FormControl>
          </Stack>
        </Stack>

        <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
          <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
            <Button size="sm" variant="outlined" color="neutral">
              Cancel
            </Button>
            <Button type="submit" size="sm" variant="solid">
              Save
            </Button>
          </CardActions>
        </CardOverflow>
      </Card>
    </Box>
  );
}
