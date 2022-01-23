import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Box, Container } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { allUserAction } from "../../actions/userActions";
import UserListResultsColaUno from "src/components/colaUno/UserListResultsColaUno";

const UserList = () => {
  const usersList = useSelector((state) => state.usersList);
  const { users, loading, error } = usersList;
  const dispatch = useDispatch();

  let usersCola1 = users.filter((e) => {
    if (e.cola_id === 1) {
      return e;
    }
    return false;
  });

  useEffect(() => {
    dispatch(allUserAction());
  }, []);

  return (
    <>
      <Helmet>
        <title>Usuarios en la cola uno</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <>
            <Box sx={{ pt: 3 }}>
              <UserListResultsColaUno
                users={users}
                usersCola1={usersCola1}
                loading={loading}
                error={error}
              />
            </Box>
          </>
        </Container>
      </Box>
    </>
  );
};

export default UserList;
