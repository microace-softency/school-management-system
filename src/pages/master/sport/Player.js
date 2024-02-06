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

export default function player() {
  return (
    <Box sx={{ flex: 1, width: "100%", marginTop: "3vh" }}>
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">player Details</Typography>
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
              <FormControl sx={{width:"50%"}}>
                <FormLabel>Player Code</FormLabel>
                    <Input placeholder="Enter Player Code "/>
              </FormControl>
              <FormControl sx={{width:"50%"}}>
              <FormLabel>Player Type</FormLabel>
              <Select placeholder="Select player type">
                  <Option value="student">Student</Option>
                  <Option value="other">Other</Option>
                </Select>
              </FormControl>
              <FormControl sx={{width:"50%"}}>
              <FormLabel>Date</FormLabel>
                 <Input type="date"/>
              </FormControl>
              </Stack>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{width:"50%"}}>
                <FormLabel>Name</FormLabel>
                    <Input placeholder="Enter Player Name "/>
              </FormControl>
              <FormControl sx={{width:"50%"}}>
              <FormLabel>Father Name</FormLabel>
              <Input placeholder="Enter Fathers Name"/>
              </FormControl>
              </Stack>
              <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Enter Address"/>
              </FormControl>
              <Stack direction="row" spacing={1}>
              <FormControl sx={{width:"50%"}}>
                <FormLabel>Sport</FormLabel>
                    <Input placeholder="Enter Sport Name "/>
              </FormControl>
              <FormControl sx={{width:"50%"}}>
              <FormLabel>Description</FormLabel>
              <Input placeholder="Enter Description"/>
              </FormControl>
              </Stack>
              <Stack direction="row" spacing={1}>
              <FormControl sx={{width:"50%"}}>
              <FormLabel>Type Of Fee</FormLabel>
              <Input placeholder=""/>
              </FormControl>
              <FormControl sx={{width:"50%"}}>
              <FormLabel>Total Amount</FormLabel>
              <Input placeholder="Enter Total Amount"/>
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
              <FormControl >
                <FormLabel>Player Code</FormLabel>
                    <Input placeholder="Enter Player Code "/>
              </FormControl>
              <FormControl >
              <FormLabel>Player Type</FormLabel>
              <Select placeholder="Select player type">
                  <Option value="student">Student</Option>
                  <Option value="other">Other</Option>
                </Select>
              </FormControl>
              <FormControl >
              <FormLabel>Date</FormLabel>
                 <Input type="date"/>
              </FormControl>
              <FormControl >
                <FormLabel>Name</FormLabel>
                    <Input placeholder="Enter Player Name "/>
              </FormControl>
              <FormControl >
              <FormLabel>Father Name</FormLabel>
              <Input placeholder="Enter Fathers Name"/>
              </FormControl>
              <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Enter Address"/>
              </FormControl>
              <FormControl >
                <FormLabel>Sport</FormLabel>
                    <Input placeholder="Enter Sport Name "/>
              </FormControl>
              <FormControl >
              <FormLabel>Description</FormLabel>
              <Input placeholder="Enter Description"/>
              </FormControl>
              <FormControl >
              <FormLabel>Type Of Fee</FormLabel>
              <Input placeholder=""/>
              </FormControl>
              <FormControl >
              <FormLabel>Total Amount</FormLabel>
              <Input placeholder="Enter Total Amount"/>
              </FormControl>
          </Stack>
        </Stack>
        <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
          <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
            <Button size="sm" variant="outlined" color="neutral">
              Cancel
            </Button>
            <Button size="sm" variant="solid">
              Save
            </Button>
          </CardActions>
        </CardOverflow>
      </Card>
    </Box>
  );
}
