import { useState } from "react";
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
  const [query, setQuery] = useState("");

  return isLoading ? (
    <div className="flex items-center justify-center h-screen">Loading...</div>
  ) : (
    <div className="flex flex-col gap-4 m-4">
      <input
        type="text"
        placeholder="Search by name, park, area, or true/false for completed"
        className="p-2 border-2 border-gray-200 rounded-md"
        style={{ width: "-webkit-fill-available" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Completed</TableCell>
              <TableCell>{type}</TableCell>
              <TableCell>
                <Link to={`/${type.toLowerCase()}/new`}>
                  <Add />
                </Link>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.filter((row) =>
              row.name.toLowerCase().includes(query) ||
              row.park.toLowerCase().includes(query) ||
              row.area.toLowerCase().includes(query) ||
              row.completed.toString().toLowerCase().includes(query)
              ).map((row) => (
              <ListRow key={row.id} row={row} type={type}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default List;

List.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};
