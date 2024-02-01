import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Add } from "@mui/icons-material";

import ListRow from "./ListRow";

function List({ type, data, isLoading }) {

  return isLoading ? (
    <div className="flex items-center justify-center h-screen">Loading...</div>
  ) : (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Completed</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>Park</TableCell>
            <TableCell>Area</TableCell>
            <TableCell>
              <Link to={`/${type.toLowerCase()}/new`}>
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

List.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};
