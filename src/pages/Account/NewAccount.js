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
  Textarea,
  Typography,
} from "@mui/joy";

export default function NewAccount() {
  return (
    <Box sx={{ flex: 1, width: "100%", marginTop: "3vh" }}>
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">Company Master</Typography>
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
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Initiala</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder=""
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
              <FormLabel>Address</FormLabel>
              <Input
                size="sm"
                minRows={3} 
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Addres"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Pin Code</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Pin Code"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Email</FormLabel>
                <Input
                  size="sm"
                  placeholder="Enter email"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Web</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
            </Stack>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Contact Number</FormLabel>
              <Input
                size="sm"
                type="number"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Contact Number"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Affilication No</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Affilication No"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>PAN No</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter PAN No"
                />
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>From Date</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Religion"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>To Date</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Caste"
                />
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Session</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Sample</FormLabel>
                <Select placeholder=" Select Samnple type">
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
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
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Initiala</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder=""
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
              <FormLabel>Address</FormLabel>
              <Input
                size="sm"
                minRows={3} 
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Addres"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Pin Code</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Pin Code"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Email</FormLabel>
                <Input
                  size="sm"
                  placeholder="Enter email"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Web</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Contact Number</FormLabel>
              <Input
                size="sm"
                type="number"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Contact Number"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Affilication No</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Affilication No"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>PAN No</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter PAN No"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>From Date</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Religion"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>To Date</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Caste"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Session</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Sample</FormLabel>
                <Select placeholder=" Select Samnple type">
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
