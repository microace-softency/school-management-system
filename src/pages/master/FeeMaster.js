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

export default function FeeMaster() {
  return (
    <Box sx={{ flex: 1, width: "100%", marginTop: "3vh" }}>
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">Fee Details</Typography>
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
            <FormLabel>Order No</FormLabel>
            <FormControl
              sx={{ display: { sm: "flex-column", md: "flex-row" }, gap: 2 }}
            >
              <Input size="sm" placeholder="Subject Code" />
              {/* <Button>+</Button> */}
              {/* <Input size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} /> */}
            </FormControl>
            <Stack direction="column" spacing={2}>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                  Class
                </FormLabel>
                <Select
                  placeholder="Select Class"
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
                  Fee type
                </FormLabel>
                <Select placeholder=" Select Fee Type">
                  <Option value="1">Admission</Option>
                  <Option value="2">Monthly</Option>
                  <Option value="3">Yearly Charges-1st Instalment</Option>
                  <Option value="4">Yearly Charges-2nd Instalment</Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Fee Name</FormLabel>
                <Input size="sm" placeholder="Fee Name" />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Ammount</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<AccountCircleIcon />}
                  placeholder="Ammount"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Ledger</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Ledger"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                  Effect Month
                </FormLabel>
                <Select
                  placeholder="Select Month"
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
                  <Option value="January">January</Option>
                  <Option value="February">February</Option>
                  <Option value="March">March</Option>
                  <Option value="April">April</Option>
                  <Option value="May">May</Option>
                  <Option value="June">June</Option>
                  <Option value="July">July</Option>
                  <Option value="August">August</Option>
                  <Option value="September">September</Option>
                  <Option value="October">October</Option>
                  <Option value="November">November</Option>
                  <Option value="December">December</Option>
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
            <Stack direction="column" spacing={2}>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                  Class
                </FormLabel>
                <Select
                  placeholder="Select Class"
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
                  Fee type
                </FormLabel>
                <Select placeholder=" Select Fee Type">
                  <Option value="1">Admission</Option>
                  <Option value="2">Monthly</Option>
                  <Option value="3">Yearly Charges-1st Instalment</Option>
                  <Option value="4">Yearly Charges-2nd Instalment</Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Fee Name</FormLabel>
                <Input size="sm" placeholder="Fee Name" />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Ammount</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<AccountCircleIcon />}
                  placeholder="Ammount"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Ledger</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Ledger"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  id="select-field-demo-label"
                  htmlFor="select-field-demo-button"
                >
                  Effect Month
                </FormLabel>
                <Select
                  placeholder="Select Month"
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
                  <Option value="January">January</Option>
                  <Option value="February">February</Option>
                  <Option value="March">March</Option>
                  <Option value="April">April</Option>
                  <Option value="May">May</Option>
                  <Option value="June">June</Option>
                  <Option value="July">July</Option>
                  <Option value="August">August</Option>
                  <Option value="September">September</Option>
                  <Option value="October">October</Option>
                  <Option value="November">November</Option>
                  <Option value="December">December</Option>
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
