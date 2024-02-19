import * as React from 'react';
import Box from '@mui/joy/Box';
import { AspectRatio, Button, Card, CardActions, CardOverflow, Divider, FormControl, FormLabel, Input, Stack, Typography } from '@mui/joy';

export default function ConveyanceMaster() {
  return (
    <Box sx={{ flex: 1, width: '100%', marginTop:"3vh" }}>
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Conveyance Details Add</Typography>
            {/* <Typography level="body-sm">
              Customize how your ClassMaster information will apper to the networks.
            </Typography> */}
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >
            <Stack direction="column" spacing={1}>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Code</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder=" Code" />
                  {/* <Button>+</Button> */}
                  {/* <Input size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} /> */}
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                {/* <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input size="sm" />
                </FormControl> */}
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Route Name</FormLabel>
                  <Input
                    size="sm"
                    type="text"
                    // startDecorator={<EmailRoundedIcon />}
                    placeholder="Route Name"
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Rate</FormLabel>
                  <Input
                    size="sm"
                    type="text"
                    // startDecorator={<EmailRoundedIcon />}
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
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
                      sm: 'flex-column',
                      md: 'flex-row',
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
