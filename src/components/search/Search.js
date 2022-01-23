import { Box, InputAdornment, SvgIcon, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = (props) => {
  return (
    <Box sx={{ mt: '1rem', mb: '2rem', mx: '1rem' }}>
          <Box sx={{ minWidth: 300 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              onChange={props.onChange}
              placeholder={props.placeholder}
              variant="outlined"
            />
          </Box>
    </Box>
  );
};

export default Search;
