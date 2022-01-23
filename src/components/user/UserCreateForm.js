import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  Checkbox,
  Typography,
  Grid,
  FormControlLabel,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { createUserAction } from "../../actions/userActions";
import Loading from "../loading/Loading";
import Action from "../buttons/Action";

const validationSchema = yup.object({
  name: yup
    .string("Introduzca el nombre")
    .required("El nombre es requerido")
    .min(2, "Debe contener al menos dos caracteres")
    .max(20, "No debe contener más de 20 caracteres"),
  cola_id: yup.number().required("Debes elegir una cola"),
  atencione_id: yup.number(),
});

const UserCreateForm = ({}) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      cola_id: 2,
      atencione_id: 1,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const res= await dispatch(createUserAction(values)); 
     if(res && res.status === 201){
       setSubmitting(false);
     }else if(res === undefined){
      setSubmitting(false);
     }
     /*  alert(JSON.stringify(values)); */
    },
  });

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 500, p: 5 }}>
          {/* {loading && <Loading />} */}
          <Typography
            variant="h3"
            align="center"
            display="block"
            color="primary"
            sx={{ minWidth: 500, mb: 5 }}
            gutterBottom
          >
            {`El "Id" del usuario será creado
              automáticamente por el sistema`}
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="name"
                  name="name"
                  label="Nombre"
                  fullWidth
                  autocomplete="off"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="cola_id"
                  select
                  name="cola_id"
                  label="Elige la cola"
                  value={formik.values.cola_id}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.cola_id && Boolean(formik.errors.cola_id)
                  }
                  helperText={formik.touched.cola_id && formik.errors.cola_id}
                  fullWidth
                >
                  <MenuItem value={1}>{"Cola uno"}</MenuItem>
                  <MenuItem value={2}>{"Cola dos"}</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Action info={"Crear nuevo usuario"} disabled={false} />
              </Grid>
            </Grid>
          </form>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

export default UserCreateForm;
