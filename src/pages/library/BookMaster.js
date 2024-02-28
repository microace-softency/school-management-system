import * as React from "react";
import Box from "@mui/joy/Box";
import {
  Button,
  Card,
  CardActions,
  CardOverflow,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
} from "@mui/joy";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  bookCode: "",
  bookGroup: "",
  bookName: "",
  publisherName: "",
  quantity: "",
  writerName: "",
};

export default function BookMaster() {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { bookCode, bookGroup, bookName,  publisherName, quantity, writerName} = state;
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/book/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookCode || !bookGroup || !bookName ||  !publisherName || !quantity || !writerName) {
      toast.error("Please provide value into each inpute field ");
    } else {
      if(!id){
        axios
        .post("http://localhost:3002/api/createbook", {
          bookCode, bookGroup, bookName,  publisherName, quantity, writerName
        })
        .then(() => {
          setState({  
          bookCode: "",
          bookGroup: "",
          bookName: "",
          publisherName: "",
          quantity: "",
          writerName: "",});
          console.log("classdetails",state);
        })
        .catch((err) => toast.error(err.respose.data));
      toast.success("Book Add Successfully");
      } else {
        axios
        .put(`http://localhost:3002/api/updatebook/${id}`, {
          bookCode, bookGroup, bookName,  publisherName, quantity, writerName
        })
        .then(() => {
          setState({  
          bookCode: "",
          bookGroup: "",
          bookName: "",
          publisherName: "",
          quantity: "",
          writerName: "",});
          console.log("classdetails",state);
        })
        .catch((err) => toast.error(err.respose.data));
      toast.success("Book Add Successfully");
      }
      
      setTimeout(() => navigate("/bookmasterlist"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
      <Box sx={{ flex: 1, width: "100%", marginTop: "3vh" }}>
         <button
        style={{ display: "flex" }}
        onClick={() => navigate("/bookmasterlist")}
      >
        {"<"}
      </button>
      <form onSubmit={handleSubmit}>
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
                  sx={{
                    display: { sm: "flex-column", md: "flex-row" },
                    gap: 2,
                  }}
                >
                  <Input
                    size="sm"
                    placeholder="Enter Book Code"
                    type="text"
                  id="bookCode"
                  name="bookCode"
                  value={bookCode || ""}
                  onChange={handleInputChange}
                  />
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
                  type="text"
                  id="bookName"
                  name="bookName"
                  value={bookName || ""}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Quantity</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  sx={{ flexGrow: 1 }}
                  placeholder="Enter Quantity"
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={quantity || ""}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Book Group</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Book Group"
                  type="text"
                  id="bookGroup"
                  name="bookGroup"
                  value={bookGroup || ""}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Writer Name</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Writer Name"
                  type="text"
                  id="writerName"
                  name="writerName"
                  value={writerName || ""}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Publisher Name</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Publisher Name"
                  type="text"
                  id="publisherName"
                  name="publisherName"
                  value={publisherName || ""}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Stack>
          </Stack>
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral" onClick={()=>navigate('/bookmasterlist')}>
                Cancel
              </Button>
              <Button type="submit" size="sm" variant="solid">
              { id ? "update" : "save"}
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
      </form>

      </Box>
  );
}
