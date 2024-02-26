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
import axios from "axios";
import { useState, useEffect } from "react";

export default function BookMaster() {
  // const [data, setData] = useState([]);
  // const [data1, setData1] = useState([]);

  // const loadData = async () =>{
  //   const response = await axios.get("http://localhost:3002/api/employees");
  //   setData(response.data);
  //   console.log("res1", response.data);
  // }
  // const loadData1 = async () =>{
  //   const response = await axios.get("http://localhost:3002/api/get");
  //   setData1(response.data);
  //   console.log("res2", response.data);
  // }
  // useEffect(()=>{
  //   loadData();
  //   loadData1();
  // },[]);

  const [formData, setFormData] = useState({
    bookCode: "",
    bookName: "",
    quantity: "",
    bookGroup: "",
    writerName: "",
    publisherName: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("getdata", formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/post", formData);
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>

    <Box sx={{ flex: 1, width: "100%", marginTop: "3vh" }}>
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">Book Details</Typography>
          {/* <Typography level="body-sm">
              Customize how your ClassMaster information will apper to the networks.
            </Typography> */}
        </Box>
        <Divider />
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: "block", md: "flex" }, my: 1 }}
        >
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <Stack spacing={1}>
              <FormLabel sx={{ color: "red" }}>Book Details</FormLabel>

              <FormLabel>Book Code</FormLabel>
              <FormControl
                sx={{ display: { sm: "flex-column", md: "flex-row" }, gap: 2 }}
              >
                <Input size="sm" placeholder="Enter Book Code" name="bookCode" value={formData.bookCode} onChange={handleChange}  />
                {/* <Button>+</Button> */}
                {/* <Input size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} /> */}
              </FormControl>
            </Stack>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Book Name</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                sx={{ flexGrow: 1 }}
                placeholder="Enter Book Name"
                name="bookName" value={formData.bookName} onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Quantity</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                sx={{ flexGrow: 1 }}
                placeholder="Enter Quantity"
                name="quantity" value={formData.quantity} onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Book Group</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Book Group"
                name="bookGroup" value={formData.bookGroup} onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Writer Name</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Writer Name"
                name="writerName" value={formData.writerName} onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Publisher Name</FormLabel>
              <Input
                size="sm"
                // startDecorator={<EmailRoundedIcon />}
                placeholder="Enter Publisher Name"
                name="publisherName" value={formData.publisherName} onChange={handleChange}
              />
            </FormControl>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{ display: { xs: "none", md: "none" }, my: 1 }}
        >
          <Stack direction="row" spacing={2}>
            <Stack direction="column" spacing={1}>
              {/* <AspectRatio
                  ratio="1"
                  maxHeight={108}
                  sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio> */}
            </Stack>
            <Stack spacing={1} sx={{ flexGrow: 1 }}>
              <FormLabel>Name</FormLabel>
              <FormControl
                sx={{
                  display: {
                    sm: "flex-column",
                    md: "flex-row",
                  },
                  gap: 2,
                }}
              >
                <Input size="sm" placeholder="First name" />
                <Input size="sm" placeholder="Last name" />
              </FormControl>
            </Stack>
          </Stack>
          <FormControl>
            <FormLabel>Role</FormLabel>
            <Input size="sm" defaultValue="UI Developer" />
          </FormControl>
          <FormControl sx={{ flexGrow: 1 }}>
            <FormLabel>Email</FormLabel>
            <Input
              size="sm"
              type="email"
              // startDecorator={<EmailRoundedIcon />}
              placeholder="email"
              defaultValue="siriwatk@test.com"
              sx={{ flexGrow: 1 }}
            />
          </FormControl>
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
    </form>

  );
}
