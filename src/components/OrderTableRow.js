import React from 'react';
import { Checkbox, Chip, Link, Box, Typography } from '@mui/joy';
// import RowMenu from './RowMenu';

function OrderTableRow({ row, selected, handleCheckboxChange }) {
  return (
    <tr key={row.id}>
      <td style={{ textAlign: 'center', width: 120 }}>
        {/* <Checkbox
          size="sm"
          checked={selected.includes(row.id)}
          color={selected.includes(row.id) ? 'primary' : undefined}
          onChange={(event) => handleCheckboxChange(event, row.id)}
          slotProps={{ checkbox: { sx: { textAlign: 'left' } } }}
          sx={{ verticalAlign: 'text-bottom' }}
        /> */}
      </td>
      <td>
        <Typography level="body-xs">{row.id}</Typography>
      </td>
      <td>
        <Typography level="body-xs">{row.date}</Typography>
      </td>
      <td>
        <Chip
          variant="soft"
          size="sm"
          startDecorator={{
            // Paid: <CheckRoundedIcon />,
            // Refunded: <AutorenewRoundedIcon />,
            // Cancelled: <BlockIcon />,
          }[row.status]}
          color={{
            Paid: 'success',
            Refunded: 'neutral',
            Cancelled: 'danger',
          }[row.status]}
        >
          {row.status}
        </Chip>
      </td>
      <td>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {/* <Avatar size="sm">{row.customer.initial}</Avatar> */}
          <div>
            <Typography level="body-xs">{row.customer.name}</Typography>
            <Typography level="body-xs">{row.customer.email}</Typography>
          </div>
        </Box>
      </td>
      <td>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Link level="body-xs" component="button">
            Download
          </Link>
          {/* <RowMenu /> */}
        </Box>
      </td>
    </tr>
  );
}

export default OrderTableRow;
