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

const UserListResults = ({ loading, error, users, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

 /*  const userAuth = useSelector((state) => state.userAuth);
  const { user : userAuthorize } = userAuth; */

  /* useEffect(() => {
    if (userAuthorize.type !== 'ADMIN') {
      navigate("/dashboard", { replace: true });
    }
  }, [userAuthorize]);
 */

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const deleteUser = (user) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(deleteUserAction(user));
          },
        },
        {
          label: "No",
          onClick: () =>
            navigate("/users", {
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
                <TableCell style={{ textAlign: "center" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.slice(page * limit, (page + 1) * limit).map(
                (user) =>
                  user.name.includes(filter) && (
                    <TableRow hover key={user._id}>
                      <TableCell>
                        <CellInfo info={user.name} />
                      </TableCell>
                      <TableCell>
                        <ButtonActions
                          delete={() => {
                            deleteUser(user._id);
                          }}
                          edit={() => {
                            navigate("/colaDos/edit/" + user._id, {
                              replace: true,
                            });
                          }}
                          disableDelete={ false }
                          disableEdit= { false }
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
        count={users.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

UserListResults.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserListResults;
