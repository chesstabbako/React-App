import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
  Container,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Loading from "src/components/loading/Loading";
import ErrorAlert from "src/components/alerts/Error";
import ColaDosEditForm from "src/components/colaDos/ColaDosEditForm";

const ColaDosEdit = ({}) => {
  let { id } = useParams();

  let idInteger = parseInt(id);

  const usersList = useSelector((state) => state.usersList);
  const { users, userEdited, loading, error } = usersList;

  let user = users.find((e) => e.id === idInteger);

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
          <ColaDosEditForm
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

export default ColaDosEdit;
