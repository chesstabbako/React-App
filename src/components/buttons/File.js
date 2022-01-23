import { Box, Button, IconButton } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import React from "react";

const ButtonFile = (props) => {
  return (
    <>
      <label htmlFor={props.htmlFor}>
        <Button variant="contained" color="primary" component="span">
          {props.info}
        </Button>
      </label>
      <label htmlFor={props.htmlFor}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </>
  );
};

export default ButtonFile;
