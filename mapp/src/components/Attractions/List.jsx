import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Add, Edit, ExpandLess, ExpandMore } from "@mui/icons-material";

import { useFetchAttractionsQuery } from "../../store/apis/dappApi";

function List() {
  const [toggle, setToggle] = useState(false);
  const { data, isLoading } = useFetchAttractionsQuery();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return isLoading ? (
    <div className="flex items-center justify-center h-screen">Loading...</div>
  ) : (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell onClick={handleToggle}>
              Completed
              {toggle ? <ExpandLess /> : <ExpandMore />}
            </TableCell>
            <TableCell>
              Attraction
              {toggle ? <ExpandLess /> : <ExpandMore />}
            </TableCell>
            <TableCell>
              Park
              {toggle ? <ExpandLess /> : <ExpandMore />}
            </TableCell>
            <TableCell>
              <Link to="/attractions/new">
                <Add />
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Checkbox
                  checked={row.completed}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.park}</TableCell>
              <TableCell>
                <Link to={`/attractions/${row.id}/edit`}>
                  <Edit sx={{ fontSize: 18 }} />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
