import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { allUserAction } from "src/actions/userActions";
import Loading from "src/components/loading/Loading";
import ColaUnoEditForm from "src/components/colaUno/ColaUnoEditForm";

const ColaUnoEdit = ({}) => {
  let { id } = useParams();

  let idInteger= parseInt(id);

  const usersList = useSelector((state) => state.usersList);
  const { users, userEdited, loading, error } = usersList;

  let user = users.find((e) => e.id === idInteger );

  if (!user) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>Editar usuario</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
          <Container maxWidth={false}>
            <ColaUnoEditForm
              user={user}
              userEdited={userEdited}
              loading={loading}
              error={error}
            />
          </Container>
      </Box>
    </>
  );
};

export default ColaUnoEdit;