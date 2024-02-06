
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

export default function UserMaster() {
  return (
    <Box sx={{ flex: 1, width: "100%", marginTop: "3vh" }}>
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">User Master</Typography>
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
                <FormLabel>Login Name *</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Login Name"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Password</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Password"
                />
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>First Name</FormLabel>
                <Input
                  size="sm"
                  placeholder="Enter Firsrt Name"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Middle Name</FormLabel>
                <Input
                  size="sm"
                  placeholder="Enter Middle Name"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Last Name</FormLabel>
              <Input
                size="sm"
                type="text"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Last Name"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            </Stack>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Address</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Address"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Phone No.</FormLabel>
                <Input
                  size="sm"
                  type="number"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Phone No"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Tel. No.</FormLabel>
                <Input
                  size="sm"
                  type="number"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Tel. No"
                />
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Email</FormLabel>
                <Input
                  size="sm"
                  placeholder="Enter Email"
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
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Login Name *</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Login Name"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Password</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Password"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>First Name</FormLabel>
                <Input
                  size="sm"
                  placeholder="Enter Firsrt Name"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Middle Name</FormLabel>
                <Input
                  size="sm"
                  placeholder="Enter Middle Name"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Last Name</FormLabel>
              <Input
                size="sm"
                type="text"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Last Name"
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
                <FormLabel>Phone No.</FormLabel>
                <Input
                  size="sm"
                  type="number"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Phone No"
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Tel. No.</FormLabel>
                <Input
                  size="sm"
                  type="number"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Tel. No"
                />
              </FormControl>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Email</FormLabel>
                <Input
                  size="sm"
                  placeholder="Enter Email"
                  // startDecorator={<EmailRoundedIcon />}
                />
              </FormControl>
            </Stack>
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
