import * as React from 'react';
import Box from '@mui/joy/Box';
import { AspectRatio, Button, Card, CardActions, CardOverflow, Divider, FormControl, FormLabel, Input, Option, Select, Stack, Typography } from '@mui/joy';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function SectionMaster() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedClassName, setSelectedClassName] = useState('');




  const loadData = async () => {
    try {
        const response = await axios.get("http://localhost:3002/api/class");
        setData(response.data[0]);
        console.log(response.data);
    } catch (error) {
        setError(error.message);
    }
};
useEffect(() => {
    loadData();
}, []);

const handleClassChange = (event) => {
  if (event && event.target) {
    setSelectedClassName(event.target.value);
  }
};
  return (
    <Box sx={{ flex: 1, width: '100%', marginTop:"3vh" }}>
    <Card>
      <Box sx={{ mb: 1 }}>
        <Typography level="title-md">Section Details</Typography>
        {/* <Typography level="body-sm">
          Customize how your ClassMaster information will apper to the networks.
        </Typography> */}
      </Box>
      <Divider />
      <Stack
        direction="row"
        spacing={3}
        sx={{ my: 1 }}
      >
        <Stack direction="column" spacing={1}>
        </Stack>
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          <Stack spacing={1}>
            <FormLabel>Section Name</FormLabel>
            <FormControl
              sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
            >
              <Input size="sm" placeholder="Section Name" />
            </FormControl>
          </Stack>
          <Stack direction="row" spacing={2}>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Class Name</FormLabel>
              {/* <Input
                size="sm"
                type="Class Name"
                placeholder="Class Name"
                sx={{ flexGrow: 1 }}
              /> */}
              <Select
                    placeholder='Class Name'
                    value={selectedClassName}
                    onChange={handleClassChange}
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
                  {data.map((item) => (
                    <Option key={item.id} value={item.name}>{item.classname}</Option>
                  ))}
                </Select>
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
</Box>
  );
}
