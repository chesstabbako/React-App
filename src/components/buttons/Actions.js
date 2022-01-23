import { Box, Button } from "@material-ui/core";
import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const ButtonActions = (props) => {

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      <Button
        sx={{
          with: "40%",
        }}
        color="primary"
        size="small"
        variant="outlined"
        startIcon={<EditIcon />}
        onClick={props.edit}
        disabled={props.disableEdit ? props.disableEdit : false }
      >
        Edit
      </Button>
      <Button
        sx={{
          with: "40%",
          marginTop: "0.1rem",
        }}
        color="secondary"
        size="small"
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={props.delete}
        disabled={props.disableDelete ? props.disableDelete : false}
      >
        Delete
      </Button>
    </Box>
  );
};

export default ButtonActions;
