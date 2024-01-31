import { Link } from "react-router-dom";

import {
  Checkbox,
  FormControlLabel,
  TableCell,
  TableRow,
} from "@mui/material";

import { Edit } from "@mui/icons-material";

import PropTypes from 'prop-types';

import { useUpdateAttractionMutation } from "../../store/apis/dappApi";

function ListRow({ row }) {
  const [updateAttraction] = useUpdateAttractionMutation();

  return (
    <TableRow
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>
      <FormControlLabel
        control={
          <Checkbox
            checked={row.completed}
            onChange={(event) => {
              updateAttraction({ ...row, completed: event.target.checked });
            }}
          />
        }
        label="Completed"
      />
      </TableCell>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell>{row.park}</TableCell>
      <TableCell>{row.location}</TableCell>
      <TableCell>
        <Link to={`/attractions/${row.id}/edit`}>
          <Edit sx={{ fontSize: 18 }} />
        </Link>
      </TableCell>
    </TableRow>
  )
}

export default ListRow;

ListRow.propTypes = {
  row: PropTypes.object.isRequired,
};