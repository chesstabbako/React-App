import { Alert, AlertTitle, Grid } from "@material-ui/core";
import React from "react";

const ErrorAlert = (props) => {
  return (
    <Grid item xs={12}>
    <Alert severity="error">
      <AlertTitle>{props.info}</AlertTitle>
      {props.error}
    </Alert>
  </Grid>
  );
};

export default ErrorAlert;