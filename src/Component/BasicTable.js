import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function createData(name, age, course, batch, change) {
  return { name, age, course, batch, change };
}

const rows = [
  createData('Sitharam',23,'Zenith','December',
    <Link className='edit' to='/addStudent'>
      Edit
    </Link>
  ),
  createData('Abdul',24,'MERN','September',
    <Link className='edit' to='/addStudent'>
      Edit
    </Link>
  ),
  createData('Gokul',23,'Campus Ambassador','November',
    <Link className='edit' to='/addStudent'>
      Edit
    </Link>
  ),
  createData('Bhagat',23,'Back-End','September',
    <Link className='edit' to='/addStudent'>
      Edit
    </Link>
  ),
  createData('Gandhi',23,'Front-End','January',
    <Link className='edit' to='/addStudent'>
      Edit
    </Link>
  ),
];

const BasicTable = () => {
  return (
    <TableContainer
      sx={{
        width: '70%',
        margin: '40px auto',
        backgroundColor: 'skyblue',
        boxShadow: '5px 5px 5px grey',
        borderRadius: '0.8rem',
        position:'absolute',
        top:'30%',
        left:'15%'
      }}
      component={Paper}
      className='table'
    >
      <Table sx={{ width: '100%' }} aria-label='simple table'>
        <TableHead>
          <TableRow className='tablehead'>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Age</TableCell>
            <TableCell align='right'>Course</TableCell>
            <TableCell align='right'>Batch</TableCell>
            <TableCell align='right'>Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.age}</TableCell>
              <TableCell align='right'>{row.course}</TableCell>
              <TableCell align='right'>{row.batch}</TableCell>
              <TableCell align='right'>{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;