import { Box, Typography } from "@material-ui/core";

const CellInfo = (props) => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Typography
        color="textPrimary"
        variant="body1"
      >
        {props.info}
      </Typography>
    </Box>
  );
};

export default CellInfo;
