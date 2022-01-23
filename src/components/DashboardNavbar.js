import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "./Logo";
import { useDispatch } from "react-redux";

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);
  const dispatch = useDispatch();

  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar sx={{ height: 64, background: 'white', borderBottom: '1px solid lightGray'}}>
        <RouterLink to="/">
          {'CREAR NUEVO USUARIO'}
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon sx={{ color: '#71B85F'}} />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

export default DashboardNavbar;
