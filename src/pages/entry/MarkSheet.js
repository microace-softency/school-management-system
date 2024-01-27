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

export default function MarkSheet() {
  return (
    <Box sx={{ flex: 1, width: "100%", marginTop: "3vh" }}>
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">Mark Sheet</Typography>
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
                <FormLabel>Date</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Name"
                />
              </FormControl>
            </Stack>
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
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Exam</FormLabel>
                <Select placeholder=" Select Exam">
                  <Option value="1"></Option>
                </Select>
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Subject</FormLabel>
                <Input placeholder=""/>
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Full Mark</FormLabel>
                <Input placeholder="Enter Full Mark"/>
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Pass  Mark</FormLabel>
                <Input placeholder="Enter Pass Mark"/>
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
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Entry No.</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Staff Code"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Date</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Name"
                />
              </FormControl>
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
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Exam</FormLabel>
                <Select placeholder=" Select Exam">
                  <Option value="1"></Option>
                </Select>
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Subject</FormLabel>
                <Input placeholder=""/>
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Full Mark</FormLabel>
                <Input placeholder="Enter Full Mark"/>
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Pass  Mark</FormLabel>
                <Input placeholder="Enter Pass Mark"/>
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
