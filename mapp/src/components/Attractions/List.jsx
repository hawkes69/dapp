import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useFetchAttractionsQuery } from "../../store/apis/dappApi";
import { Tab } from "@mui/material";

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
              {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </TableCell>
            <TableCell>
              Attraction
              {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </TableCell>
            <TableCell>
              Park
              {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
