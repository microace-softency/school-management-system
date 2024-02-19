import * as React from 'react';
import Box from '@mui/joy/Box';
import { AspectRatio, Button, Card, CardActions, CardOverflow, Divider, FormControl, FormLabel, Input, Option, Select, Stack, Typography } from '@mui/joy';

export default function FeeReceive() {
  return (
    <Box sx={{ flex: 1, width: '100%', marginTop:"3vh" }}>
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Receive Details</Typography>
            {/* <Typography level="body-sm">
              Customize how your ClassMaster information will apper to the networks.
            </Typography> */}
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >
            <Stack direction="column" spacing={1}>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Voucher No</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Enter Voucher No" />
                  {/* <Button>+</Button> */}
                  {/* <Input size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} /> */}
                </FormControl>
              </Stack>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Date</FormLabel>
                  <Input
                    size="sm"
                    type="Date"
                    // startDecorator={<EmailRoundedIcon />}
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Student Name</FormLabel>
                  <Input
                    size="sm"
                    // startDecorator={<EmailRoundedIcon />}
                    sx={{ flexGrow: 1 }}
                    placeholder='Enter Student Name'
                  />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Admission No.</FormLabel>
                  <Input
                    size="sm"
                    // startDecorator={<EmailRoundedIcon />}
                    sx={{ flexGrow: 1 }}
                    placeholder='Enter Admission No.'
                  />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Class</FormLabel>
                  <Input
                    size="sm"
                    // startDecorator={<EmailRoundedIcon />}
                    sx={{ flexGrow: 1 }}
                    placeholder='Enter Class'
                  />
                </FormControl>
                <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Section</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Section"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Roll No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Roll No"
                />
              </FormControl>
            </Stack>
            <FormControl>
                <FormLabel>Fee type</FormLabel>
                <Select placeholder=" Select Category">
                  <Option value="Admission">Admission</Option>
                  <Option value="Monthly">Monthly</Option>
                  <Option value="Re-Admission">Re-Admission</Option>
                </Select>
              </FormControl>
            <FormControl>
                <FormLabel>Receive type</FormLabel>
                <Select placeholder=" Select Category">
                  <Option value="Bank">Bank</Option>
                  <Option value="Cash">Cash</Option>
                  <Option value="upi">UPI</Option>
                </Select>
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Bank/UPI</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Bank/UPI"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Transaction Id</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Transaction Id"
                />
              </FormControl>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: 'block', md: 'none' }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Voucher No</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Enter Voucher No" />
                  {/* <Button>+</Button> */}
                  {/* <Input size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} /> */}
                </FormControl>
              </Stack>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Date</FormLabel>
                  <Input
                    size="sm"
                    type="Date"
                    // startDecorator={<EmailRoundedIcon />}
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Student Name</FormLabel>
                  <Input
                    size="sm"
                    // startDecorator={<EmailRoundedIcon />}
                    sx={{ flexGrow: 1 }}
                    placeholder='Enter Student Name'
                  />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Admission No.</FormLabel>
                  <Input
                    size="sm"
                    // startDecorator={<EmailRoundedIcon />}
                    sx={{ flexGrow: 1 }}
                    placeholder='Enter Admission No.'
                  />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Class</FormLabel>
                  <Input
                    size="sm"
                    // startDecorator={<EmailRoundedIcon />}
                    sx={{ flexGrow: 1 }}
                    placeholder='Enter Class'
                  />
                </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Section</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Section"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Roll No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Roll No"
                />
              </FormControl>
            <FormControl>
                <FormLabel>Fee type</FormLabel>
                <Select placeholder=" Select Category">
                  <Option value="Admission">Admission</Option>
                  <Option value="Monthly">Monthly</Option>
                  <Option value="Re-Admission">Re-Admission</Option>
                </Select>
              </FormControl>
            <FormControl>
                <FormLabel>Receive type</FormLabel>
                <Select placeholder=" Select Category">
                  <Option value="Bank">Bank</Option>
                  <Option value="Cash">Cash</Option>
                  <Option value="upi">UPI</Option>
                </Select>
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Bank/UPI</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Bank/UPI"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Transaction Id</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Transaction Id"
                />
              </FormControl>
            </Stack>
           </Stack>
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button type='submit' size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
    </Box>
  );
}
