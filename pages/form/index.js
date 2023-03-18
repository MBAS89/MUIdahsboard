import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import AdminDashLayout from "../../components/AdminDashLayout";

const userSchema = yup.object().shape({
    name:yup.string().required("required"),
    email:yup.string().email("invalid email").required("required"),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
  confirmPassword: yup.string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match')
})

const initialValues = {
  enam:"",
  email:"",
  password:"",
  confirmPassword:""
}
const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values) =>[
      console.log(values)
    ]
  return (
    <AdminDashLayout>
    <Box m='20px' width='1630px'>
        <Header title='CREATE USER' subtitle='Create a New User Profile'/>
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
            {({values,errors,touched,handleBlur,handleChange,handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                    <Box 
                        display='grid'
                        gap='30px'
                        gridTemplateColumns="repeat(4,minmax(0,1fr))"
                        sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}>
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="password"
                        label="Password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="password"
                        label="Confirm Password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirmPassword}
                        name="confirmPassword"
                        error={!!touched.confirm && !!errors.confirm}
                        helperText={touched.confirm && errors.confirm}
                        sx={{ gridColumn: "span 2" }}
                    />
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button type="submit" color="secondary" variant="contained">
                            Create New User
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    </Box>
    </AdminDashLayout>
  )
}

export default Form