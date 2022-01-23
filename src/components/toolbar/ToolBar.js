import { Box, Button } from "@material-ui/core";
import { Navigate, useNavigate } from "react-router-dom";

const ToolBar = (props) => {
  return (
    <Box {...props}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          color="primary"
          variant="contained"
          disabled={props.disableToolbar ? props.disableToolbar : false}
          onClick={props.redirect}
        >
          {props.title}
        </Button>
      </Box>
    </Box>
  );
};

export default ToolBar;
