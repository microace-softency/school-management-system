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

export default function TransferNextYear() {
  return (
    <Box sx={{ flex: 1, width: "100%", marginTop: "3vh" }}>
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">Attend for Result</Typography>
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
          <FormLabel sx={{color:'red'}}>Transfer From</FormLabel>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Class</FormLabel>
                <Select placeholder=" Select Class">
                  <Option value="1"></Option>
                </Select>
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Section</FormLabel>
                <Select placeholder=" Select Class">
                  <Option value="1"></Option>
                </Select>
              </FormControl>
            </Stack>
            <Divider/>
          <FormLabel sx={{color:'red'}}>Transfer To</FormLabel>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Class</FormLabel>
                <Select placeholder=" Select Class">
                  <Option value="1"></Option>
                </Select>
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Section</FormLabel>
                <Select placeholder=" Select Class">
                  <Option value="1"></Option>
                </Select>
              </FormControl>
            </Stack>
            <Divider/>
            <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Session</FormLabel>
                <Select placeholder=" Select Class">
                  <Option value="1">2017-2018</Option>
                  <Option value="2">2018-2019</Option>
                  <Option value="3">2019-2020</Option>
                  <Option value="4">2020-2021</Option>
                  <Option value="5">2021-2022</Option>
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
          <FormLabel sx={{color:'red'}}>Transfer From</FormLabel>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Class</FormLabel>
                <Select placeholder=" Select Class">
                  <Option value="1"></Option>
                </Select>
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Section</FormLabel>
                <Select placeholder=" Select Class">
                  <Option value="1"></Option>
                </Select>
              </FormControl>
            <Divider/>
          <FormLabel sx={{color:'red'}}>Transfer To</FormLabel>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Class</FormLabel>
                <Select placeholder=" Select Class">
                  <Option value="1"></Option>
                </Select>
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Section</FormLabel>
                <Select placeholder=" Select Class">
                  <Option value="1"></Option>
                </Select>
              </FormControl>
            <Divider/>
            <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Session</FormLabel>
                <Select placeholder=" Select Class">
                  <Option value="1">2017-2018</Option>
                  <Option value="2">2018-2019</Option>
                  <Option value="3">2019-2020</Option>
                  <Option value="4">2020-2021</Option>
                  <Option value="5">2021-2022</Option>
                </Select>
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
