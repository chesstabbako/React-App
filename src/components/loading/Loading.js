import { Box, CircularProgress, Grid } from "@material-ui/core";

const Loading = (props) => {
  return (
    <Grid item xs={12}>
      <Box m="auto">
        <CircularProgress />
      </Box>
    </Grid>
  );
};

export default Loading;
