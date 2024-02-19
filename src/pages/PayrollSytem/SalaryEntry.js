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

export default function SalaryEntry() {
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
            <FormLabel sx={{ color: "red" }}>Staff Details</FormLabel>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Entry No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Staff Code"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Entry Date</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  type="date"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Bank A/C No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Bank Name"
                />
              </FormControl>
            </Stack>
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
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Bank Name</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Bank Name"
                />
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
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
              <Input/>
            </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
            <FormControl>
              <FormLabel>Catagory</FormLabel>
              <Input/>
            </FormControl>
            <FormControl>
              <FormLabel>Basic</FormLabel>
              <Input/>
            </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
            <FormControl>
                <FormLabel>Post</FormLabel>
                <Input/>
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Joining Date</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Grade</FormLabel>
                <Input/>            
              </FormControl>
            </Stack>
            <Divider/>
            <FormLabel sx={{color:'red'}}>Working Details</FormLabel>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Months Day</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Months Day"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Work Day</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Work Day"
                />
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Present Day</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Present Day"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>CL</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter CL"
                />
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel> SL</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter  SL."
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel> Week Holiday</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter  Week Holiday"
                />
              </FormControl>
            </Stack>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel> Absent</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Absent "
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel sx={{color:'red'}}> Total</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                sx={{ flexGrow: 1 }}
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
              <FormLabel>Grade Pay</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel sx={{color:"red"}}>Gross Pay</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <Divider/>
            <FormLabel sx={{color:"red"}}>Deduction Details</FormLabel>
            <Stack direction="row" spacing={1}>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>PF</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Advance Ded.</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Total Ded</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel sx={{color:"red"}}>NET PAY</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            </Stack>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel sx={{color:"red"}}>Remark</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
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
            <FormLabel sx={{ color: "red" }}>Staff Details</FormLabel>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Entry No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Staff Code"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Entry Date</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  type="date"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Bank A/C No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Bank Name"
                />
              </FormControl>
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
                <FormLabel>Bank Name</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Bank Name"
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
              <Input/>
            </FormControl>
            <FormControl>
              <FormLabel>Catagory</FormLabel>
              <Input/>
            </FormControl>
            <FormControl>
              <FormLabel>Basic</FormLabel>
              <Input/>
            </FormControl>
            <FormControl>
                <FormLabel>Post</FormLabel>
                <Input/>
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Joining Date</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Grade</FormLabel>
                <Input/>            
              </FormControl>
            <Divider/>
            <FormLabel sx={{color:'red'}}>Working Details</FormLabel>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Months Day</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Months Day"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Work Day</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Work Day"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Present Day</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Present Day"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>CL</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter CL"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel> SL</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter  SL."
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel> Week Holiday</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter  Week Holiday"
                />
              </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel> Absent</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Absent "
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel sx={{color:'red'}}> Total</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                sx={{ flexGrow: 1 }}
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
              <FormLabel>Grade Pay</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel sx={{color:"red"}}>Gross Pay</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <Divider/>
            <FormLabel sx={{color:"red"}}>Deduction Details</FormLabel>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>PF</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Advance Ded.</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Total Ded</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel sx={{color:"red"}}>NET PAY</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel sx={{color:"red"}}>Remark</FormLabel>
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
