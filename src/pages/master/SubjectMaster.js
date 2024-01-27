import * as React from "react";
import Box from "@mui/joy/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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

export default function SubjectMaster() {
  return (
    <Box sx={{ flex: 1, width: "100%", marginTop: "3vh" }}>
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">Subject Information</Typography>
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
            <Stack spacing={1}>
              <FormLabel>Subject Code</FormLabel>
              <FormControl
                sx={{ display: { sm: "flex-column", md: "flex-row" }, gap: 2 }}
              >
                <Input size="sm" placeholder="Subject Code" />
                {/* <Button>+</Button> */}
                {/* <Input size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} /> */}
              </FormControl>
            </Stack>
            <Stack direction="column" spacing={2}>
              <FormControl>
                <FormLabel>Subject Name</FormLabel>
                <Input size="sm" placeholder="Subject Name" />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Full Mark</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<AccountCircleIcon />}
                  placeholder="Full Mark"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Pass Mark</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Pass Mark"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                    Add Total
                </FormLabel>
                <Select
                    placeholder='Add Total'
                  slotProps={{
                    button: {
                      id: "select-field-demo-button",
                      // TODO: Material UI set aria-labelledby correctly & automatically
                      // but Base UI and Joy UI don't yet.
                      "aria-labelledby":
                        "select-field-demo-label select-field-demo-button",
                    },
                  }}
                >
                  <Option value="yes">yes</Option>
                  <Option value="no">No</Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                    Class Name
                </FormLabel>
                <Select
                    placeholder='Class Name'
                  slotProps={{
                    button: {
                      id: "select-field-demo-button",
                      // TODO: Material UI set aria-labelledby correctly & automatically
                      // but Base UI and Joy UI don't yet.
                      "aria-labelledby":
                        "select-field-demo-label select-field-demo-button",
                    },
                  }}
                >
                  <Option value=""></Option>
                  <Option value=""></Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                    Order No
                </FormLabel>
                <Select
                    placeholder='Order No'
                  slotProps={{
                    button: {
                      id: "select-field-demo-button",
                      // TODO: Material UI set aria-labelledby correctly & automatically
                      // but Base UI and Joy UI don't yet.
                      "aria-labelledby":
                        "select-field-demo-label select-field-demo-button",
                    },
                  }}
                >
                  <Option value=""></Option>
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
          <Stack direction="row" >
          </Stack>
          <FormControl>
                <FormLabel>Subject Name</FormLabel>
                <Input size="sm" placeholder="Subject Name" />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Full Mark</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<AccountCircleIcon />}
                  placeholder="Full Mark"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Pass Mark</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Pass Mark"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                    Add Total
                </FormLabel>
                <Select
                    placeholder='Add Total'
                    sx={{ flexGrow: 1 }}

                  slotProps={{
                    button: {
                      id: "select-field-demo-button",
                      // TODO: Material UI set aria-labelledby correctly & automatically
                      // but Base UI and Joy UI don't yet.
                      "aria-labelledby":
                        "select-field-demo-label select-field-demo-button",
                    },
                  }}
                >
                  <Option value="yes">yes</Option>
                  <Option value="no">No</Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                    Class Name
                </FormLabel>
                <Select
                    placeholder='Class Name'
                  slotProps={{
                    button: {
                      id: "select-field-demo-button",
                      // TODO: Material UI set aria-labelledby correctly & automatically
                      // but Base UI and Joy UI don't yet.
                      "aria-labelledby":
                        "select-field-demo-label select-field-demo-button",
                    },
                  }}
                >
                  <Option value=""></Option>
                  <Option value=""></Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                    Order No
                </FormLabel>
                <Select
                    placeholder='Order No'
                  slotProps={{
                    button: {
                      id: "select-field-demo-button",
                      // TODO: Material UI set aria-labelledby correctly & automatically
                      // but Base UI and Joy UI don't yet.
                      "aria-labelledby":
                        "select-field-demo-label select-field-demo-button",
                    },
                  }}
                >
                  <Option value=""></Option>
                  <Option value=""></Option>
                </Select>
              </FormControl>
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