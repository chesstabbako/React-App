import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import moment from "moment";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction } from "src/actions/userActions";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import ButtonActions from "../buttons/Actions";
import Search from "../search/Search";
import CellInfo from "../table/CellInfo";
import Loading from "../loading/Loading";

const UserListResultsColaUno = ({ loading, error, users, usersCola1, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const deleteUser = (user) => {
    confirmAlert({
      title: "Confirmar Eliminar",
      message: "¿Estás seguro de querer eliminar?",
      buttons: [
        {
          label: "Sí",
          onClick: () => {
            dispatch(deleteUserAction(user));
          },
        },
        {
          label: "No",
          onClick: () =>
            navigate("/", {
              replace: true,
            }),
        },
      ],
    });
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        {loading && <Loading />}
        <Search onChange={handleSearchChange} placeholder={"Search User"} />
        <Box sx={{ minWidth: 500 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Atención</TableCell>
                <TableCell style={{ textAlign: "center" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersCola1.slice(page * limit, (page + 1) * limit).map(
                (user) =>
                  user.name.includes(filter) && (
                    <TableRow hover key={user._id}>
                      <TableCell>
                        <CellInfo info={user.name} />
                      </TableCell>
                      <TableCell>
                        <CellInfo info={user.atencione_id === 1 ? "Por atender" : "Atendido"} />
                      </TableCell>
                      <TableCell>
                        <ButtonActions
                          delete={() => {
                            deleteUser(user.id);
                          }}
                          edit={() => {
                            navigate("/colaUno/edit/" + user.id, {
                              replace: true,
                            });
                          }}
                          disableDelete={ user.atencione_id === 1 ? true : false }
                          disableEdit= { user.atencione_id === 1 ? false : true }
                        />
                      </TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={usersCola1.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

UserListResultsColaUno.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserListResultsColaUno;
