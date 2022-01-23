import { Box } from "@material-ui/core";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const CellLink = (props) => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: 'flex-start',
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <OpenInNewIcon/> 
      <a
        href= {props.href}
        target="_blank"
        rel="noreferrer"
      >
       {props.slug}
      </a>
    </Box>
  );
};

export default CellLink;
