import * as React from 'react';
import Box from '@mui/joy/Box';
import { AspectRatio, Button, Card, CardActions, CardOverflow, Divider, FormControl, FormLabel, Input, Stack, Typography } from '@mui/joy';
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  classcode: "",
  classname: ""
};

export default function ClassMaster() {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { classcode, classname } = state;
  const { id } = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3002/api/class/${id}`)
  //     .then((resp) => setState({ ...resp.data[0] }));
  // }, [id]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!classcode || !classname) {
      toast.error("Please provide value into each inpute field ");
    } else {
      axios
        .post("http://localhost:3002/api/createclass", {
          classcode,
          classname
        })
        .then(() => {
          setState({ classcode: "", classname: ""});
          console.log(setState);
        })
        .catch((err) => toast.error(err.respose.data));
      toast.success("class Add Successfully");
      setTimeout(() => navigate("/classlist"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <Box sx={{ flex: 1, width: '100%', marginTop:"3vh" }}>
        <button
        style={{ display: "flex" }}
        onClick={() => navigate("/classlist")}
      >
        {"<"}
      </button>
      <form onSubmit={handleSubmit}>
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Class Details</Typography>
            {/* <Typography level="body-sm">
              Customize how your ClassMaster information will apper to the networks.
            </Typography> */}
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'block', md: 'flex' }, my: 1 }}
          >
            <Stack direction="column" spacing={1}>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Class Code</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input 
                  size="sm" 
                  placeholder="Class Code"
                  type="text"
                  id="classcode"
                  name="classcode"
                  value={classcode || ""}
                  onChange={handleInputChange}
                  
                  />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Class Name</FormLabel>
                  <Input
                    size="sm"
                    type="Class Name"
                    // startDecorator={<EmailRoundedIcon />}
                    placeholder="Class Name"
                    sx={{ flexGrow: 1 }}
                    id="classname"
                    name="classname"
                    value={classname || ""}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button type='submit' size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
        </form>
    </Box>
  );
}
