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
  IconButton,
  Input,
  Option,
  Select,
  Stack,
  Typography,
} from "@mui/joy";
import EditRoundedIcon from '@mui/icons-material/EditRounded';


export default function Hostel() {
  return (
    <Box sx={{ flex: 1, width: "100%", marginTop: "3vh" }}>
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">Student's Hostel Details</Typography>
          {/* <Typography level="body-sm">
              Customize how your ClassMaster information will apper to the networks.
            </Typography> */}
        </Box>
        <Divider />
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: "none", md: "Block" }, my: 1 }}
        >
           <Stack direction="column" alignItems="center">
            {/* Your image upload component goes here */}
            <IconButton>
              <EditRoundedIcon />
            </IconButton>
            <Typography variant="body-sm">Upload Image</Typography>
          </Stack>
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <Stack spacing={1}></Stack>
            <FormLabel sx={{color:"red"}}>Student Profile</FormLabel>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Admission No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Admission No"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Date</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  type="date"
                />
              </FormControl>
            </Stack>
            <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Admission No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Admission No"
                />
              </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Name</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Name"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <Stack direction="row" spacing={1}>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Class</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Class"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Section</FormLabel>
                <Input
                  size="sm"
                  placeholder="Enter Section"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Roll No.</FormLabel>
                <Input
                  size="sm"
                  placeholder="Enter Roll No"
                  // startDecorator={<EmailRoundedIcon />}
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
              <FormLabel>Mother's Name</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Mother Name"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Address</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Address"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel></FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Contact No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Contact No"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Leave Out</FormLabel>
                <Select>
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
              </FormControl>
            </Stack>
            <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Tution Fee</FormLabel>
                <Select>
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
              </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Conveyance</FormLabel>
                <Select>
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
              </FormControl>
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
            <FormLabel sx={{color:"red"}}>Student Profile</FormLabel>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Admission No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Admission No"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Date</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  type="date"
                />
              </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Admission No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Admission No"
                />
              </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Name</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Name"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Class</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Class"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Section</FormLabel>
                <Input
                  size="sm"
                  placeholder="Enter Section"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Roll No.</FormLabel>
                <Input
                  size="sm"
                  placeholder="Enter Roll No"
                  // startDecorator={<EmailRoundedIcon />}
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
              <FormLabel>Mother's Name</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Mother Name"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Address</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Address"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel></FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Contact No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Contact No"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Leave Out</FormLabel>
                <Select>
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
              </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Tution Fee</FormLabel>
                <Select>
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
              </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Conveyance</FormLabel>
                <Select>
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
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
