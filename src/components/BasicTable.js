import * as React from 'react';
import Table from '@mui/joy/Table';

export default function BasicTable() {
  return (
    <Table aria-label="basic table" sx={{display:"flex", flexDirection:"column", overflow:"scroll"}}>
      <thead>
        <tr>
          <th style={{ width: '40%' }}> Date</th>
          <th>Subject</th>
          <th>Time</th>
          <th>Year</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12/04/2024</td>
          <td>Bengali</td>
          <td>10:30</td>
          <td>2024</td>
          <td>Class 7</td>
        </tr>
        <tr>
          <td>15/04/2024</td>
          <td>English</td>
          <td>01:30</td>
          <td>2024</td>
          <td>Class 8</td>
        </tr>
        <tr>
          <td>14/04/2024</td>
          <td>Physics</td>
          <td>12:30</td>
          <td>2024</td>
          <td>Class 8</td>
        </tr>
      </tbody>
    </Table>
  );
}