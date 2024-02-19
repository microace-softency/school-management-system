import * as React from "react";
import Box from "@mui/joy/Box";
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

export default function StaffMasterPayRoll() {
  return (
    <Box sx={{ flex: 1, width: "100%", marginTop: "3vh" }}>
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">FrmNewStaff</Typography>
          {/* <Typography level="body-sm">
              Customize how your ClassMaster information will apper to the networks.
            </Typography> */}
        </Box>
        <Divider />
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
        >
          <Stack direction="column" spacing={1}></Stack>
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <Stack spacing={1}></Stack>
            <FormLabel sx={{ color: "red" }}>Department</FormLabel>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Staff Code</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Staff Code"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Name</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Name"
                />
              </FormControl>
            </Stack>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Father's Name</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Father Name"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Designation</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Designation"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Department</FormLabel>
              <Select placeholder=" Select Category">
                <Option value="Office">Office</Option>
                <Option value="Teaching">Teaching</Option>
                <Option value="Non-Teaching">Non-Teaching</Option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Catagory</FormLabel>
              <Select placeholder=" Select Category">
                <Option value="Trained">Trained</Option>
                <Option value="Non-Trained">Non-Trained</Option>
              </Select>
            </FormControl>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Date Of Birth</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <Select placeholder=" Select Category">
                  <Option value="female">Female</Option>
                  <Option value="male">Male</Option>
                  <Option value="transgender">Transgender</Option>
                </Select>
              </FormControl>
            </Stack>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Present Address</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Present Address"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Permanent Address</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Permanent Address"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Nationality</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Nationality"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Language</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Language"
                />
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Religion</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Religion"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Caste</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Caste"
                />
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Mobile No</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Mobile No."
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Tele. No</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Tele. No"
                />
              </FormControl>
            </Stack>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel> Qualification</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Qualification "
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel> Experience</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Experience "
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Appointment Date</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  type="date"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Pan No.</FormLabel>
                <Input size="sm" placeholder="Enter Pan No." />
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Joining Date</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>PF No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter PF No."
                />
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Retirement Date</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>UAN No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter UAN No."
                />
              </FormControl>
            </Stack>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Aadhar No.</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Aadhar No"
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Account No.</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Account No "
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Bank No.</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Bank No "
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Nominee</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Nominee  "
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Age</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Age  "
              />
            </FormControl>
            <Divider/>
            <FormLabel sx={{color:"red"}}>Earning Details</FormLabel>
            <Stack direction="row" spacing={1}>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Basic</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>DA</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>HRA</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>CCA</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>MA</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Other Allow</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Spl. Allow</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>H. T. Allow</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            </Stack>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>I. Relife</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <Divider/>
            <FormLabel sx={{color:"red"}}>Deduction Details</FormLabel>
            <Stack direction="row" spacing={1}>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Staff Welfare</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>PF</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{ display: { xs: "flex", md: "none" }, my: 1 }}
        >
          <Stack direction="column" spacing={1}></Stack>
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <Stack spacing={1}></Stack>
            <FormLabel sx={{ color: "red" }}>Department</FormLabel>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Staff Code</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Staff Code"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Name</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Name"
                />
              </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Father's Name</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Father Name"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Designation</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Designation"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Department</FormLabel>
              <Select placeholder=" Select Category">
                <Option value="Office">Office</Option>
                <Option value="Teaching">Teaching</Option>
                <Option value="Non-Teaching">Non-Teaching</Option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Catagory</FormLabel>
              <Select placeholder=" Select Category">
                <Option value="Trained">Trained</Option>
                <Option value="Non-Trained">Non-Trained</Option>
              </Select>
            </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Date Of Birth</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <Select placeholder=" Select Category">
                  <Option value="female">Female</Option>
                  <Option value="male">Male</Option>
                  <Option value="transgender">Transgender</Option>
                </Select>
              </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Present Address</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Present Address"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Permanent Address</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Permanent Address"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Nationality</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Nationality"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Language</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Language"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Religion</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Religion"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Caste</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Caste"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Mobile No</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Mobile No."
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Tele. No</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Tele. No"
                />
              </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel> Qualification</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Qualification "
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel> Experience</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Experience "
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Appointment Date</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  type="date"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Pan No.</FormLabel>
                <Input size="sm" placeholder="Enter Pan No." />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Joining Date</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>PF No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter PF No."
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Retirement Date</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>UAN No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter UAN No."
                />
              </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Aadhar No.</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Aadhar No"
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Account No.</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Account No "
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Bank No.</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Bank No "
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Nominee</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Nominee  "
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Age</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Age  "
              />
            </FormControl>
            <Divider/>
            <FormLabel sx={{color:"red"}}>Earning Details</FormLabel>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Basic</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>DA</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>HRA</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>CCA</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>MA</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Other Allow</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Spl. Allow</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>H. T. Allow</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>I. Relife</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <Divider/>
            <FormLabel sx={{color:"red"}}>Deduction Details</FormLabel>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Staff Welfare</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>PF</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
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
