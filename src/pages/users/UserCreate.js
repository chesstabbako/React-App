import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container } from "@material-ui/core";
import UserCreateForm from "src/components/user/UserCreateForm";

const UserCreate = () => {
  return (
    <>
      <Helmet>
        <title>Crear Usuario</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <UserCreateForm />
        </Container>
      </Box>
    </>
  );
};

export default UserCreate;
