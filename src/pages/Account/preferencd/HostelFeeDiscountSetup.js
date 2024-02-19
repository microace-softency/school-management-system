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

export default function HostelFeeDiscountSetup() {
  return (
    <Box sx={{ flex: 1, width: "100%", marginTop: "3vh" }}>
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">Hostel Fee Discount Setup </Typography>
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
            <FormLabel>Receive Detils</FormLabel>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{width:"50%"}}>
                <FormLabel>Class</FormLabel>
                <Select placeholder="Select Class">
                  <Option value=""></Option>
                </Select>
              </FormControl>
              <FormControl sx={{width:"50%"}}>
              <FormLabel>Fee Type</FormLabel>
                <Select placeholder="Select Class">
                  <Option value=""></Option>
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
            <FormLabel>Receive Detils</FormLabel>
              <FormControl sx={{width:"100%"}}>
                <FormLabel>Class</FormLabel>
                <Select placeholder="Select Class">
                  <Option value=""></Option>
                </Select>
              </FormControl>
              <FormControl sx={{width:"100%"}}>
              <FormLabel>Fee Type</FormLabel>
                <Select placeholder="Select Class">
                  <Option value=""></Option>
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
