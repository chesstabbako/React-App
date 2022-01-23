import { Button } from "@material-ui/core";

const Action = (props) => {
  return (
    <Button disabled={props.disabled ? props.disabled : false } color="primary" variant="contained" fullWidth type="submit">
      {props.info}
    </Button>
  );
};

export default Action;
