import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import axios from 'axios';

const API_URL = "http://localhost:3000/api/v1/attractions";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function List() {
  const [toggle, setToggle] = useState(false);
  const [attractions, setAttractions] = useState([]);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setAttractions(items);
      }
    });
    return () => (mounted = false);
  }, []);

  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell onClick={handleToggle}>
              Completed
              {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
            </TableCell>
            <TableCell>
              Attraction
              {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
            </TableCell>
            <TableCell>
              Park
              {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attractions.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <Checkbox
                  checked={row.completed}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell >{row.park}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List;