import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Add, ExpandLess, ExpandMore } from "@mui/icons-material";

import { useFetchAttractionsQuery } from "../../store/apis/dappApi";
import ListRow from "./ListRow";

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
              Area
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
            <ListRow key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
